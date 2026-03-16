import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, TrendingUp, Heart, Target, Lightbulb, Globe } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { MissionValues } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [missionValues, setMissionValues] = useState<MissionValues[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMissionValues();
  }, []);

  const loadMissionValues = async () => {
    setIsLoading(true);
    const result = await BaseCrudService.getAll<MissionValues>('missionvalues');
    const sortedValues = result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    setMissionValues(sortedValues);
    setIsLoading(false);
  };

  const iconMap: Record<string, any> = {
    'Empowerment': Sparkles,
    'Growth': TrendingUp,
    'Impact': Heart,
    'Leadership': Users,
    'Innovation': Lightbulb,
    'Community': Globe
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
              About Fluent Voices
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              We are a dynamic college club dedicated to transforming students into confident communicators, impactful leaders, and socially responsible change-makers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-primary">
                Our Story
              </h2>
              <div className="space-y-6 font-paragraph text-lg text-foreground/80 leading-relaxed">
                <p>
                  Fluent Voices was born from a simple yet powerful belief: every student has a unique voice that deserves to be heard. What started as a small group of passionate communicators has grown into a thriving community of leaders and change-makers.
                </p>
                <p>
                  We recognized that true empowerment comes not just from speaking well, but from leading with purpose and creating meaningful impact in our communities. This vision drives everything we do.
                </p>
                <p>
                  Today, we stand as a beacon for students seeking to develop their communication skills, leadership abilities, and social consciousness. Through workshops, events, podcasts, and CSR initiatives, we're building a generation of influential voices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-deep-purple/30 to-background border border-foreground/10 rounded-3xl p-12">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: Users, label: 'Community', value: '50+' },
                    { icon: Target, label: 'Events', value: '100+' },
                    { icon: Heart, label: 'NGO Partners', value: '2+' },
                    { icon: Globe, label: 'Impact', value: '100+' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="font-heading text-4xl font-black text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="font-paragraph text-sm text-foreground/70">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-deep-purple/20 to-background">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-primary">
              Our Mission & Values
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              The pillars that guide our journey and define our impact
            </p>
          </motion.div>

          <div className="min-h-[400px]">
            {isLoading ? null : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {missionValues.map((value, index) => {
                  const IconComponent = iconMap[value.title || ''] || Target;
                  
                  return (
                    <motion.div
                      key={value._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      
                      <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl overflow-hidden h-full hover:border-primary/50 transition-all duration-500">
                        {value.pillarImage && (
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={value.pillarImage}
                              alt={value.title || 'Mission pillar'}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                          </div>
                        )}
                        
                        <div className="p-8">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <IconComponent className="w-7 h-7 text-primary-foreground" />
                          </div>
                          
                          <h3 className="font-heading text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                            {value.title}
                          </h3>
                          
                          {value.tagline && (
                            <p className="font-paragraph text-sm text-secondary font-semibold mb-4">
                              {value.tagline}
                            </p>
                          )}
                          
                          <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-foreground">
              Our Vision
            </h2>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-12">
              To create a world where every student is equipped with the confidence, skills, and platform to express their ideas, lead with integrity, and drive positive change in their communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: 'Communication Excellence',
                  description: 'Master the art of effective communication through workshops, practice sessions, and real-world opportunities.'
                },
                {
                  title: 'Leadership Development',
                  description: 'Cultivate leadership qualities through hands-on experience, mentorship, and collaborative projects.'
                },
                {
                  title: 'Social Responsibility',
                  description: 'Create meaningful impact through CSR initiatives, NGO partnerships, and community engagement.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-deep-purple/20 to-background border border-foreground/10 rounded-2xl p-8 hover:border-primary/50 transition-all"
                >
                  <h3 className="font-heading text-2xl font-bold mb-4 text-primary">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
