import re

# 1. Update index.css to reduce neon feeling
with open('src/index.css', 'r') as f:
    css_content = f.read()

# Soften the glows
css_content = css_content.replace('box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);', 'box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);')
css_content = css_content.replace('box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);', 'box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);')
css_content = css_content.replace('text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);', 'text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);')

with open('src/index.css', 'w') as f:
    f.write(css_content)

# 2. Update App.jsx
with open('src/App.jsx', 'r') as f:
    content = f.read()

# Remove Societies Dropdown from Desktop Navbar
desktop_soc_start = content.find('          {/* Societies Dropdown */}')
if desktop_soc_start != -1:
    desktop_soc_end = content.find('          <a href="#team"', desktop_soc_start)
    content = content[:desktop_soc_start] + content[desktop_soc_end:]

# Remove Societies from Mobile Navbar
mobile_soc_start = content.find('          <div className="flex flex-col space-y-2">\n            <span className="text-gray-500 font-medium text-xs uppercase tracking-widest">Societies</span>')
if mobile_soc_start != -1:
    mobile_soc_end = content.find('          <a href="#team"', mobile_soc_start)
    content = content[:mobile_soc_start] + content[mobile_soc_end:]

# Reduce neon glow in Hero section
content = content.replace('drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]', 'drop-shadow-lg')

# Increase content in the About Section (Core Pillars)
content = content.replace('"From foundational programming concepts to advanced artificial intelligence and machine learning architectures."', '"From foundational programming concepts to advanced artificial intelligence and machine learning architectures. We provide extensive resources, hands-on workshops, and expert mentorship to ensure our members are always at the forefront of technical excellence and industry-ready skills."')

content = content.replace('"Unlock access to IEEE\'s massive worldwide network of industry professionals, researchers, and alumni."', '"Unlock access to IEEE\'s massive worldwide network of industry professionals, researchers, and alumni. Engage with pioneers across various disciplines, attend international conferences, and build long-lasting connections that can shape your future career path in technology."')

content = content.replace('"Participate in hands-on hackathons, project building, and competitive technical speed-runs."', '"Participate in hands-on hackathons, project building, and competitive technical speed-runs. Our innovation labs serve as incubators for cutting-edge ideas, where you can collaborate with peers to develop real-world solutions and showcase your talents on global platforms."')

with open('src/App.jsx', 'w') as f:
    f.write(content)

print("Done")
