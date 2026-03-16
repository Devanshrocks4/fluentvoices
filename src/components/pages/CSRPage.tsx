import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, ExternalLink, Calendar, Handshake } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { CSRInitiatives, NGOPartners } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

export default function CSRPage() {
  const [initiatives, setInitiatives] = useState<CSRInitiatives[]>([]);
  const [partners, setPartners] = useState<NGOPartners[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    const [initiativesResult, partnersResult] = await Promise.all([
      BaseCrudService.getAll<CSRInitiatives>('csrinitiatives'),
      BaseCrudService.getAll<NGOPartners>('ngopartners')
    ]);
    
    setInitiatives(initiativesResult.items.sort((a, b) => 
      new Date(b.initiativeDate || 0).getTime() - new Date(a.initiativeDate || 0).getTime()
    ));
    setPartners(partnersResult.items);
    setIsLoading(false);
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM yyyy');
    } catch {
      return '';
    }
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
              CSR & Social Impact
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Creating meaningful change through community engagement and social responsibility
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, label: 'Lives Impacted', value: '100+', color: 'from-primary to-secondary' },
              { icon: Handshake, label: 'NGO Partners', value: '10+', color: 'from-secondary to-deep-purple' },
              { icon: Users, label: 'Volunteers', value: '50+', color: 'from-primary to-deep-purple' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                
                <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 text-center hover:border-primary/50 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="font-heading text-5xl font-black text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="font-paragraph text-lg text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
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
              Our Initiatives
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              Driving positive change through targeted social impact programs
            </p>
          </motion.div>

          <div className="min-h-[400px]">
            {isLoading ? null : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {initiatives.map((initiative, index) => (
                  <motion.div
                    key={initiative._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    
                    <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl overflow-hidden h-full hover:border-primary/50 transition-all duration-500">
                      {initiative.initiativeImage && (
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={initiative.initiativeImage}
                            alt={initiative.initiativeTitle || 'Initiative'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            width={600}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                        </div>
                      )}

                      <div className="p-8">
                        {initiative.initiativeDate && (
                          <div className="flex items-center gap-2 text-secondary font-paragraph text-sm font-semibold mb-3">
                            <Calendar className="w-4 h-4" />
                            {formatDate(initiative.initiativeDate)}
                          </div>
                        )}

                        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                          {initiative.initiativeTitle}
                        </h3>

                        {initiative.descriptionOfImpact && (
                          <p className="font-paragraph text-base text-foreground/70 leading-relaxed mb-6">
                            {initiative.descriptionOfImpact}
                          </p>
                        )}

                        {initiative.callToActionURL && (
                          <a href={initiative.callToActionURL} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-heading"
                            >
                              Learn More <ExternalLink className="ml-2 w-4 h-4" />
                            </Button>
                          </a>
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

      {/* NGO Partners */}
      <section className="py-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
              Our NGO Partners
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              Collaborating with organizations that share our vision for social impact
            </p>
          </motion.div>

          <div className="min-h-[300px]">
            {isLoading ? null : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 h-full hover:border-primary/50 transition-all duration-500">
                      {partner.logoImage && (
                        <div className="relative h-32 mb-6 flex items-center justify-center">
                          <Image
                            src={partner.logoImage}
                            alt={partner.partnerName || 'Partner logo'}
                            className="max-h-full w-auto object-contain"
                            width={200}
                          />
                        </div>
                      )}

                      <h3 className="font-heading text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors text-center">
                        {partner.partnerName}
                      </h3>

                      {partner.description && (
                        <p className="font-paragraph text-sm text-foreground/70 leading-relaxed mb-4 text-center">
                          {partner.description}
                        </p>
                      )}

                      {partner.partnershipStartDate && (
                        <p className="font-paragraph text-xs text-foreground/50 text-center mb-4">
                          Partners since {formatDate(partner.partnershipStartDate)}
                        </p>
                      )}

                      {partner.websiteUrl && (
                        <div className="text-center">
                          <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-secondary hover:text-primary font-paragraph"
                            >
                              Visit Website <ExternalLink className="ml-2 w-3 h-3" />
                            </Button>
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-deep-purple/20 to-background">
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
                Join Our CSR Initiatives
              </h2>
              <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Be part of the change. Volunteer with us and make a real difference in the community.
              </p>
              <a href="mailto:thefluentvoices@gmail.com">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-foreground hover:text-background font-heading text-lg px-8 py-6"
                >
                  Get Involved
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
