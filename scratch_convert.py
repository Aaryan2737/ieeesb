import os
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

public_dir = "public"
for f in os.listdir(public_dir):
    if f.lower().endswith(".heic"):
        path = os.path.join(public_dir, f)
        print("converting", path)
        try:
            img = Image.open(path)
            jpg_path = os.path.join(public_dir, f.rsplit('.', 1)[0] + '.jpg')
            img.save(jpg_path, "JPEG")
            print("saved", jpg_path)
        except Exception as e:
            print(f"Error converting {path}: {e}")
