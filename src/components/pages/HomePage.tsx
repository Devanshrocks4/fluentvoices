// HPI 1.7-V
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  ArrowRight, Sparkles, Users, TrendingUp, Heart, Instagram, Youtube, Linkedin,
  MessageCircle, Play, Calendar, MapPin, Globe, Mic, ChevronRight, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Podcasts } from '@/entities';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AashiImage from '@/assets/images/Aashi.jpeg';
import DevanshImage from '@/assets/images/Devansh.png';
import AnmolImage from '@/assets/images/Anmol.jpeg';
import AkshatImage from '@/assets/images/Akshat.jpeg';
import SukritiImage from '@/assets/images/Sukriti.jpeg';
import KumkumImage from '@/assets/images/Kumkum.jpeg';
import JanviImage from '@/assets/images/Janvi.jpeg';
import AmanImage from '@/assets/images/Aman.jpeg';
import YuvrajImage from '@/assets/images/Yuvraj.jpeg';
import NeerajImage from '@/assets/images/Neeraj.png';
import HarshImage from '@/assets/images/Harsh.jpeg';

// --- Canonical Data Sources ---
const missionCards = [
  {
    icon: Sparkles,
    title: 'Empowerment',
    description: 'Unlock your potential through confidence-building workshops and public speaking mastery.',
    gradient: 'from-logo-pink via-deep-purple to-logo-cyan',
    delay: 0.1
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Develop leadership skills and communication excellence through hands-on experience.',
    gradient: 'from-logo-cyan via-deep-purple to-logo-pink',
    delay: 0.2
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'Create meaningful change through CSR initiatives and community engagement.',
    gradient: 'from-logo-pink via-logo-cyan to-deep-purple',
    delay: 0.3
  }
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/thefluentvoices?igsh=ZTFhNHk2YnR1MGd0', color: 'from-logo-pink to-logo-cyan' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@thefluentvoices?si=Cvu8d3GzX-HgNyDp', color: 'from-logo-cyan to-logo-pink' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/the-fluent-voices-lpu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'from-logo-pink to-deep-purple' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://whatsapp.com/channel/0029VbBeeRl6LwHoIxlroc3A', color: 'from-logo-cyan to-deep-purple' }
];

const statsData = [
  { number: '500+', label: 'Active Members' },
  { number: '50+', label: 'Events Hosted' },
  { number: '10+', label: 'NGO Partners' },
  { number: '100+', label: 'Lives Impacted' }
];

const leadershipTeam = [
  {
    name: "Neeraj",
    role: "President",
    image: NeerajImage.src,
    bio: "Leading with vision and empathy.",
    linkedin: "https://www.linkedin.com/in/neeraj-kumar007"
  },
  {
    name: "HarshVardhan",
    role: "General Secretary",
    image: HarshImage.src,
    bio: "Orchestrating operational excellence.",
    linkedin: "https://www.linkedin.com/in/harshvardhanmishra071"
  },
  {
    name: "Aashi Saluja",
    role: "Vice President",
    image: AashiImage.src,
    bio: "Driving community impact.",
    linkedin: "https://www.linkedin.com/in/the-fluent-voices-lpu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Devansh",
    role: "IT Team Head",
    image: DevanshImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/devansh-gupta-559107255/"
  },
  {
    name: "Sukriti",
    role: "Content Manager",
    image: SukritiImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/sukritii"
  },
  {
    name: "Yuvraj Kumar Singh",
    role: "Event Manager, Promotional Head & Content Manager",
    image: YuvrajImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/-yuvraj-kumar-singh"
  },
  {
    name: "Anmol",
    role: "Assistant Social Media Manager & Treasurer",
    image: AnmolImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/anmol-sharma32"
  },
  {
    name: "Akshat",
    role: "Meeting Manager",
    image: AkshatImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/akshat-lpu"
  },
  {
    name: "Kumkum Mishra",
    role: "Promotional Manager",
    image: KumkumImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/kumkum-mishra-14a739384"
  },
  {
    name: "Janvi",
    role: "Meeting Manager",
    image: JanviImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/janvi-sharma19"
  },
  {
    name: "Aman",
    role: "Chief Editor & Assistant Social Media Manager",
    image: AmanImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/aman-ambast-81908a300"
  }
];

const homeLeaders = leadershipTeam.filter(l => ['Neeraj', 'HarshVardhan', 'Aashi Saluja'].includes(l.name));

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

// Upcoming Events Data - sorted by eventDate (nearest first)
const upcomingEvents = [
  {
    title: "Pitch Perfect 2.0",
    eventDate: "2025-03-15",
    date: "March 15, 2025",
    location: "Main Auditorium",
    image: "events/3e680377-8847-497a-aa1d-1dcc18ce9878.png",
    description: "Showcase your pitching skills and compete for glory."
  },
  {
    title: "Marketing War Room",
    eventDate: "2025-03-22",
    date: "March 22, 2025",
    location: "Innovation Hub",
    image: "events/82fdfde2-4216-477f-a8cc-c829461fc02a.png",
    description: "Battle of marketing strategies and creative solutions."
  },
  {
    title: "Talent Fiesta 2.0",
    eventDate: "2025-04-05",
    date: "April 05, 2025",
    location: "Grand Hall",
    image: "/src/assets/images/event/0677946a-2c7c-46b4-89ac-b2cbf158afcb.png",
    description: "A celebration of diverse talents and performances."
  },
  {
    title: "Clue Carnival – The Next Chapter",
    eventDate: "2025-04-20",
    date: "April 20, 2025",
    location: "Event Center",
    image: "/src/assets/images/event/WhatsApp Image 2026-03-01 at 4.38.40 PM.jpeg",
    description: "An immersive mystery experience like never before."
  }
].sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime());

// For Home Page preview - top 2 upcoming events
const eventsData = upcomingEvents.slice(0, 2);



// --- Components ---

const SectionHeader = ({ title, subtitle, align = "center" }: { title: string, subtitle?: string, align?: "left" | "center" | "right" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-paragraph text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`h-1 w-24 bg-gradient-to-r from-logo-pink to-logo-cyan mt-6 ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "mr-auto"}`} />
  </div>
);

const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-soft-gold rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default function HomePage() {
  const [podcasts, setPodcasts] = useState<Podcasts[]>([]);

  useEffect(() => {
    loadPodcasts();
  }, []);

  const loadPodcasts = async () => {
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

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM dd, yyyy');
    } catch {
      return '';
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-background text-foreground min-h-screen overflow-clip selection:bg-primary selection:text-white">
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-background z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(75,0,130,0.3),rgba(10,10,10,1))] opacity-80" />
          <motion.div 
            className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px]"
            animate={{ 
              x: [0, 100, 0], 
              y: [0, 50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[120px]"
            animate={{ 
              x: [0, -100, 0], 
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <ParticleField />
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-40 md:pt-48 lg:pt-56"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <h1 className="font-heading text-6xl md:text-8xl leading-[1.1] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 lg:text-7xl">
              YOUR VOICE
            </h1>
            <h1 className="font-heading text-6xl md:text-8xl leading-[1.1] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient lg:text-7xl">
              YOUR POWER
            </h1>
          </motion.div>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-3xl mb-12"
          >
            Empowering students through communication, leadership, and social responsibility.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link to="/join">
              <Button className="h-14 px-10 rounded-full bg-primary hover:bg-primary/80 text-white font-heading text-lg tracking-wide shadow-[0_0_30px_-5px_rgba(255,0,255,0.6)] transition-all hover:scale-105">
                Join the Movement <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/podcasts">
              <Button variant="outline" className="h-14 px-10 rounded-full border-secondary text-secondary hover:bg-secondary/10 font-heading text-lg tracking-wide transition-all hover:scale-105">
                <Play className="mr-2 w-5 h-5 fill-current" /> Listen to Podcast
              </Button>
            </Link>
          </motion.div>

          {/* Social Quick Access */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex gap-6"
          >
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity`} />
                <social.icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* --- MISSION SECTION (Parallax Cards) --- */}
      <section className="relative py-32 w-full overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <SectionHeader title="Our Mission" subtitle="Building a community of confident communicators and impactful leaders." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {missionCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay, duration: 0.8 }}
                whileHover={{ y: -15 }}
                className="group relative h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 flex flex-col items-start overflow-hidden">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {card.title}
                  </h3>
                  <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- FOUNDER SPOTLIGHT (Asymmetrical Layout) --- */}
      <section className="relative py-32 bg-black/40 w-full">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Side */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                  <Image 
                    src="https://static.wixstatic.com/media/05a073_8a5f393eceac478eb8703da4d75d0209~mv2.jpeg" 
                    alt="Founder of Fluent Voices" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="font-heading text-white text-2xl font-bold">The Founder</p>
                    <h3 className="font-paragraph text-primary">Visionary Leader</h3>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl" />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b-2 border-r-2 border-secondary/50 rounded-br-3xl" />
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Passion</span>,<br />
                  Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Purpose</span>.
                </h2>
                <p className="font-paragraph text-xl text-foreground/80 mb-8 leading-relaxed">
                  "Fluent Voices was born from a simple yet powerful idea: that every student possesses a unique voice capable of changing the world. We are here to amplify that voice, to nurture the leaders of tomorrow, and to create a ripple effect of positive change through communication and action."
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                    <Star className="w-4 h-4 text-soft-gold fill-soft-gold" />
                    <span className="font-heading text-sm">Leadership</span>
                  </div>
                  <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-secondary" />
                    <span className="font-heading text-sm">Global Vision</span>
                  </div>
                  <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-heading text-sm">Empathy</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* --- STATS STRIP --- */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-heading text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2">
                  {stat.number}
                </h3>
                <p className="font-paragraph text-primary text-sm md:text-base uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- EVENTS & PROGRAMS (Timeline/Grid) --- */}
      <section className="relative py-32 w-full">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">Upcoming Events</h2>
              <p className="font-paragraph text-foreground/60 text-lg">Join us at our next gathering.</p>
            </div>
            <Link to="/events">
              <Button variant="ghost" className="text-secondary hover:text-secondary/80 group">
                View All Events <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <span className="font-heading text-sm text-white">{event.date}</span>
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="flex items-center text-foreground/60 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- PODCAST & CSR (Split Section) --- */}
      <section className="relative py-32 bg-gradient-to-b from-background to-deep-purple/20 w-full">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Podcast Column */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Mic className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Fluent Voices Podcast</h2>
              </div>
              <p className="font-paragraph text-lg text-foreground/70 mb-8">
                Conversations that inspire, educate, and empower the next generation of leaders.
              </p>
              <div className="space-y-6">
                {podcasts.slice(0, 2).map((pod, idx) => (
                  <motion.div
                    key={pod._id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                  >
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                      <Image src={pod.thumbnailImage || getYouTubeThumbnail(pod.youTubeEmbedUrl)} alt={pod.episodeTitle} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-heading text-xl font-bold mb-1 group-hover:text-secondary transition-colors">{pod.episodeTitle}</h4>
                      <p className="font-paragraph text-sm text-foreground/60 mb-2">{formatDate(pod.publicationDate)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/podcasts">
                  <Button className="w-full border-secondary text-secondary hover:bg-secondary hover:text-black" variant="outline">
                    View All Episodes
                  </Button>
                </Link>
              </div>
            </div>

            {/* CSR Column */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">CSR Initiatives</h2>
              </div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                <Image 
                  src="https://static.wixstatic.com/media/05a073_45574df411374d9bb330341a015cf350~mv2.png?originWidth=1152&originHeight=896" 
                  alt="CSR Activity" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                  <h3 className="font-heading text-2xl font-bold mb-2">CSR Initiatives</h3>
                  <p className="font-paragraph text-foreground/80 mb-6">Driving meaningful change through impactful community-led initiatives and projects.</p>
                  <Link to="/csr">
                    <Button className="bg-white text-black hover:bg-white/90">
                      Read Impact Stories
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- LEADERSHIP TEAM (Glass Cards) --- */}
      <section className="relative py-32 w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-deep-purple/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader title="Meet The Leaders" subtitle="The minds behind the movement." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeLeaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:border-primary/30 transition-colors duration-300">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-deep-purple/70 to-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-6 transform translate-y-0 group-hover:translate-y-0 duration-500">
                      <div className="flex flex-col items-center gap-4">
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-9 h-9 text-white group-hover:text-soft-gold transition-colors duration-500 cursor-pointer" />
                        </a>
                        <span className="font-heading text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wider uppercase">Connect</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="font-paragraph text-primary text-sm mb-4 uppercase tracking-wider">{leader.role}</p>
                  <p className="font-paragraph text-foreground/60 text-sm">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- FINAL CTA --- */}
      <section className="relative py-40 w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30" />
        <motion.div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white"
          >
            Ready to be Heard?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-paragraph text-xl md:text-2xl text-foreground/80 mb-12"
          >
            Join a community of passionate communicators and change-makers today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/join">
              <Button className="h-16 px-12 rounded-full bg-white text-black hover:bg-gray-200 font-heading text-xl font-bold shadow-2xl hover:scale-105 transition-transform">
                Become a Fluent Voice
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
