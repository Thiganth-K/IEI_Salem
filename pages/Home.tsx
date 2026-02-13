
import React from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import { Award, Users, BookOpen, Globe } from 'lucide-react';
import { MOCK_EVENTS } from '../constants';

const Home: React.FC = () => {
  const featuredEvent = MOCK_EVENTS[0];

  return (
    <div>
      <Ticker />
      
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/salem-iei/1920/1080" 
            alt="IEI Salem" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-iei-primary/95 to-iei-primary/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-2xl animate-fade-in-up">
            <h4 className="text-iei-accent font-bold tracking-widest text-sm mb-4">ESTABLISHED 1920 • SALEM CHAPTER</h4>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Empowering Engineering Excellence in Salem
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Providing a global platform for technical advancement, professional networking, and institutional growth for the engineering fraternity in Salem region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/membership" className="bg-iei-accent text-white px-8 py-4 rounded-full font-bold text-center hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg">
                Become a Member
              </Link>
              <Link to="/events" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white hover:text-iei-primary transition-all">
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-inner border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Users size={32} className="text-iei-accent" />, label: 'Active Members', value: '5,000+' },
            { icon: <Award size={32} className="text-iei-accent" />, label: 'Years of Legacy', value: '100+' },
            { icon: <BookOpen size={32} className="text-iei-accent" />, label: 'Student Chapters', value: '15+' },
            { icon: <Globe size={32} className="text-iei-accent" />, label: 'Engineering Divisions', value: '15' },
          ].map((stat, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-iei-primary">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section: About IEI SLC */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img src="https://picsum.photos/seed/aboutiei/800/800" alt="Building" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-iei-accent/20 rounded-full blur-3xl -z-0"></div>
          </div>
          <div>
            <span className="text-iei-accent font-bold tracking-widest text-xs uppercase">Vision & Mission</span>
            <h2 className="text-4xl font-bold text-iei-primary mt-2 mb-6">Advancing the Frontiers of Engineering</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Institution of Engineers (India) Salem Local Centre stands as a beacon for professional development in the region. We are dedicated to providing a forum where engineers can exchange knowledge, participate in technical seminars, and shape the future of local infrastructure.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Regular technical sessions with industry experts",
                "Career development programs for young engineers",
                "Community outreach and disaster management support",
                "Affiliation with the world's largest engineering body"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-iei-accent/10 flex items-center justify-center text-iei-accent">✓</div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center text-iei-primary font-bold hover:gap-2 transition-all">
              Learn More About Our History <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Event Section (QC-NDT Style) */}
      <section className="py-24 bg-iei-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="white"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold">Featured Event</h2>
              <p className="text-iei-accent mt-2 font-medium">Flagship session for the 2025 calendar</p>
            </div>
            <Link to="/events" className="hidden md:block border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-iei-primary transition-all">
              View All Events
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/2 aspect-video md:aspect-auto">
              <img src={featuredEvent.imageUrl} alt={featuredEvent.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-iei-accent text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">{featuredEvent.type}</span>
                <span className="text-gray-400 text-xs">• {featuredEvent.status}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{featuredEvent.title}</h3>
              <div className="space-y-3 mb-8 text-gray-300">
                <p className="flex items-center gap-2"><MapPin size={18} /> {featuredEvent.venue}</p>
                <p className="flex items-center gap-2"><Calendar size={18} /> {featuredEvent.date}</p>
              </div>
              <p className="text-gray-400 mb-8 line-clamp-3">
                {featuredEvent.description}
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-iei-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                  Register Now
                </button>
                <button className="border border-white/30 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                  Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Affiliations */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-gray-400 font-bold uppercase tracking-widest text-xs mb-10">Our Partners & Affiliations</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <img src="https://picsum.photos/seed/p1/120/60" alt="Partner" />
            <img src="https://picsum.photos/seed/p2/120/60" alt="Partner" />
            <img src="https://picsum.photos/seed/p3/120/60" alt="Partner" />
            <img src="https://picsum.photos/seed/p4/120/60" alt="Partner" />
            <img src="https://picsum.photos/seed/p5/120/60" alt="Partner" />
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal icons helper
const MapPin = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const Calendar = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);

export default Home;
