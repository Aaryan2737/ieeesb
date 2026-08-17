import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove TeamCard
content = re.sub(r'const TeamCard = \(\{.*?^};\n', '', content, flags=re.DOTALL|re.MULTILINE)

# Remove PastEvents
content = re.sub(r'const PastEvents = \(\) => \{.*?^};\n', '', content, flags=re.DOTALL|re.MULTILINE)

# Replace App
old_app_regex = r'export default function App\(\) \{.*'
new_app = '''export default function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#') {
        const id = hash.substring(1);
        if (id.startsWith('/')) return; // react-router path
        
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
        </Routes>
      </main>

      <footer className="py-12 bg-[#051024]/80 border-t border-[#00FFFF]/20 text-center relative overflow-hidden mt-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"></div>
        <p className="text-white font-black tracking-[0.3em] uppercase text-xl mb-3 text-glow">IEEE BVDUDETNM</p>
        <p className="text-gray-500 font-light text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Bharati Vidyapeeth. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
'''
content = re.sub(old_app_regex, new_app, content, flags=re.DOTALL)

# Add imports
imports = '''import { Routes, Route, useNavigate } from 'react-router-dom';
import { TeamCard } from './components/TeamCard';
import { PastEvents } from './pages/PastEventsPage';
'''
content = content.replace(\"import React, { useState } from 'react';\", \"import React, { useState } from 'react';\\n\" + imports)

# Update Navbar links
content = content.replace('href=\"#past-events-page\"', 'onClick={() => window.location.hash = \"#/past-events\"} className=\"cursor-pointer ')

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Success')
