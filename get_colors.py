from PIL import Image

try:
    img = Image.open("public/images/logo.png").convert("RGBA")
    img = img.resize((50, 50))
    pixels = list(img.getdata())
    
    # Filter out transparent pixels and grayscale pixels
    colors = {}
    for r, g, b, a in pixels:
        if a < 50: continue # ignore transparent
        # if r, g, b are very close, it's gray
        if max(r,g,b) - min(r,g,b) < 20: continue
        
        hex_color = '#{:02x}{:02x}{:02x}'.format(r, g, b)
        colors[hex_color] = colors.get(hex_color, 0) + 1
        
    sorted_colors = sorted(colors.items(), key=lambda x: x[1], reverse=True)
    print("Non-grayscale dominant colors:")
    for c, count in sorted_colors[:5]:
        print(f"HEX: {c}, Count: {count}")
        
except Exception as e:
    print(f"Error: {e}")
