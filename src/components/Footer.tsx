import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin, MessageCircle, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    explore: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership Team', href: '/leadership' },
      { label: 'Events', href: '/events' },
      { label: 'CSR Initiatives', href: '/csr' }
    ],
    connect: [
      { label: 'Podcasts', href: '/podcasts' },
      { label: 'Social Hub', href: '/social' },
      { label: 'Join Us', href: '/join' }
    ]
  };
const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/thefluentvoices?igsh=ZTFhNHk2YnR1MGd0', label: 'Instagram', color: 'from-primary to-secondary' },
    { icon: Youtube, href: 'https://youtube.com/@thefluentvoices?si=Cvu8d3GzX-HgNyDp', label: 'YouTube', color: 'from-secondary to-primary' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/the-fluent-voices-lpu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'from-primary to-deep-purple' },
    { icon: MessageCircle, href: 'https://whatsapp.com/channel/0029VbBeeRl6LwHoIxlroc3A', label: 'WhatsApp', color: 'from-secondary to-deep-purple' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-deep-purple/20 via-background to-background border-t border-foreground/10">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="font-heading text-2xl font-black text-primary-foreground">FV</span>
                </div>
              </motion.div>
              <span className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Fluent Voices
              </span>
            </Link>
            
            <p className="font-paragraph text-lg text-foreground/70 mb-6 max-w-md leading-relaxed">
              Empowering students through communication, leadership, and social responsibility. Your voice matters.
            </p>
            
            <div className="flex items-center gap-3 text-foreground/80 mb-4">
              <Mail className="w-5 h-5 text-primary" />
              <a 
                href="mailto:thefluentvoices@gmail.com" 
                className="font-paragraph hover:text-primary transition-colors"
              >
                thefluentvoices@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity`} />
                  <div className="relative w-12 h-12 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-foreground/20 group-hover:border-primary transition-colors">
                    <social.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-paragraph text-foreground/70 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-paragraph text-foreground/70 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Fluent Voices. All rights reserved.
            </p>
            
            <p className="font-paragraph text-sm text-foreground/60 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by the Fluent Voices Team
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
    </footer>
  );
}
