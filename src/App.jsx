import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { PastEvents } from './pages/PastEventsPage';
import { TeamCard } from './components/TeamCard';
import {
  Menu, X,
  Globe, Wrench,
  ChevronRight, ChevronDown, Calendar, User, Code, ArrowRight
} from 'lucide-react';
// Official images from the user
const ieeeLogo = "ieee_logo.jpg";
const collegeLogo = "college_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">

        {/* Far Left: IEEE SB Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src={ieeeLogo}
            alt="IEEE BVDUDET Student Branch"
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Center: Desktop Links & Register Button */}
        <div className="hidden md:flex items-center justify-center space-x-8 font-bold text-xs tracking-widest uppercase text-gray-800 flex-1">
          <a href="#about" className="hover:text-blue-600 transition-all py-2">About</a>

          {/* Events Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-blue-600 transition-all py-2 cursor-pointer border-none bg-transparent uppercase tracking-widest">
              Events <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute top-full left-0 mt-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white border-t-2 border-blue-600 shadow-lg">
                <a href="#events" className="block px-4 py-3 text-xs text-gray-800 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100 transition-colors uppercase tracking-wider">Upcoming Events</a>
                <button onClick={() => window.location.hash = "#/past-events"} className="w-full text-left cursor-pointer block px-4 py-3 text-xs text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-colors uppercase tracking-wider">Past Events</button>
              </div>
            </div>
          </div>

          <a href="#team" className="hover:text-blue-600 transition-all py-2">Team</a>
          <a href="#register" className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-2 transition-all hover:bg-blue-600 hover:text-white ml-4 uppercase tracking-widest font-black">
            Register
          </a>
        </div>

        {/* Far Right: College Logo (Desktop) */}
        <div className="hidden md:flex flex-shrink-0 justify-end items-center">
          <img
            src={collegeLogo}
            alt="Bharati Vidyapeeth"
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Mobile Right Side: College Logo + Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-3">
          <img
            src={collegeLogo}
            alt="Bharati Vidyapeeth"
            className="h-8 w-auto object-contain mix-blend-multiply"
          />
          <button className="text-gray-800 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          <a href="#about" className="text-gray-800 hover:text-blue-600 font-bold text-base uppercase tracking-widest" onClick={() => setIsOpen(false)}>About</a>

          <div className="flex flex-col space-y-2">
            <span className="text-gray-500 font-medium text-xs uppercase tracking-widest">Events</span>
            <a href="#events" className="text-gray-800 hover:text-blue-600 font-bold text-xs pl-4 border-l-2 border-gray-200 uppercase tracking-widest" onClick={() => setIsOpen(false)}>Upcoming Events</a>
            <button onClick={() => { window.location.hash = "#/past-events"; setIsOpen(false); }} className="text-left cursor-pointer text-gray-800 hover:text-blue-600 font-bold text-xs pl-4 border-l-2 border-gray-200 uppercase tracking-widest">Past Events</button>
          </div>

          <a href="#team" className="text-gray-800 hover:text-blue-600 font-bold text-base pt-2 uppercase tracking-widest" onClick={() => setIsOpen(false)}>Team</a>

          <a href="#register" className="bg-transparent border-2 border-blue-600 text-blue-600 text-center px-6 py-3 font-black mt-6 hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const scrollToRegister = () => {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden bg-transparent">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      >
        <source src="IEEE_BVUDET_STUDENT_BRANCH_Cin.mp4" type="video/mp4" />
      </video>

      {/* Deep Navy/Cyan Overlay - Lightened to make video pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/30 via-[#0A192F]/20 to-[#0A192F]/90 z-10"></div>

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FFFF10_1px,transparent_1px),linear-gradient(to_bottom,#00FFFF10_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-20">
        <div className="inline-flex items-center space-x-2 glass-panel px-6 py-2 mb-8 border-[#00FFFF]/40">
          <span className="flex h-2 w-2 bg-[#00FFFF] animate-pulse glass-glow"></span>
          <span className="text-xs font-bold text-[#00FFFF] tracking-[0.3em] uppercase">Inaugural Batch 2026</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
          ENGINEERING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#FEF08A] text-glow drop-shadow-lg">IMPOSSIBLE.</span>
        </h1>

        <p className="text-base md:text-xl text-white mb-10 max-w-3xl mx-auto font-semibold leading-relaxed tracking-wide drop-shadow-md bg-transparent/40 backdrop-blur-sm p-4 rounded-xl border border-[#00FFFF]/20">
          Join the official IEEE Student Branch at BVDUDETNM. Connect with a global network of software engineers, innovators, and AI/ML enthusiasts.
        </p>

        <button onClick={scrollToRegister} className="inline-flex items-center justify-center space-x-3 bg-transparent border-2 border-[#FACC15] text-[#FACC15] px-10 py-4 text-base font-bold transition-all duration-300 hover:bg-[#FACC15] hover:text-[#0A192F] glass-glow group uppercase tracking-widest">
          <span>Join the Branch</span>
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
};

const NewsTicker = () => {
  return (
    <div className="w-full bg-[#051024]/80 border-y border-[#00FFFF]/20 text-[#00FFFF] py-3 overflow-hidden flex relative z-10 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
      <div className="animate-marquee font-bold text-xs md:text-base tracking-[0.2em] uppercase whitespace-nowrap">
        <span className="mx-8">///</span> Welcome to the official BVDUDETNM IEEE Student Branch website! <span className="mx-8">///</span> Join our upcoming Machine Learning & Neural Networks Bootcamp on Oct 15! <span className="mx-8">///</span>
      </div>
    </div>
  );
};

const WhatIsIEEE = () => {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]/90 relative z-10 border-y border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden bg-transparent rounded-xl flex justify-center items-center aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500 group p-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            >
              <source src="IEEE_BVUDET_STUDENT_BRANCH_Cin.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00FFFF]/20 to-transparent pointer-events-none mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFFF]"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFFF]"></div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full text-left">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-[2px] w-12 bg-blue-600"></div>
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">Global Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A192F] tracking-tight mb-8 uppercase">What Is IEEE?</h2>
          <p className="text-base text-gray-900 mb-6 font-medium font-light leading-relaxed text-justify tracking-wide">
            A trusted voice in engineering, technology, and research. The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
          </p>
          <p className="text-base text-gray-900 mb-10 font-medium font-light leading-relaxed text-justify tracking-wide">
            The organization comprises 39 technical societies, making up 30% of all global scientific literature in electrical engineering, computer engineering, and related fields. With members in over 160 countries, IEEE spearheads academic research and sets industry standards.
          </p>
          <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 font-bold transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-lg shadow-md hover:shadow-lg group uppercase tracking-widest">
            <span>IEEE Website</span>
            <Globe size={20} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const features = [
    {
      icon: <Code size={28} className="text-[#00FFFF]" />,
      title: "Technical Master",
      description: "From foundational programming concepts to advanced artificial intelligence and machine learning architectures. We provide extensive resources, hands-on workshops, and expert mentorship to ensure our members are always at the forefront of technical excellence and industry-ready skills."
    },
    {
      icon: <Globe size={28} className="text-[#00FFFF]" />,
      title: "Global Network",
      description: "Unlock access to IEEE's massive worldwide network of industry professionals, researchers, and alumni. Engage with pioneers across various disciplines, attend international conferences, and build long-lasting connections that can shape your future career path in technology."
    },

  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#051024]/80 relative z-10 border-b border-[#00FFFF]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-4 justify-center md:justify-start">
              <div className="h-[2px] w-12 bg-[#00FFFF]"></div>
              <span className="text-[#00FFFF] font-bold tracking-[0.2em] uppercase text-xs">Foundation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">Core Pillars.</h2>
          </div>
          <p className="text-base text-gray-400 font-light max-w-xl mt-6 md:mt-0 text-justify md:text-right tracking-wide">
            Bridging the gap between academic theory and cutting-edge industry practice at the Navi Mumbai campus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 group border-l-4 border-l-transparent hover:border-l-[#00FFFF]">
              <div className="bg-transparent border border-[#00FFFF]/30 w-16 h-16 flex items-center justify-center mb-8 glass-glow-hover transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-[#00FFFF] transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light tracking-wide">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageMarquee = () => {
  const images = [
    "IMG_2807.jpg",
    "IMG_2818.jpg",
    "IMG_2828.jpg",
    "IMG_2843.jpg",
    "IMG_2845.jpg",
    "IMG_2849.jpg",
    "IMG_2857.jpg",
    "IMG_2863.jpg",
    "IMG_2880.jpg",
    "IMG_2889.jpg",
    "IMG_2896.jpg",
    "IMG_2898.jpg",
    "IMG_2903.jpg",
    "IMG_2911.jpg"
  ];

  // Duplicate for seamless infinite scroll
  const scrollingImages = [...images, ...images];

  return (
    <section className="py-20 bg-transparent border-b border-[#00FFFF]/10 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase text-glow">Gallery & Highlights</h2>
        <p className="text-base text-[#00FFFF]/70 font-light tracking-widest uppercase">Glimpses from our recent events</p>
      </div>

      <div className="relative w-full overflow-hidden flex pb-8">
        {/* Gradients to mask the edges for a fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A192F] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A192F] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll gap-8 px-4">
          {scrollingImages.map((src, idx) => (
            <div key={idx} className="w-80 h-56 md:w-96 md:h-64 overflow-hidden shrink-0 glass-panel p-2 group">
              <div className="w-full h-full relative overflow-hidden border border-[#00FFFF]/20 group-hover:border-[#00FFFF] transition-colors duration-500">
                <img src={src} alt={`Event Highlight ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-[#00FFFF]/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    {
      title: "First Year Orientation",
      tag: "Orientation",
      date: "Aug 17, 2026",
    },
    {
      title: "Research Paper Publication Guidance",
      tag: "Guidance",
      date: "Aug 24, 2026",
    },

  ];

  return (
    <section id="events" className="py-24 px-6 bg-[#051024]/80 relative z-10 border-b border-[#00FFFF]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[2px] w-12 bg-[#00FFFF]"></div>
            <span className="text-[#00FFFF] font-bold tracking-[0.2em] uppercase text-xs">Agenda</span>
            <div className="h-[2px] w-12 bg-[#00FFFF]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">Upcoming Initiatives</h2>
          <p className="text-base text-gray-400 font-light tracking-widest uppercase">Get involved in our inaugural workshops</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((evt, idx) => (
            <div key={idx} className="glass-panel p-8 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer group glass-glow-hover">
              <div className="inline-block px-4 py-1 border border-[#00FFFF] text-[#00FFFF] text-xs font-bold uppercase tracking-widest mb-8 self-start bg-[#00FFFF]/5">
                {evt.tag}
              </div>
              <h3 className="text-xl font-black text-white mb-8 leading-tight uppercase group-hover:text-[#00FFFF] transition-colors">{evt.title}</h3>
              <div className="flex items-center text-gray-400 mt-auto pt-6 border-t border-[#00FFFF]/20 group-hover:border-[#00FFFF]/50 transition-colors">
                <Calendar size={18} className="mr-3 text-[#00FFFF]" />
                <span className="text-xs font-bold tracking-widest uppercase">{evt.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Team = () => {
  const facultyPatrons = [
    { name: "Dr. Mohan Awasthy", role: "Principal", department: "BVDUDET NM", image: "princ.jpg" },
    { name: "Dr. Kamal Mehta", role: "Vice Principal", department: "BVDUDET NM", image: "vprinc.jpeg" },
    { name: "Dr. Nidhi Sharma", role: "Head of Department", department: "CSE", image: "hod.jpg" }
  ];

  const counsellor = [
    { name: "Dr. Nusrat Parveen", role: "Branch Counsellor", designator: "U0", bio: "Associate Professor in the Department of Computer Science and Engineering with 25 years of teaching experience. Her expertise includes Artificial Intelligence, Machine Learning, Web Technologies, and Database Systems, with research focused on AI-based medical diagnosis. She has published 38 research papers, authored one book chapter with Taylor & Francis (CRC Press), holds 14 published patents (4 granted), and serves as a reviewer for reputed Scopus-indexed journals. She is also guiding Ph.D. scholars and has received several awards for her research contributions. As the IEEE Student Branch Counselor, Dr. Parveen is committed to inspiring students to engage in technical innovation, research, professional development, and IEEE activities, while fostering a culture of lifelong learning and leadership.", image: "nus.jpg" }
  ];

  const chairAndVice = [
    { name: "Harsh Koli", role: "Chairperson", designator: "U1", bio: "Final Year CSE A.", image: "chair.jpeg" },
    { name: "Aayush Pandey", role: "Vice-Chairperson", designator: "U2", bio: "Final Year CSE A.", image: "vicechair.jpeg" }
  ];

  const coreMembers = [
    { name: "Atharva Pathak", role: "Web Master", designator: "R1", bio: "Final Year CSE A.", image: "webm.jpeg" },
    { name: "Sidharth Singh", role: "Treasurer", designator: "R2", bio: "Final Year CSE B.", image: "treas.jpeg" },
    { name: "Kunal Jaggi", role: "Secretary", designator: "R3", bio: "Final Year CSE A.", image: "secretary.jpeg" }
  ];

  const technical = [
    { name: "Aaryan Patil", role: "Technical Executive", designator: "T1", bio: "Second Year AIML B.", image: "aaryan.jpeg" },
    { name: "Atharva Pathak", role: "Web Master", designator: "T2", bio: "Final Year CSE A.", image: "webm.jpeg" }
  ];

  const prMarketing = [
    { name: "Rishika Verma", role: "PR & Marketing Head", designator: "M1", bio: "TY CSBS.", image: "rishika.jpeg" },
    { name: "Aditi Raorole", role: "Marketing Executive", designator: "M2", bio: "SY CSBS.", image: "aditi.jpeg" },
    { name: "Abhinaya Karthik", role: "PR Executive", designator: "M3", bio: "TY CSBS.", image: "abhinaya.jpeg" }
  ];

  const eventLogistics = [
    { name: "Jayesh Pote", role: "Event & Logistics Head", designator: "E1", bio: "TY CSE B.", image: "jayesh.jpeg" },
    { name: "Tanishk Rawat", role: "Event & Logistics Executive", designator: "E2", bio: "SY CSE B.", image: "tanishk.jpeg" },
    { name: "Urjja Kamble", role: "Event & Logistics Executive", designator: "E3", bio: "TY CSBS.", image: "urjja.jpeg" }
  ];

  const photographyMedia = [
    { name: "Megha Gurung", role: "Photography & Media Head", designator: "P1", bio: "TY CSE B.", image: "megha.jpeg" },
    { name: "Pranav Gaikwad", role: "Photography Executive", designator: "P2", bio: "SY CSE B.", image: "pranav.jpeg" },
    { name: "Soham Shinde", role: "Media Executive", designator: "P3", bio: "SY CSE C.", image: "soham.jpeg" }
  ];

  return (
    <section id="team" className="py-24 px-6 bg-[#0A0F1C] relative z-10 border-y border-[#2FB8FF]/10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-[#2FB8FF] shadow-[0_0_8px_rgba(47,184,255,0.6)]"></div>
            <span className="text-[#2FB8FF] font-mono tracking-[0.2em] uppercase text-xs">// CORE_TEAM</span>
            <div className="h-[1px] w-12 bg-[#2FB8FF] shadow-[0_0_8px_rgba(47,184,255,0.6)]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#EAF0F8] tracking-tight mb-4 uppercase font-['Space_Grotesk',sans-serif]">Leadership Schematic</h2>
        </div>

        <div className="w-full flex flex-col items-center relative">

          {/* Faculty Tier */}
          <div className="w-full relative flex justify-center mb-16">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#F4A340] shadow-[0_0_8px_rgba(244,163,64,0.6)] z-0 hidden md:block"></div>
            <div className="flex flex-col md:flex-row gap-8 relative z-10 w-full md:w-auto justify-center px-4">
              {facultyPatrons.map((patron, idx) => (
                <TeamCard key={`patron-${idx}`} member={patron} size="lg" isFaculty={true} />
              ))}
            </div>
          </div>

          <div className="circuit-line-v h-16 -mt-16 mb-8 relative z-0">
            <div className="circuit-node absolute -bottom-1 -left-[3px]"></div>
          </div>

          {/* Counsellor Tier */}
          <div className="w-full max-w-sm mb-16 relative z-10">
            {counsellor.map((member, idx) => (
              <TeamCard key={`counsellor-${idx}`} member={member} size="md" />
            ))}
          </div>

          <div className="circuit-line-v h-16 -mt-16 mb-8 relative z-0">
            <div className="circuit-node absolute -bottom-1 -left-[3px]"></div>
            <div className="circuit-line-h w-48 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
          </div>

          {/* Chair & Vice Chair Tier */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 relative z-10">
            <div className="col-span-1 sm:col-span-2 text-center mb-2">
              <span className="px-4 py-1 bg-[#2FB8FF]/10 text-[#2FB8FF] text-[10px] font-mono tracking-widest uppercase border border-[#2FB8FF]/30 rounded">// CHAIR & VICE CHAIR</span>
            </div>
            {chairAndVice.map((member, idx) => (
              <TeamCard key={`chair-${idx}`} member={member} size="md" />
            ))}
          </div>

          <div className="circuit-line-v h-16 -mt-16 mb-8 relative z-0">
            <div className="circuit-node absolute -bottom-1 -left-[3px]"></div>
            <div className="circuit-line-h w-64 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
          </div>

          {/* Core Members Tier */}
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 relative z-10">
            <div className="col-span-1 sm:col-span-3 text-center mb-2">
              <span className="px-4 py-1 bg-[#2FB8FF]/10 text-[#2FB8FF] text-[10px] font-mono tracking-widest uppercase border border-[#2FB8FF]/30 rounded">// CORE MEMBERS</span>
            </div>
            {coreMembers.map((member, idx) => (
              <TeamCard key={`core-${idx}`} member={member} size="md" />
            ))}
          </div>

          <div className="circuit-line-v h-16 -mt-20 mb-8 relative z-0">
            <div className="circuit-node absolute -bottom-1 -left-[3px]"></div>
            <div className="circuit-line-h w-[80%] max-w-5xl absolute bottom-0 left-1/2 -translate-x-1/2"></div>
          </div>

          {/* Domain Modules (Grid of 4) */}
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

            {/* Technical */}
            <div className="glass-panel p-6 border border-[#2FB8FF]/20 rounded-xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 circuit-line-v"></div>
              <div className="text-center mb-6">
                <span className="text-[#EAF0F8] font-black tracking-widest uppercase text-sm border-b border-[#2FB8FF]/30 pb-2">Technical</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technical.map((member, idx) => <TeamCard key={`tech-${idx}`} member={member} size="sm" />)}
              </div>
            </div>

            {/* PR & Marketing */}
            <div className="glass-panel p-6 border border-[#2FB8FF]/20 rounded-xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 circuit-line-v"></div>
              <div className="text-center mb-6">
                <span className="text-[#EAF0F8] font-black tracking-widest uppercase text-sm border-b border-[#2FB8FF]/30 pb-2">PR & Marketing</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {prMarketing.map((member, idx) => <TeamCard key={`pr-${idx}`} member={member} size="sm" />)}
              </div>
            </div>

            {/* Event & Logistics */}
            <div className="glass-panel p-6 border border-[#2FB8FF]/20 rounded-xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 circuit-line-v"></div>
              <div className="text-center mb-6">
                <span className="text-[#EAF0F8] font-black tracking-widest uppercase text-sm border-b border-[#2FB8FF]/30 pb-2">Event & Logistics</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {eventLogistics.map((member, idx) => <TeamCard key={`ev-${idx}`} member={member} size="sm" />)}
              </div>
            </div>

            {/* Photography & Media */}
            <div className="glass-panel p-6 border border-[#2FB8FF]/20 rounded-xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 circuit-line-v"></div>
              <div className="text-center mb-6">
                <span className="text-[#EAF0F8] font-black tracking-widest uppercase text-sm border-b border-[#2FB8FF]/30 pb-2">Photography & Media</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {photographyMedia.map((member, idx) => <TeamCard key={`ph-${idx}`} member={member} size="sm" />)}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};




const Registration = () => {
  return (
    <section id="register" className="py-24 px-6 bg-[#051024]/80 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel border-t-4 border-[#00FFFF] p-1 shadow-[0_0_40px_rgba(0,255,255,0.15)] relative overflow-hidden">
          {/* Cyber accents */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00FFFF]/10 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00FFFF]/10 blur-3xl"></div>

          <div className="bg-transparent/80 px-8 py-16 text-center border-b border-[#00FFFF]/20 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase text-glow">Secure Your Spot</h2>
            <p className="text-[#00FFFF] font-light text-base uppercase tracking-widest">Complete the form below to join the inaugural batch</p>
          </div>

          <div className="w-full bg-transparent/40 p-4 md:p-8 backdrop-blur-sm">
            <div className="w-full h-[700px] bg-[#051024]/80/80 border border-[#00FFFF]/30 flex items-center justify-center relative shadow-inner">
              {/* Replace about:blank with your Google Form URL */}
              <iframe
                src="about:blank"
                title="IEEE Registration Form"
                width="100%"
                height="100%"
                className="w-full h-full bg-transparent absolute inset-0 z-10"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
              </iframe>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <p className="text-[#00FFFF]/50 font-bold tracking-[0.3em] uppercase text-xs border border-[#00FFFF]/30 px-6 py-3">[ Form Interface ]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#' && !hash.startsWith('#/')) {
        const id = hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/');
            setTimeout(() => {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }, 100);
      }
    };
    
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-[#00FFFF] selection:text-[#0A192F] scroll-smooth text-gray-300 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NewsTicker />
              <WhatIsIEEE />
              <About />
              <ImageMarquee />
              <Events />
              <Team />
              <Registration />
            </>
          } />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="*" element={
            <>
              <Hero />
              <NewsTicker />
              <WhatIsIEEE />
              <About />
              <ImageMarquee />
              <Events />
              <Team />
              <Registration />
            </>
          } />
        </Routes>
      </main>

      <footer className="py-12 bg-[#051024]/80 border-t border-[#00FFFF]/20 text-center relative overflow-hidden mt-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"></div>
        <p className="text-white font-black tracking-[0.3em] uppercase text-xl mb-3 text-glow">IEEE BVDUDET-NM</p>
        <p className="text-gray-500 font-light text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Bharati Vidyapeeth. All rights reserved.
        </p>
      </footer>
    </div>
  );
}