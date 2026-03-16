import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, Sparkles, Users, TrendingUp, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState('');



  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    console.log('Form Data:', formData);

    try {
      // TODO: Replace with your actual EmailJS credentials
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      console.log('EmailJS Success:', result.status, result.text);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please check your EmailJS configuration.`);
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Sparkles,
      title: 'Skill Development',
      description: 'Master public speaking, communication, and leadership through hands-on workshops and practice sessions.'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with like-minded students, industry professionals, and build lasting relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Gain valuable experience, build your portfolio, and stand out in your career journey.'
    }
  ];

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
              Become a Fluent Voice
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Join a community of passionate communicators and change-makers. Your journey to confidence and impact starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Join Us?
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              Unlock your potential and make a real difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                
                <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 h-full hover:border-primary/50 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-deep-purple/20 to-background">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-primary">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
                  Ready to start your journey with Fluent Voices? Fill out the form and we'll get back to you soon.
                </p>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2 text-foreground">
                      Email Us
                    </h3>
                    <a 
                      href="mailto:thefluentvoices@gmail.com"
                      className="font-paragraph text-lg text-secondary hover:text-primary transition-colors"
                    >
                      thefluentvoices@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8">
                <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    'Quick response within 24-48 hours',
                    'Information about upcoming events and workshops',
                    'Details about membership and involvement opportunities',
                    'Invitation to our orientation session'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-foreground/70">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 hover:border-primary/50 transition-all">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold mb-4 text-foreground">
                      Message Sent!
                    </h3>
                    <p className="font-paragraph text-lg text-foreground/70">
                      Thank you for reaching out to Fluent Voices. Your message has been successfully sent.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-xl"
                      >
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="font-paragraph text-destructive text-sm">{submitError}</p>
                      </motion.div>
                    )}

                    <div>
                      <Label htmlFor="name" className="font-paragraph text-foreground mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`bg-background/50 border-foreground/20 focus:border-primary font-paragraph ${
                          errors.name ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="font-paragraph text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-paragraph text-foreground mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`bg-background/50 border-foreground/20 focus:border-primary font-paragraph ${
                          errors.email ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="font-paragraph text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-paragraph text-foreground mb-2 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: '' });
                        }}
                        className={`bg-background/50 border-foreground/20 focus:border-primary font-paragraph ${
                          errors.subject ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        placeholder="What is this about?"
                      />
                      {errors.subject && (
                        <p className="font-paragraph text-destructive text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-paragraph text-foreground mb-2 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        className={`bg-background/50 border-foreground/20 focus:border-primary font-paragraph min-h-[150px] ${
                          errors.message ? 'border-destructive focus:border-destructive' : ''
                        }`}
                        placeholder="Tell us why you want to join Fluent Voices..."
                      />
                      {errors.message && (
                        <p className="font-paragraph text-destructive text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 font-heading text-lg disabled:opacity-50"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'} <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
            
            <div className="relative px-12 py-24 text-center">
              <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-primary-foreground break-words leading-tight">
                Your Voice Matters
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Join us in creating a community where every voice is heard, valued, and empowered to make a difference.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
