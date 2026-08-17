import React from 'react';
import { TeamCard } from '../components/TeamCard';

export const PastEvents = () => {
  const dignitaries = [
    { name: "Dr. Sameer Nanivadekar", role: "Chair, IEEE Maharashtra Section", designator: "D1", bio: "Chief Guest for the inauguration. Unveiled the Student Branch Logo.", image: "sameer.jpeg" },
    { name: "Mr. Isamu Koyama", role: "CEO, 136LLC, Japan", designator: "D2", bio: "International delegate. Led the Virtual Technical Session on international placements.", image: "isamu.jpeg" },
    { name: "Dr. Mohan Awasthy", role: "Professor & Principal, BVUDET NM", designator: "D3", bio: "Honorable Principal. Graced the official launch ceremony.", image: "princ.jpg" },
    { name: "Dr. Kamal Mehta", role: "Professor & Vice Principal, BVUDET NM", designator: "D4", bio: "Honorable Vice Principal. Supported the inauguration.", image: "vprinc.jpeg" },
    { name: "Dr. Nidhi Sharma", role: "HoD of CSE", designator: "D5", bio: "Head of Computer Science and Engineering Department.", image: "hod.jpg" },
    { name: "Dr. Nusrat Parveen", role: "IEEE SB Counselor", designator: "D6", bio: "Associate Professor in the Department of Computer Science and Engineering with 25 years of teaching experience. Her expertise includes Artificial Intelligence, Machine Learning, Web Technologies, and Database Systems, with research focused on AI-based medical diagnosis. She has published 38 research papers, authored one book chapter with Taylor & Francis (CRC Press), holds 14 published patents (4 granted), and serves as a reviewer for reputed Scopus-indexed journals. She is also guiding Ph.D. scholars and has received several awards for her research contributions. As the IEEE Student Branch Counselor, Dr. Parveen is committed to inspiring students to engage in technical innovation, research, professional development, and IEEE activities, while fostering a culture of lifelong learning and leadership.", image: "nus.jpg" }
  ];

  return (
    <section id="past-events" className="py-24 px-6 bg-[#051024] relative z-10 border-y border-[#FACC15]/10 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[2px] w-12 bg-[#FACC15]"></div>
            <span className="text-[#FACC15] font-bold tracking-[0.2em] uppercase text-xs">Legacy</span>
            <div className="h-[2px] w-12 bg-[#FACC15]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">IEEE Inauguration</h2>
          <p className="text-base text-gray-400 font-light tracking-widest uppercase">Event Highlights & Dignitaries</p>
        </div>

        <div className="mb-16 glass-panel p-8 border-l-4 border-l-[#FACC15]">
          <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base text-justify tracking-wide">
            The official inauguration of the IEEE Student Branch at BVUDET NM was a monumental success, graced by esteemed dignitaries. The event featured a virtual technical session outlining international placement and research opportunities, followed by the official launch ceremony.
          </p>
        </div>

        {/* Dignitaries Section */}
        <div className="mb-20">
          <h3 className="text-xl font-black text-[#0A192F] border-b border-[#FACC15]/50 pb-4 mb-10 uppercase tracking-widest bg-[#FACC15] px-4 py-2 inline-block">Honorable Dignitaries</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dignitaries.map((person, idx) => (
              <TeamCard key={`dignitary-${idx}`} member={person} size="xl" />
            ))}
          </div>
        </div>
        {/* Event Overview Section */}
        <div className="bg-[#111A2E] p-8 md:p-12 rounded-xl border border-[#2FB8FF]/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-[#2FB8FF] to-blue-600"></div>
          <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest text-glow">Event Overview</h3>
          <div className="space-y-6 text-gray-300 font-light leading-relaxed tracking-wide text-justify">
            <p>
              The inauguration of the IEEE Student Branch at BVUDET NM was marked by an inspiring series of sessions designed to empower the student community. The day commenced with a Virtual Technical Session led by our esteemed international delegate, <strong className="text-[#2FB8FF]">Mr. Isamu Koyama (CEO, 136LLC, Japan)</strong>, who provided invaluable insights into international internships, research collaboration, and placement opportunities for Indian students in Japan.
            </p>
            <p>
              Following the technical session, the official launch ceremony began with the ceremonial lamp lighting, paying tribute to visionary leader Dr. Patangrao Ji Kadam Saheb. We were honored to have <strong className="text-[#2FB8FF]">Dr. Sameer Nanivadekar (Chair, IEEE Maharashtra Section)</strong> as our Chief Guest, who officially unveiled the Student Branch Logo alongside our <strong className="text-[#2FB8FF]">Principal Sir</strong>, <strong className="text-[#2FB8FF]">Vice Principal Sir</strong>, <strong className="text-[#2FB8FF]">Dr. Nidhi Sharma (HoD, CSE)</strong>, and our Branch Counselor, <strong className="text-[#2FB8FF]">Dr. Nusrat Parveen</strong>.
            </p>
            <p>
              The event concluded with an interactive quiz, addresses from the student leadership team, and a shared vision to foster a vibrant culture of technical excellence and innovation within the campus.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
