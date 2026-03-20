import React from "react";
import { Link } from "react-router-dom";
import Ticker from "../components/Ticker";
import GlareHover from "../components/GlareHover";
import StarBorder from "../components/StarBorder";
import LightRays from "../components/LightRays";
import {
  Award,
  Users,
  BookOpen,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
} from "lucide-react";
import { MOCK_EVENTS } from "../constants";

const Home: React.FC = () => {
  const featuredEvent = MOCK_EVENTS[0];

  return (
    <div>
      <Ticker />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/iei-home.jpg"
            alt="IEI Salem Center Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-iei-primary/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl ml-0 pl-8 pr-4 -mt-32">
          <div className="text-left">
            <div className="inline-block border-2 border-blue-900 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 animate-fade-in-up backdrop-blur-sm mt-28">
              ESTABLISHED 1920 • SALEM CHAPTER
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100 text-white">
              Empowering Engineering Excellence in Salem
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light animate-fade-in-up delay-300">
              Providing a global platform for technical advancement,
              professional networking, and institutional growth for the
              engineering fraternity in Salem region.
            </p>
            {/* Stats in Hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in-up delay-400">
              <div className="text-left border-2 border-iei-primary p-3 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  5,000+
                </div>
                <div className="text-xs text-gray-300">Active Members</div>
              </div>
              <div className="text-left border-2 border-iei-primary p-3 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  100+
                </div>
                <div className="text-xs text-gray-300">Years of Legacy</div>
              </div>
              <div className="text-left border-2 border-iei-primary p-3 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  15+
                </div>
                <div className="text-xs text-gray-300">Student Chapters</div>
              </div>
              <div className="text-left border-2 border-iei-primary p-3 rounded-lg backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  15
                </div>
                <div className="text-xs text-gray-300">
                  Engineering Divisions
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
              <Link to="/membership" className="skew-btn">
                <span className="skew-btn_lg">
                  <span className="skew-btn_sl"></span>
                  <span className="skew-btn_text">Become a Member</span>
                </span>
              </Link>
              <Link to="/events" className="hero-btn hero-btn-primary mt-2">
                View Upcoming Events
                <div className="icon">
                  <svg
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: About IEI SLC */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="/assets/agm.jpg.jpeg"
                alt="31st Annual General Meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-iei-accent/20 rounded-full blur-3xl -z-0"></div>
          </div>
          <div>
            <span className="text-iei-accent font-bold tracking-widest text-xs uppercase">
              Vision & Mission
            </span>
            <h2 className="text-4xl font-bold text-iei-primary mt-2 mb-6">
              Advancing the Frontiers of Engineering
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The{" "}
              <span className="text-sky-500 font-semibold">
                Institution of Engineers (India)
              </span>{" "}
              Salem Local Centre stands as a beacon for{" "}
              <span className="text-sky-500 font-semibold">
                professional development
              </span>{" "}
              in the region. We are dedicated to providing a forum where
              engineers can exchange knowledge, participate in{" "}
              <span className="text-sky-500 font-semibold">
                technical seminars
              </span>
              , and shape the future of{" "}
              <span className="text-sky-500 font-semibold">
                local infrastructure
              </span>
              .
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Regular <span class='text-sky-500 font-semibold'>technical sessions</span> with industry experts",
                "<span class='text-sky-500 font-semibold'>Career development</span> programs for young engineers",
                "<span class='text-sky-500 font-semibold'>Community outreach</span> and disaster management support",
                "Affiliation with the world's largest engineering body",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-iei-accent/10 flex items-center justify-center text-iei-accent">
                    ✓
                  </div>
                  <span
                    className="text-gray-700 font-medium"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center text-iei-primary font-bold hover:gap-2 transition-all"
            >
              Learn More About Our History <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Event Section (QC-NDT Style) */}
      <section className="py-24 bg-iei-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="white" />
          </svg>
        </div>

        {/* Light Rays Background */}
        <div className="absolute inset-0 opacity-70 animate-pulse-slow">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.2}
            lightSpread={1.2}
            rayLength={2.2}
            pulsating={false}
            fadeDistance={1.2}
            saturation={1.0}
            followMouse={false}
            mouseInfluence={0}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold">Featured Event</h2>
              <p className="text-iei-accent mt-2 font-medium">
                Flagship session for the 2025 calendar
              </p>
            </div>
            <Link
              to="/events"
              className="hidden md:block border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-iei-primary transition-all"
            >
              View All Events
            </Link>
          </div>

          <GlareHover
            width="100%"
            height="auto"
            background="transparent"
            borderRadius="1.5rem"
            borderColor="rgba(255, 255, 255, 0.1)"
            glareColor="#ffffff"
            glareOpacity={0.15}
            glareAngle={-45}
            glareSize={300}
            transitionDuration={800}
            className="bg-white/5 backdrop-blur-lg"
          >
            <div className="flex flex-col md:flex-row shadow-2xl w-full h-full">
              <div className="md:w-1/2 aspect-video md:aspect-auto">
                <img
                  src={featuredEvent.imageUrl}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-iei-accent text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                    {featuredEvent.type}
                  </span>
                  <span className="text-gray-400 text-xs">
                    • {featuredEvent.status}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {featuredEvent.title}
                </h3>
                <div className="space-y-3 mb-8 text-gray-300">
                  <p className="flex items-center gap-2">
                    <MapPin size={18} /> {featuredEvent.venue}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar size={18} /> {featuredEvent.date}
                  </p>
                </div>
                <p className="text-gray-400 mb-8 line-clamp-3">
                  {featuredEvent.description}
                </p>
                <div className="flex gap-4">
                  <StarBorder
                    as="button"
                    color="#ffffff"
                    speed="4s"
                    thickness={2}
                    style={
                      {
                        "--inner-bg": "white",
                        "--inner-text": "#1e40af",
                        "--inner-border": "transparent",
                      } as React.CSSProperties
                    }
                  >
                    Register Now
                  </StarBorder>
                  <StarBorder
                    as="button"
                    color="rgba(255, 255, 255, 0.6)"
                    speed="5s"
                    thickness={2}
                    style={
                      {
                        "--inner-bg": "transparent",
                        "--inner-text": "white",
                        "--inner-border": "rgba(255, 255, 255, 0.3)",
                      } as React.CSSProperties
                    }
                  >
                    Brochure
                  </StarBorder>
                </div>
              </div>
            </div>
          </GlareHover>
        </div>
      </section>

      {/* Partners/Affiliations - Auto Scroll */}
      <section className="py-16 bg-gray-50 border-t overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-gray-500 font-bold uppercase tracking-widest text-xs mb-10">
            Our Partners & Affiliations
          </h3>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-partners gap-16 items-center">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 items-center shrink-0">
                <img
                  src="https://picsum.photos/seed/partner1/150/80"
                  alt="Partner 1"
                  className="h-16 w-auto object-contain transition-all opacity-60 hover:opacity-100"
                />
                <img
                  src="https://picsum.photos/seed/partner2/150/80"
                  alt="Partner 2"
                  className="h-16 w-auto object-contain transition-all opacity-60 hover:opacity-100"
                />
                <img
                  src="https://picsum.photos/seed/partner3/150/80"
                  alt="Partner 3"
                  className="h-16 w-auto object-contain transition-all opacity-60 hover:opacity-100"
                />
                <img
                  src="https://picsum.photos/seed/partner4/150/80"
                  alt="Partner 4"
                  className="h-16 w-auto object-contain transition-all opacity-60 hover:opacity-100"
                />
                <img
                  src="https://picsum.photos/seed/partner5/150/80"
                  alt="Partner 5"
                  className="h-16 w-auto object-contain transition-all opacity-60 hover:opacity-100"
                />
                <img
                  src="https://picsum.photos/seed/partner6/150/80"
                  alt="Partner 6"
                  className="h-16 w-auto object-contain transition-all opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#001f47] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-12">
                Have queries about membership, technical activities, or chapter
                collaborations? The Institution of Engineers (India) Salem Local
                Centre is here to assist you with all your professional needs.
              </p>

              {/* Address */}
              <div className="flex gap-6 mb-8">
                <div className="shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-iei-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-iei-accent font-bold text-lg mb-1">
                    Address
                  </h4>
                  <p className="text-gray-400">
                    Salem Local Centre, Sona College of Technology Campus, Salem, TN 636005
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 mb-8">
                <div className="shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-iei-primary">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-iei-accent font-bold text-lg mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-400">+91 427 244 0405</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6">
                <div className="shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-iei-primary">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-iei-accent font-bold text-lg mb-1">
                    Email
                  </h4>
                  <p className="text-gray-400">ieisalemlc@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white text-gray-900 p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-8">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-iei-primary outline-none transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-iei-primary outline-none transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Type your Message..."
                    rows={4}
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-iei-primary outline-none transition-colors bg-transparent resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded transition-colors mt-8">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
