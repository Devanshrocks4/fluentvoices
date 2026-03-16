import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Events } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

// Local upcoming events data - sorted by eventDate (nearest first)
const localUpcomingEvents = [
  {
    _id: 'event-1',
    eventTitle: "Pitch Perfect 2.0",
    eventPhoto: "events/3e680377-8847-497a-aa1d-1dcc18ce9878.png",
    eventDateTime: new Date("2025-03-15T18:00:00"),
    location: "Main Auditorium",
    description: "Showcase your pitching skills and compete for glory. Join us for an exciting competition where participants present their ideas to a panel of judges.",
    registrationLink: "https://example.com/register/pitch-perfect-2.0",
    isUpcoming: true
  },
  {
    _id: 'event-2',
    eventTitle: "Marketing War Room",
    eventPhoto: "events/82fdfde2-4216-477f-a8cc-c829461fc02a.png",
    eventDateTime: new Date("2025-03-22T14:00:00"),
    location: "Innovation Hub",
    description: "Battle of marketing strategies and creative solutions. Teams compete to create the most innovative marketing campaign.",
    registrationLink: "https://example.com/register/marketing-war-room",
    isUpcoming: true
  },
  {
    _id: 'event-3',
    eventTitle: "Talent Fiesta 2.0",
    eventPhoto: "events/0677946a-2c7c-46b4-89ac-b2cbf158afcb.png",
    eventDateTime: new Date("2025-04-05T16:00:00"),
    location: "Grand Hall",
    description: "A celebration of diverse talents and performances. Show off your unique skills in this grand celebration of creativity.",
    registrationLink: "https://example.com/register/talent-fiesta-2.0",
    isUpcoming: true
  },
  {
    _id: 'event-4',
    eventTitle: "Clue Carnival – The Next Chapter",
    eventPhoto: "events/WhatsApp Image 2026-03-01 at 4.38.40 PM.jpeg",
    eventDateTime: new Date("2025-04-20T17:00:00"),
    location: "Event Center",
    description: "An immersive mystery experience like never before. Solve clues and unravel mysteries in this exciting event.",
    registrationLink: "https://example.com/register/clue-carnival",
    isUpcoming: true
  }
].sort((a, b) => new Date(a.eventDateTime || 0).getTime() - new Date(b.eventDateTime || 0).getTime());

export default function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<Events[]>([]);
  const [pastEvents, setPastEvents] = useState<Events[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    setIsLoading(true);
    // Use local events data instead of fetching from CMS
    setUpcomingEvents(localUpcomingEvents);
    // No past events for now
    setPastEvents([]);
    setIsLoading(false);
  };

  const formatEventDate = (dateTime: Date | string | undefined) => {
    if (!dateTime) return '';
    try {
      return format(new Date(dateTime), 'MMMM dd, yyyy • h:mm a');
    } catch {
      return '';
    }
  };

  const EventCard = ({ event, index }: { event: Events; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      
      <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-3xl overflow-hidden h-full hover:border-primary/50 transition-all duration-500">
        {/* Image */}
        {event.eventPhoto && (
          <div className="relative h-64 overflow-hidden">
            <Image
              src={event.eventPhoto}
              alt={event.eventTitle || 'Event'}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            
            {event.isUpcoming && (
              <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-primary-foreground font-heading text-sm font-bold">
                Upcoming
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
            {event.eventTitle}
          </h3>

          {/* Event Details */}
          <div className="space-y-3 mb-6">
            {event.eventDateTime && (
              <div className="flex items-start gap-3 text-foreground/70">
                <Calendar className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-sm">
                  {formatEventDate(event.eventDateTime)}
                </span>
              </div>
            )}
            
            {event.location && (
              <div className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-sm">
                  {event.location}
                </span>
              </div>
            )}
          </div>

          {event.description && (
            <p className="font-paragraph text-base text-foreground/70 leading-relaxed mb-6">
              {event.description}
            </p>
          )}

          {event.registrationLink && event.isUpcoming && (
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              <Button
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 font-heading"
              >
                Register Now <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

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
              Events & Programs
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Join us for workshops, seminars, and community events that transform voices into impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-8">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
              Upcoming Events
            </h2>
            <p className="font-paragraph text-xl text-foreground/80">
              Don't miss out on these exciting opportunities
            </p>
          </motion.div>

          <div className="min-h-[300px]">
            {isLoading ? null : upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={event._id} event={event} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Clock className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
                <p className="font-paragraph text-xl text-foreground/60">
                  No upcoming events at the moment. Check back soon!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {!isLoading && pastEvents.length > 0 && (
        <section className="py-20 px-8 bg-gradient-to-br from-deep-purple/20 to-background">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-primary">
                Past Events
              </h2>
              <p className="font-paragraph text-xl text-foreground/80">
                Celebrating our journey and achievements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={event._id} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
