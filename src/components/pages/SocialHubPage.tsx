import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Youtube,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Facebook
} from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { SocialLinks } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import achievement images from social_hub
const achievementImages = [
  { src: '/social_hub/achievement1.jpeg', alt: 'Fluent Voices member achievement – placement' },
  { src: '/social_hub/achievement2.jpeg', alt: 'Fluent Voices alumni success story' },
  { src: '/social_hub/achievement3.jpeg', alt: 'Fluent Voices member achievement – placement' },
  { src: '/social_hub/achievement4.jpeg', alt: 'Fluent Voices alumni success story' },
  { src: '/social_hub/achievement5.jpeg', alt: 'Fluent Voices member achievement – placement' }
];

// Event images from hub folder - manually mapped for reliability
const eventImagesList = [
  { src: 'hubs/_MG_5632.JPG', alt: 'Event highlight 1' },
  { src: 'hubs/_MG_5651.JPG', alt: 'Event highlight 2' },
  { src: 'hubs/_MG_5666.JPG', alt: 'Event highlight 3' },
  { src: 'hubs/_MG_5681.JPG', alt: 'Event highlight 4' },
  { src: 'hubs/_MG_5756.JPG', alt: 'Event highlight 5' },
  { src: 'hubs/_MG_5803.JPG', alt: 'Event highlight 6' },
  { src: 'hubs/_MG_5919.JPG', alt: 'Event highlight 7' }
];

export default function SocialHubPage() {
  const [socialLinks, setSocialLinks] = useState<SocialLinks[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSocialLinks();
  }, []);

  const loadSocialLinks = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<SocialLinks>('sociallinks');
      const activeLinks = result.items.filter(link => link.isActive);
      setSocialLinks(activeLinks);
    } catch (error) {
      console.error('Failed to load social links:', error);
      setSocialLinks([]);
    }
    setIsLoading(false);
  };

  // Correct URLs map (OVERRIDES DB)
  const urlMap: Record<string, string> = {
    Facebook: 'https://www.facebook.com/share/r/1GJKnWPMeQ/',
    Instagram: 'https://www.instagram.com/thefluentvoices?igsh=ZTFhNHk2YnR1MGd0',
    YouTube: 'https://youtube.com/@thefluentvoices?si=Cvu8d3GzX-HgNyDp',
    LinkedIn: 'https://www.linkedin.com/company/thefluentvoices',
    WhatsApp: 'https://wa.me/'
  };

  const iconMap: Record<string, any> = {
    Instagram: () => <svg className="w-32 h-32 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
    YouTube: Youtube,
    LinkedIn: Linkedin,
    WhatsApp: MessageCircle,
    Facebook
  };

  const colorMap: Record<string, string> = {
    Instagram: 'from-primary to-secondary',
    YouTube: 'from-secondary to-primary',
    LinkedIn: 'from-primary to-deep-purple',
    WhatsApp: 'from-secondary to-deep-purple',
    Facebook: 'from-primary to-secondary'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-deep-purple/10"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative max-w-[100rem] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Social Hub
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto">
              Connect with us across all platforms and join our vibrant community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Member Achievements */}
      <section className="py-20 px-8 bg-gradient-to-br from-deep-purple/10 to-background">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
              Member Achievements
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              Celebrating the success stories of our former members and alumni
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementImages.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-background/90 backdrop-blur-sm border border-foreground/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2">
                  <div className="aspect-[4/5] overflow-hidden rounded-t-3xl relative">
                    <Image
                      src={achievement.src}
                      alt={achievement.alt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-paragraph text-sm text-foreground/70">
                      Success Story #{index + 1}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Glimpse Section - New Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
              Events Glimpse
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              Highlights from our events, workshops, and community engagements
            </p>
          </motion.div>

          {/* Responsive Grid: 3 columns desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImagesList.map((eventImage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Soft border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Image container with aspect ratio */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={eventImage.src}
                    alt={eventImage.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Cards */}
      <section className="py-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          {isLoading ? null : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {socialLinks.map((link, index) => {
                const IconComponent = iconMap[link.platformName || ''] || ExternalLink;
                const colorGradient = colorMap[link.platformName || ''] || 'from-primary to-secondary';

                const finalUrl = urlMap[link.platformName || ''] || link.platformUrl;

                return (
                  <motion.a
                    key={link._id}
                    href={finalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative block"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60`} />

                    <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl overflow-hidden hover:border-primary/50">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className={`bg-gradient-to-br ${colorGradient} flex items-center justify-center p-12`}>
                          {link.iconImage ? (
                            <Image src={link.iconImage} alt={link.platformName || ''} width={128} />
                          ) : (
                            <IconComponent className="w-32 h-32 text-primary-foreground" />
                          )}
                        </div>

                        <div className="p-8 flex flex-col justify-center">
                          <h3 className="text-3xl font-bold mb-4">{link.platformName}</h3>
                          {link.description && (
                            <p className="text-foreground/70 mb-6">{link.description}</p>
                          )}
                          <div className="flex items-center gap-2 text-secondary font-semibold">
                            <span>Follow Us</span>
                            <ExternalLink className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* LinkedIn Section - Replaced Instagram */}
      <section className="py-20 px-8 bg-gradient-to-br from-deep-purple/20 to-background">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-primary">
              Connect with us on Our Social Handles
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              Stay updated with our latest updates, achievements, events, and collaborations across platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-deep-purple rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl p-12 hover:border-primary/50 transition-all text-center">
              <Linkedin className="w-20 h-20 text-[#0077B5] mx-auto mb-6" />
              <h3 className="font-heading text-3xl font-bold mb-4 text-foreground">
                The Fluent Voices
              </h3>
              <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Join our professional network for career opportunities, industry insights, and networking with alumni and industry experts.
              </p>
              <a 
                href="https://www.linkedin.com/company/thefluentvoices" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0077B5] to-[#005885] text-white hover:opacity-90 font-heading"
                >
                  Connect on LinkedIn <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-20 px-8 text-center">
        <Youtube className="w-20 h-20 text-secondary mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4">Fluent Voices Channel</h3>
        <a
          href="https://youtube.com/@thefluentvoices?si=Cvu8d3GzX-HgNyDp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Subscribe on YouTube</Button>
        </a>
      </section>

      <Footer />
    </div>
  );
}
