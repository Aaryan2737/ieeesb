import React, { useState } from 'react';
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
                <a href="#events" className="block px-4 py-3 text-xs text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-colors uppercase tracking-wider">Past Events</a>
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
            <a href="#events" className="text-gray-800 hover:text-blue-600 font-bold text-xs pl-4 border-l-2 border-gray-200 uppercase tracking-widest" onClick={() => setIsOpen(false)}>Past Events</a>
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
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden bg-[#0A192F]">
      
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
        
        <p className="text-base md:text-xl text-white mb-10 max-w-3xl mx-auto font-semibold leading-relaxed tracking-wide drop-shadow-md bg-[#0A192F]/40 backdrop-blur-sm p-4 rounded-xl border border-[#00FFFF]/20">
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
    <div className="w-full bg-[#051024] border-y border-[#00FFFF]/20 text-[#00FFFF] py-3 overflow-hidden flex relative z-10 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
      <div className="animate-marquee font-bold text-xs md:text-base tracking-[0.2em] uppercase whitespace-nowrap">
        <span className="mx-8">///</span> Welcome to the official BVDUDETNM IEEE Student Branch website! <span className="mx-8">///</span> Join our upcoming Machine Learning & Neural Networks Bootcamp on Oct 15! <span className="mx-8">///</span> 
      </div>
    </div>
  );
};

const WhatIsIEEE = () => {
  return (
    <section className="py-24 px-6 bg-[#F8F9FA] relative z-10 border-y border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden bg-[#0A192F] rounded-xl flex justify-center items-center aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500 group p-1">
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
      title: "Technical Mastery",
      description: "From foundational programming concepts to advanced artificial intelligence and machine learning architectures. We provide extensive resources, hands-on workshops, and expert mentorship to ensure our members are always at the forefront of technical excellence and industry-ready skills."
    },
    {
      icon: <Globe size={28} className="text-[#00FFFF]" />,
      title: "Global Network",
      description: "Unlock access to IEEE's massive worldwide network of industry professionals, researchers, and alumni. Engage with pioneers across various disciplines, attend international conferences, and build long-lasting connections that can shape your future career path in technology."
    },
    {
      icon: <Wrench size={28} className="text-[#00FFFF]" />,
      title: "Innovation Labs",
      description: "Participate in hands-on hackathons, project building, and competitive technical speed-runs. Our innovation labs serve as incubators for cutting-edge ideas, where you can collaborate with peers to develop real-world solutions and showcase your talents on global platforms."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#051024] relative z-10 border-b border-[#00FFFF]/10">
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
              <div className="bg-[#0A192F] border border-[#00FFFF]/30 w-16 h-16 flex items-center justify-center mb-8 glass-glow-hover transition-all duration-300">
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
    <section className="py-20 bg-[#0A192F] border-b border-[#00FFFF]/10 overflow-hidden relative z-10">
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
      title: "Machine Learning & Neural Networks Bootcamp",
      tag: "AI/ML",
      date: "Oct 15, 2026",
    },
    {
      title: "Hardware & Robotics Seminar",
      tag: "Seminar",
      date: "Nov 02, 2026",
    },
    {
      title: "Hackfest '26: App Development",
      tag: "Competition",
      date: "Dec 10-12, 2026",
    }
  ];

  return (
    <section id="events" className="py-24 px-6 bg-[#051024] relative z-10 border-b border-[#00FFFF]/10">
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
  const coreMembers = [
    { name: "Harsh Koli", role: "Chairperson", year: "Final Year CSE A", image: "" },
    { name: "Aayush Pandey", role: "Vice-Chairperson", year: "Final Year CSE B", image: "" },
    { name: "Atharva Pathak", role: "Web Master", year: "Final Year CSE A", image: "" },
    { name: "Sidharth Singh", role: "Treasurer", year: "Final Year CSE B", image: "" },
    { name: "Kunal Jaggi", role: "Secretary", year: "Final Year CSE A", image: "" }
  ];

  const domainMembers = [
    { name: "Aaryan Patil", role: "Technical Executive", year: "Second Year AIML B", domain: "Technical", image: "" },
    { name: "Rishika Verma", role: "PR & Marketing Head", year: "TY CSBS", domain: "PR & Marketing", image: "" },
    { name: "Aditi Raorole", role: "Marketing Executive", year: "SY CSBS", domain: "PR & Marketing", image: "" },
    { name: "Abhinaya Karthik", role: "PR Executive", year: "TY CSBS", domain: "PR & Marketing", image: "" },
    { name: "Jayesh Pote", role: "Event & Logistics Head", year: "TY CSE B", domain: "Event & Logistics", image: "" },
    { name: "Tanishk Rawat", role: "Event & Logistics Executive", year: "SY CSE B", domain: "Event & Logistics", image: "" },
    { name: "Urjja Kamble", role: "Event & Logistics Executive", year: "TY CSBS", domain: "Event & Logistics", image: "" },
    { name: "Megha Gurung", role: "Photography & Media Head", year: "TY CSE B", domain: "Photography & Media", image: "" },
    { name: "Pranav Gaikwad", role: "Photography Executive", year: "SY CSE B", domain: "Photography & Media", image: "" },
    { name: "Soham Shinde", role: "Media Executive", year: "SY CSE C", domain: "Photography & Media", image: "" }
  ];

  return (
    <section id="team" className="py-24 px-6 bg-[#F8F9FA] relative z-10 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[2px] w-12 bg-blue-600"></div>
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">Command</span>
            <div className="h-[2px] w-12 bg-blue-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A192F] tracking-tight mb-4 uppercase">Leadership</h2>
          <p className="text-base text-gray-600 font-light tracking-widest uppercase">The driving force behind the Branch</p>
        </div>

        {/* Branch Counsellor Spotlight */}
        <div className="bg-[#0A192F] shadow-xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center md:items-start gap-10 border-l-4 border-[#00FFFF] glass-glow-hover transition-all duration-500 rounded-xl">
          <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 bg-[#051024] flex items-center justify-center border border-[#00FFFF]/30 shadow-[0_0_20px_rgba(0,255,255,0.2)] overflow-hidden">
            {/* Replace the URL with the actual image path, e.g., image="/dr_nusrat_parveen.jpg" */}
            <img 
              src={"https://ui-avatars.com/api/?name=Nusrat+Parveen&background=051024&color=00FFFF&size=250"} 
              alt="Dr. Nusrat Parveen" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-black text-white mb-2 uppercase">Dr. Nusrat Parveen</h3>
            <p className="text-[#00FFFF] font-bold text-base mb-2 tracking-[0.2em] uppercase text-glow">IEEE Student Branch Councillor</p>
            <p className="text-gray-400 font-medium text-xs mb-6 uppercase tracking-wider">Associate Professor - Dept. of CSE</p>
            <p className="text-gray-300 leading-relaxed font-light text-xs md:text-base text-justify tracking-wide">
              Assistant Professor in the Department of Computer Science and Business Systems (CSBS) with over 20 years of teaching experience and 6 months of industrial experience. A dedicated researcher and four-time outstanding innovator award recipient, she holds 20 publications and has filed a patent for an AI-based system for early heart disease detection. Her extensive work in artificial intelligence continues to be a major inspiration for our student branch.
            </p>
          </div>
        </div>

        {/* Core Committee Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-black text-[#0A192F] border-b border-gray-300 pb-4 mb-10 uppercase tracking-widest">Core Committee</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreMembers.map((member, idx) => (
              <div key={idx} className="bg-[#0A192F] shadow-lg rounded-xl p-6 text-center hover:-translate-y-2 transition-all duration-300 group border border-[#00FFFF]/20 hover:border-[#00FFFF] flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00FFFF]/20 group-hover:bg-[#00FFFF] transition-colors"></div>
                <div className="w-24 h-24 bg-[#051024] border border-[#00FFFF]/30 mb-6 flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all">
                  <img 
                    src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=051024&color=00FFFF&size=150`} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <h4 className="text-xs font-black text-white mb-2 leading-tight uppercase">{member.name}</h4>
                <p className="text-[#00FFFF] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{member.role}</p>
                {member.year && <p className="text-gray-500 text-[10px] font-medium mt-auto uppercase tracking-widest">{member.year}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Domain Executives Grid */}
        <div>
          <h3 className="text-xl font-black text-[#0A192F] border-b border-gray-300 pb-4 mb-10 uppercase tracking-widest">Executive Board</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {domainMembers.map((member, idx) => (
              <div key={idx} className="bg-[#0A192F] shadow-lg rounded-xl p-6 text-center hover:-translate-y-2 transition-all duration-300 group border border-[#00FFFF]/20 hover:border-[#00FFFF] flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00FFFF]/20 group-hover:bg-[#00FFFF] transition-colors"></div>
                <div className="w-20 h-20 bg-[#051024] border border-[#00FFFF]/30 mb-5 flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all">
                  <img 
                    src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=051024&color=00FFFF&size=150`} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <h4 className="text-xs font-black text-white mb-1 leading-tight uppercase">{member.name}</h4>
                <p className="text-[#00FFFF] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{member.role}</p>
                <p className="text-gray-500 text-[10px] font-medium mb-5 uppercase tracking-widest">{member.year}</p>
                <span className="mt-auto px-3 py-1 bg-transparent border border-[#00FFFF]/50 text-[#00FFFF] text-[9px] font-bold uppercase tracking-[0.2em] w-full group-hover:bg-[#00FFFF]/10 transition-colors">
                  {member.domain}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Registration = () => {
  return (
    <section id="register" className="py-24 px-6 bg-[#051024] relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel border-t-4 border-[#00FFFF] p-1 shadow-[0_0_40px_rgba(0,255,255,0.15)] relative overflow-hidden">
          {/* Cyber accents */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00FFFF]/10 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00FFFF]/10 blur-3xl"></div>
          
          <div className="bg-[#0A192F]/80 px-8 py-16 text-center border-b border-[#00FFFF]/20 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase text-glow">Secure Your Spot</h2>
            <p className="text-[#00FFFF] font-light text-base uppercase tracking-widest">Complete the form below to join the inaugural batch</p>
          </div>
          
          <div className="w-full bg-[#0A192F]/40 p-4 md:p-8 backdrop-blur-sm">
            <div className="w-full h-[700px] bg-[#051024]/80 border border-[#00FFFF]/30 flex items-center justify-center relative shadow-inner">
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
  return (
    <div className="min-h-screen bg-[#0A192F] font-sans selection:bg-[#00FFFF] selection:text-[#0A192F] scroll-smooth text-gray-300">
      <Navbar />
      
      <main>
        <Hero />
        <NewsTicker />
        <WhatIsIEEE />
        <About />
        <ImageMarquee />
        <Events />
        <Team />
        <Registration />
      </main>
      
      <footer className="py-12 bg-[#051024] border-t border-[#00FFFF]/20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"></div>
        <p className="text-white font-black tracking-[0.3em] uppercase text-xl mb-3 text-glow">IEEE BVDUDETNM</p>
        <p className="text-gray-500 font-light text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Bharati Vidyapeeth. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
