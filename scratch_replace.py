import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

# 1. Backgrounds
content = content.replace('bg-[#0A192F]', 'bg-gray-50')
content = content.replace('bg-[#0A192F]/80', 'bg-white/95')
content = content.replace('bg-[#0A192F]/60', 'bg-white/80')
content = content.replace('bg-[#0A192F]/40', 'bg-white/60')
content = content.replace('bg-[#051024]', 'bg-white')
content = content.replace('bg-[#051024]/80', 'bg-white/90')

# 2. Text Colors
content = content.replace('from-[#00FFFF] to-white', 'from-[#1b4c9c] to-[#0d2854]')
content = re.sub(r'text-white(?![/\]])', 'text-[#1b4c9c]', content)
content = content.replace('text-gray-400', 'text-gray-600')
content = content.replace('text-gray-300', 'text-gray-700')
content = content.replace('text-[#00FFFF]', 'text-[#a88c5a]')
content = content.replace('text-[#00FFFF]/70', 'text-[#a88c5a]/90')
content = content.replace('text-[#00FFFF]/50', 'text-[#a88c5a]/70')

# 3. Borders and Accents
content = content.replace('border-[#00FFFF]', 'border-[#a88c5a]')
content = content.replace('border-[#00FFFF]/10', 'border-[#e5e7eb]')
content = content.replace('border-[#00FFFF]/20', 'border-[#e5e7eb]')
content = content.replace('border-[#00FFFF]/30', 'border-[#e5e7eb]')
content = content.replace('border-[#00FFFF]/40', 'border-[#e5e7eb]')
content = content.replace('border-[#00FFFF]/50', 'border-[#a88c5a]/50')
content = content.replace('bg-[#00FFFF]', 'bg-[#a88c5a]')
content = content.replace('bg-[#00FFFF]/5', 'bg-[#a88c5a]/10')
content = content.replace('bg-[#00FFFF]/10', 'bg-[#a88c5a]/15')
content = content.replace('bg-[#00FFFF]/20', 'bg-[#a88c5a]/20')

# 4. Font Sizes (Bumping down)
content = content.replace('text-8xl', 'text-7xl')
content = content.replace('text-7xl', 'text-6xl')
content = content.replace('text-5xl', 'text-4xl')
content = content.replace('text-4xl', 'text-3xl')
content = content.replace('text-3xl', 'text-2xl')
content = content.replace('text-2xl', 'text-xl')
content = content.replace('text-lg', 'text-base')

# 5. Navbar Specifics
content = content.replace('bg-white/95 backdrop-blur-xl border-b border-gray-200', 'bg-[#1b4c9c] shadow-md')
content = content.replace('text-gray-800 flex-1', 'text-white flex-1')
content = content.replace('hover:text-blue-600', 'hover:text-[#a88c5a]')
content = content.replace('border-blue-600', 'border-[#a88c5a]')
content = content.replace('border-2 border-blue-600 text-blue-600', 'border-2 border-[#a88c5a] bg-[#a88c5a] text-white')
content = content.replace('hover:bg-blue-600 hover:text-white', 'hover:bg-[#8b734b] hover:text-white')

# 6. Hero Specifics
content = content.replace('bg-transparent border-2 border-[#a88c5a] text-[#a88c5a]', 'bg-[#a88c5a] text-white border-2 border-[#a88c5a]')
content = content.replace('hover:bg-[#a88c5a] hover:text-[#1b4c9c]', 'hover:bg-[#8b734b] hover:border-[#8b734b] hover:text-white')

# 7. Footer
content = content.replace('footer className="py-12 bg-white', 'footer className="py-12 bg-[#1b4c9c]')
content = content.replace('footer className="py-12 bg-[#1b4c9c] border-t border-[#e5e7eb] text-center relative overflow-hidden"', 'footer className="py-12 bg-[#1b4c9c] text-center relative overflow-hidden"')
content = content.replace('<p className="text-[#1b4c9c] font-black tracking-[0.3em] uppercase text-xl mb-3 text-glow">IEEE BVDUDETNM</p>', '<p className="text-white font-black tracking-[0.3em] uppercase text-xl mb-3">IEEE BVDUDETNM</p>')
content = content.replace('text-gray-500 font-light text-xs tracking-widest uppercase', 'text-gray-300 font-light text-xs tracking-widest uppercase')

# 8. Misc fixes
content = content.replace('#00FFFF15', 'rgba(0,0,0,0.05)')
content = content.replace('from-white/95 via-white/80 to-gray-50', 'from-white/90 via-white/70 to-gray-50')
content = content.replace('grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100', 'opacity-90 group-hover:opacity-100')
content = content.replace('bg-[#1b4c9c] text-white selection:bg-[#a88c5a]', 'bg-gray-50 text-gray-800 selection:bg-[#a88c5a]')

with open('src/App.jsx', 'w') as f:
    f.write(content)

print('Done')
