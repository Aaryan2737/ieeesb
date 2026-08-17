import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

team_start = content.find('<section id="team"')
team_end = content.find('</section>', team_start) + len('</section>')
team_content = content[team_start:team_end]

# Section background
team_content = team_content.replace('bg-[#0A192F] relative z-10 border-b border-[#00FFFF]/10', 'bg-[#F8F9FA] relative z-10 border-y border-gray-200')

# Headings
team_content = team_content.replace('<div className="h-[2px] w-12 bg-[#00FFFF]"></div>', '<div className="h-[2px] w-12 bg-blue-600"></div>')
team_content = team_content.replace('<span className="text-[#00FFFF] font-bold tracking-[0.2em] uppercase text-sm">Command</span>', '<span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Command</span>')
team_content = team_content.replace('<h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">Leadership</h2>', '<h2 className="text-4xl md:text-5xl font-black text-[#0A192F] tracking-tight mb-4 uppercase">Leadership</h2>')
team_content = team_content.replace('<p className="text-lg text-gray-400 font-light tracking-widest uppercase">The driving force behind the Branch</p>', '<p className="text-lg text-gray-600 font-light tracking-widest uppercase">The driving force behind the Branch</p>')

team_content = team_content.replace('<h3 className="text-2xl font-black text-white border-b border-[#00FFFF]/30 pb-4 mb-10 uppercase tracking-widest">Core Committee</h3>', '<h3 className="text-2xl font-black text-[#0A192F] border-b border-gray-300 pb-4 mb-10 uppercase tracking-widest">Core Committee</h3>')
team_content = team_content.replace('<h3 className="text-2xl font-black text-white border-b border-[#00FFFF]/30 pb-4 mb-10 uppercase tracking-widest">Executive Board</h3>', '<h3 className="text-2xl font-black text-[#0A192F] border-b border-gray-300 pb-4 mb-10 uppercase tracking-widest">Executive Board</h3>')

# Keep the cards exactly as they were visually, but explicitly add the dark background since the section is now white
team_content = team_content.replace('<div className="glass-panel p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center md:items-start gap-10 border-l-4 border-[#00FFFF] glass-glow-hover transition-all duration-500">', '<div className="bg-[#0A192F] shadow-xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center md:items-start gap-10 border-l-4 border-[#00FFFF] glass-glow-hover transition-all duration-500 rounded-xl">')
team_content = team_content.replace('<div key={idx} className="glass-panel p-6 text-center hover:-translate-y-2 transition-all duration-300 group hover:border-[#00FFFF] flex flex-col items-center relative overflow-hidden">', '<div key={idx} className="bg-[#0A192F] shadow-lg rounded-xl p-6 text-center hover:-translate-y-2 transition-all duration-300 group border border-[#00FFFF]/20 hover:border-[#00FFFF] flex flex-col items-center relative overflow-hidden">')

content = content[:team_start] + team_content + content[team_end:]

with open('src/App.jsx', 'w') as f:
    f.write(content)

print('Done')
