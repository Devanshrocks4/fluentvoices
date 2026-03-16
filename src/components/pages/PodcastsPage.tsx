import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Podcasts } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

// Static podcasts data
const staticPodcasts = [
  {
    _id: 'static-1',
    episodeTitle: 'Voices of Change - Leadership & Community Impact',
    description: 'An inspiring conversation about leadership and community impact.',
    youTubeEmbedUrl: 'https://www.youtube.com/watch?v=-QkxyRXOAWM',
    thumbnailImage: 'https://img.youtube.com/vi/-QkxyRXOAWM/hqdefault.jpg',
    publicationDate: new Date('2024-10-15'),
    isPrimary: false
  },
  {
    _id: 'static-2',
    episodeTitle: 'Empowering Young Leaders - Fluent Voices Podcast',
    description: 'Exploring the journey of emerging leaders in our community.',
    youTubeEmbedUrl: 'https://youtu.be/cwTP0s_0DR8',
    thumbnailImage: 'https://img.youtube.com/vi/cwTP0s_0DR8/hqdefault.jpg',
    publicationDate: new Date('2024-10-10'),
    isPrimary: false
  },
  {
    _id: 'static-3',
    episodeTitle: 'Innovation in Education - New Learning Approaches',
    description: 'Discussing new approaches to learning and skill development.',
    youTubeEmbedUrl: 'https://youtu.be/_mLM38LScuw',
    thumbnailImage: 'https://img.youtube.com/vi/_mLM38LScuw/hqdefault.jpg',
    publicationDate: new Date('2024-10-05'),
    isPrimary: false
  },
  {
    _id: 'static-4',
    episodeTitle: 'Building Strong Communities - Social Responsibility',
    description: 'Insights on community engagement and social responsibility.',
    youTubeEmbedUrl: 'https://youtu.be/Qn-ZnTdCbBw',
    thumbnailImage: 'https://img.youtube.com/vi/Qn-ZnTdCbBw/hqdefault.jpg',
    publicationDate: new Date('2024-09-30'),
    isPrimary: false
  },
  {
    _id: 'static-5',
    episodeTitle: 'Fluent Voices Official Channel Content',
    description: 'Official content from the Fluent Voices community channel.',
    youTubeEmbedUrl: 'https://youtu.be/JNRaAPi9Rdc',
    thumbnailImage: 'https://img.youtube.com/vi/JNRaAPi9Rdc/hqdefault.jpg',
    publicationDate: new Date('2024-10-01'),
    isPrimary: true
  }
];

export default function PodcastsPage() {
  const [podcasts, setPodcasts] = useState<Podcasts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPodcast, setSelectedPodcast] = useState<Podcasts | null>(null);

  useEffect(() => {
    loadPodcasts();
  }, []);

  const loadPodcasts = async () => {
    setIsLoading(true);
    const result = await BaseCrudService.getAll<Podcasts>('podcasts');
    const dbPodcasts = result.items;

    // Merge static podcasts with database podcasts, avoiding duplicates
    const allPodcasts = [...dbPodcasts];
    for (const staticPod of staticPodcasts) {
      const exists = dbPodcasts.some(dbPod => dbPod.youTubeEmbedUrl === staticPod.youTubeEmbedUrl);
      if (!exists) {
        allPodcasts.push(staticPod as Podcasts);
      }
    }

    // Update Sample Podcast Episode URL, title, and date if exists
    allPodcasts.forEach(podcast => {
      if (podcast.episodeTitle === "Sample Podcast Episode") {
        podcast.youTubeEmbedUrl = "https://youtu.be/tv1N2lQgRoA";
        podcast.episodeTitle = "Fluent Voices - Community Voices Episode";
        podcast.publicationDate = new Date('2024-09-25');
      }
    });

    // Sort: episodes with valid thumbnails first, then by publicationDate descending
    const sorted = allPodcasts.sort((a, b) => {
      const aHasThumbnail = a.thumbnailImage || getYouTubeThumbnail(a.youTubeEmbedUrl);
      const bHasThumbnail = b.thumbnailImage || getYouTubeThumbnail(b.youTubeEmbedUrl);

      if (aHasThumbnail && !bHasThumbnail) return -1;
      if (!aHasThumbnail && bHasThumbnail) return 1;

      return new Date(b.publicationDate || 0).getTime() - new Date(a.publicationDate || 0).getTime();
    });

    setPodcasts(sorted);

    // Set featured podcast
    const featured = sorted.find(pod => pod.youTubeEmbedUrl?.includes('-QkxyRXOAWM'));
    if (featured) {
      setSelectedPodcast(featured);
    } else if (sorted.length > 0) {
      setSelectedPodcast(sorted[0]);
    }

    setIsLoading(false);
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM dd, yyyy');
    } catch {
      return '';
    }
  };

  const getYouTubeEmbedUrl = (url: string | undefined) => {
    if (!url) return '';

    // If it's already an embed URL, return it
    if (url.includes('embed')) return url;

    // Extract video ID from various YouTube URL formats
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const getYouTubeThumbnail = (url: string | undefined) => {
    if (!url) return '';

    // Extract video ID
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }

    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-deep-purple/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        <div className="relative max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Fluent Voices Podcast
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Conversations that inspire, educate, and empower the next generation of leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Podcast Player */}
      {selectedPodcast && (
        <section className="py-20 px-8">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all">
                {/* Video Player */}
                <div className="relative aspect-video bg-black">
                  {selectedPodcast.youTubeEmbedUrl && (
                    <iframe
                      src={getYouTubeEmbedUrl(selectedPodcast.youTubeEmbedUrl)}
                      title={selectedPodcast.episodeTitle || 'Podcast episode'}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* Episode Info */}
                <div className="p-8">
                  {selectedPodcast.publicationDate && (
                    <div className="flex items-center gap-2 text-secondary font-paragraph text-sm font-semibold mb-3">
                      <Calendar className="w-4 h-4" />
                      {formatDate(selectedPodcast.publicationDate)}
                    </div>
                  )}

                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {selectedPodcast.episodeTitle}
                  </h2>

                  {selectedPodcast.description && (
                    <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                      {selectedPodcast.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Podcast Gallery */}
      <section className="py-20 px-8 bg-gradient-to-br from-deep-purple/20 to-background">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
              All Episodes
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              Explore our collection of inspiring conversations and insights
            </p>
          </motion.div>

          <div className="min-h-[400px]">
            {isLoading ? null : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {podcasts.map((podcast, index) => (
                  <motion.div
                    key={podcast._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => {
                      setSelectedPodcast(podcast);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    
                    <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl overflow-hidden h-full hover:border-primary/50 transition-all duration-500">
                      {/* Thumbnail */}
                      <div className="relative h-48 overflow-hidden bg-deep-purple/20">
                        {(podcast.thumbnailImage || getYouTubeThumbnail(podcast.youTubeEmbedUrl)) ? (
                          <Image
                            src={podcast.thumbnailImage || getYouTubeThumbnail(podcast.youTubeEmbedUrl)}
                            alt={podcast.episodeTitle || 'Podcast thumbnail'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            style={podcast.episodeTitle === "Fluent Voices - Community Voices Episode" ? { filter: 'brightness(1.2) contrast(1.1)' } : {}}
                            width={400}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Play className="w-16 h-16 text-primary" />
                          </div>
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {podcast.publicationDate && (
                          <div className="flex items-center gap-2 text-secondary font-paragraph text-xs font-semibold mb-2">
                            <Calendar className="w-3 h-3" />
                            {formatDate(podcast.publicationDate)}
                          </div>
                        )}

                        <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {podcast.episodeTitle}
                        </h3>

                        {podcast.description && (
                          <p className="font-paragraph text-sm text-foreground/70 leading-relaxed line-clamp-3">
                            {podcast.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-deep-purple opacity-90" />
            
            <div className="relative px-8 py-20 text-center">
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
                Subscribe to Our Podcast
              </h2>
              <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Never miss an episode. Subscribe on YouTube for the latest conversations.
              </p>
              <a href="https://www.youtube.com/@thefluentvoices" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-lg font-heading text-lg font-bold hover:bg-foreground hover:text-background transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Subscribe on YouTube
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
