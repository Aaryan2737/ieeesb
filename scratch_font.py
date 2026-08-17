import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

# Fix Hero Heading
content = re.sub(r'<h1 className=".*?font-black text-white mb-6', '<h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6', content)

# Fix Section Headings
content = re.sub(r'<h2 className=".*?font-black text-\[#0A192F\] tracking-tight', '<h2 className="text-3xl md:text-4xl font-black text-[#0A192F] tracking-tight', content)
content = re.sub(r'<h2 className=".*?font-black text-white tracking-tight', '<h2 className="text-3xl md:text-4xl font-black text-white tracking-tight', content)

with open('src/App.jsx', 'w') as f:
    f.write(content)

print('Done')
