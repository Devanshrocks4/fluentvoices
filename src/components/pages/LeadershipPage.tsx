import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { Image } from '@/components/ui/image';
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

const leadershipTeam = [
  {
    _id: '1',
    fullName: "Neeraj",
    role: "President",
    photo: NeerajImage.src,
    bio: "Leading with vision and empathy.",
    linkedin: "https://www.linkedin.com/in/neeraj-kumar007"
  },
  {
    _id: '2',
    fullName: "HarshVardhan",
    role: "General Secretary",
    photo: HarshImage.src,
    bio: "Orchestrating operational excellence.",
    linkedin: "https://www.linkedin.com/in/harshvardhanmishra071"
  },
  {
    _id: '3',
    fullName: "Aashi Saluja",
    role: "Vice President",
    photo: AashiImage.src,
    bio: "Driving community impact.",
    linkedin: "https://www.linkedin.com/in/the-fluent-voices-lpu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    _id: '4',
    fullName: "Devansh",
    role: "IT Team Head",
    photo: DevanshImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/devansh-gupta-559107255/"
  },
  {
    _id: '5',
    fullName: "Sukriti",
    role: "Content Manager",
    photo: SukritiImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/sukritii"
  },
  {
    _id: '6',
    fullName: "Yuvraj Kumar Singh",
    role: "Event Manager, Promotional Head & Content Manager",
    photo: YuvrajImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/-yuvraj-kumar-singh"
  },
  {
    _id: '7',
    fullName: "Anmol",
    role: "Assistant Social Media Manager & Treasurer",
    photo: AnmolImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/anmol-sharma32"
  },
  {
    _id: '8',
    fullName: "Akshat",
    role: "Meeting Manager",
    photo: AkshatImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/akshat-lpu"
  },
  {
    _id: '9',
    fullName: "Kumkum Mishra",
    role: "Promotional Manager",
    photo: KumkumImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/kumkum-mishra-14a739384"
  },
  {
    _id: '10',
    fullName: "Janvi",
    role: "Meeting Manager",
    photo: JanviImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/janvi-sharma19"
  },
  {
    _id: '11',
    fullName: "Aman",
    role: "Chief Editor & Assistant Social Media Manager",
    photo: AmanImage.src,
    bio: "",
    linkedin: "https://www.linkedin.com/in/aman-ambast-81908a300"
  }
];

export default function LeadershipPage() {
  const leaders = leadershipTeam;

  // Founder data
  const founder = {
    fullName: 'Mr.Vir Sapan Pratap Anand',
    role: 'The Visionary Leader',
    photo: 'https://static.wixstatic.com/media/05a073_8a5f393eceac478eb8703da4d75d0209~mv2.jpeg',
    bio: 'The visionary behind Fluent Voices, dedicated to empowering students through communication and leadership.'
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
              Leadership Team
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Meet the passionate individuals driving Fluent Voices forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-deep-purple rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    <Image
                      src={founder.photo}
                      alt={founder.fullName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      width={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r" />
                  </div>

                  {/* Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-primary-foreground font-heading text-sm font-bold mb-6 w-fit">
                      Founder
                    </div>
                    
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {founder.fullName}
                    </h2>
                    
                    <p className="font-paragraph text-xl text-secondary font-semibold mb-6">
                      {founder.role}
                    </p>
                    
                    <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
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
              Core Team
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              Dedicated leaders committed to empowering every voice
            </p>
          </motion.div>

          <div className="min-h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Glassmorphism Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                  <div className="relative bg-background/60 backdrop-blur-xl border border-foreground/10 rounded-3xl overflow-hidden h-full hover:border-primary/50 transition-all duration-500">
                    {/* Image */}
                    {leader.photo && (
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={leader.photo}
                          alt={leader.fullName || 'Team member'}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                          width={400}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="font-heading text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {leader.fullName}
                      </h3>

                      <p className="font-paragraph text-lg text-secondary font-semibold mb-4">
                        {leader.role}
                      </p>

                      {leader.bio && (
                        <p className="font-paragraph text-sm text-foreground/70 leading-relaxed mb-6">
                          {leader.bio}
                        </p>
                      )}

                      {/* Social Links */}
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group/link"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="font-paragraph text-sm">Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
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
                Want to Join Our Team?
              </h2>
              <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals to help us grow and make an impact
              </p>
              <a href="mailto:thefluentvoices@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-lg font-heading text-lg font-bold hover:bg-foreground hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
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
