import os
import json
import easyocr

folder = r"E:\Proyectos\corfamep\productos"
files = sorted([f for f in os.listdir(folder) if f.endswith('.png')])

print(f"Initializing EasyOCR reader for Spanish and English...")
reader = easyocr.Reader(['es', 'en'])

results = {}

for i, f in enumerate(files):
    path = os.path.join(folder, f)
    print(f"[{i+1}/{len(files)}] Processing {f}...")
    try:
        # readtext returns a list of tuples: (bbox, text, confidence)
        ocr_result = reader.readtext(path)
        text_lines = [line[1] for line in ocr_result]
        results[f] = text_lines
        print(f"  Extracted {len(text_lines)} lines of text.")
        print(f"  Sample: {text_lines[:5]}")
    except Exception as e:
        print(f"  Error processing {f}: {e}")
        results[f] = []

# Save results to a JSON file
output_path = r"E:\Proyectos\corfamep\ocr_results.json"
with open(output_path, 'w', encoding='utf-8') as out_f:
    json.dump(results, out_f, indent=2, ensure_ascii=False)

print(f"OCR processing complete. Results saved to {output_path}")
