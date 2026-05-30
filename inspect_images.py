import os
from PIL import Image

folder = r"E:\Proyectos\corfamep\productos"
files = [f for f in os.listdir(folder) if f.endswith('.png')]

for f in files:
    path = os.path.join(folder, f)
    try:
        with Image.open(path) as img:
            print(f"File: {f}")
            print(f"  Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
            info = img.info
            if info:
                print("  Metadata:")
                for k, v in info.items():
                    # Truncate long values
                    val_str = str(v)
                    if len(val_str) > 100:
                        val_str = val_str[:100] + "..."
                    print(f"    {k}: {val_str}")
            else:
                print("  No metadata")
    except Exception as e:
        print(f"Error reading {f}: {e}")
