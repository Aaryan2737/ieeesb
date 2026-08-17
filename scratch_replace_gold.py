import sys

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('#00FFFF', '#FACC15')

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced all #00FFFF with #FACC15 in App.jsx")
