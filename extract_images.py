import fitz  # PyMuPDF
import os

pdf_path = "Pi Teknoloji katalog_SON.pdf"
output_dir = "public/images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)

image_count = 0
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images(full=True)
    
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        # Sadece büyük resimleri al (küçük ikonlar vs almamak için)
        if len(image_bytes) > 20000:
            image_name = f"page{page_index+1}_img{image_index}.{image_ext}"
            image_path = os.path.join(output_dir, image_name)
            
            with open(image_path, "wb") as f:
                f.write(image_bytes)
            image_count += 1
            print(f"Saved {image_path}")

print(f"Total extracted images: {image_count}")
