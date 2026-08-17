import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

# Define the start and end of the WhatIsIEEE section
what_start = content.find('const WhatIsIEEE = () => {')
what_end = content.find('</section>', what_start) + len('</section>')
what_content = content[what_start:what_end]

# 1. Section background
what_content = what_content.replace('bg-[#0A192F] relative z-10 border-b border-[#00FFFF]/10', 'bg-[#F8F9FA] relative z-10 border-y border-gray-200')

# 2. Left side video container
what_content = what_content.replace('relative overflow-hidden glass-panel flex justify-center items-center aspect-[4/3] border-[#00FFFF]/30 glass-glow-hover transition-all duration-500 group bg-[#051024] p-1', 'relative overflow-hidden bg-[#0A192F] rounded-xl flex justify-center items-center aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500 group p-1')
# Corner accents can stay cyan because the video container is dark navy

# 3. Text headings and lines
what_content = what_content.replace('<div className="h-[2px] w-12 bg-[#00FFFF]"></div>', '<div className="h-[2px] w-12 bg-blue-600"></div>')
what_content = what_content.replace('<span className="text-[#00FFFF] font-bold tracking-[0.2em] uppercase text-sm">Global Impact</span>', '<span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Global Impact</span>')
what_content = what_content.replace('<h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 uppercase">What Is IEEE?</h2>', '<h2 className="text-4xl md:text-5xl font-black text-[#0A192F] tracking-tight mb-8 uppercase">What Is IEEE?</h2>')
what_content = what_content.replace('text-gray-400 mb-6', 'text-gray-600 mb-6')
what_content = what_content.replace('text-gray-400 mb-10', 'text-gray-600 mb-10')

# 4. IEEE Website Button
what_content = what_content.replace('bg-transparent border border-[#00FFFF] text-[#00FFFF] px-8 py-4 font-bold transition-all duration-300 hover:bg-[#00FFFF] hover:text-[#0A192F] glass-glow', 'bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 font-bold transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-lg shadow-md hover:shadow-lg')

# Reassemble
content = content[:what_start] + what_content + content[what_end:]

with open('src/App.jsx', 'w') as f:
    f.write(content)

print('Done')
