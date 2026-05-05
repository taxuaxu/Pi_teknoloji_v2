import os
from pypdf import PdfReader

pdf_path = "Pi Teknoloji katalog_SON.pdf"
output_path = "catalog_text.txt"

reader = PdfReader(pdf_path)
text = ""
for i, page in enumerate(reader.pages):
    text += f"--- PAGE {i + 1} ---\n"
    text += page.extract_text() + "\n\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(text)

print(f"Extracted {len(reader.pages)} pages to {output_path}")
