import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Events', href: '/events' },
    { label: 'CSR & Initiatives', href: '/csr' },
    { label: 'Podcasts', href: '/podcasts' },
    { label: 'Social Hub', href: '/social' },
    { label: 'Join Us', href: '/join' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/thefluentvoices?igsh=ZTFhNHk2YnR1MGd0', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@thefluentvoices?si=Cvu8d3GzX-HgNyDp', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/the-fluent-voices-lpu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://whatsapp.com/channel/0029VbBeeRl6LwHoIxlroc3A', label: 'WhatsApp' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-foreground/10">
      <nav className="max-w-[120rem] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="https://static.wixstatic.com/media/05a073_e77c02c433d34cb4a7b33776a0ab488c~mv2.png"
                  width={48}
                  className="w-full h-full object-contain"
                  originWidth={1024}
                  originHeight={1024} />
              </div>
            </motion.div>
            <span className="font-heading text-2xl font-bold bg-gradient-to-r from-logo-pink via-logo-cyan to-logo-orange bg-clip-text text-transparent">
              Fluent Voices
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-paragraph text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Social Icons & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-foreground/20 hover:border-primary transition-colors group"
                >
                  <social.icon className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-paragraph text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Social Icons */}
                <div className="flex gap-4 pt-4 border-t border-foreground/10">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-foreground/20 hover:border-primary transition-colors"
                    >
                      <social.icon className="w-4 h-4 text-foreground hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
