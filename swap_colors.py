import os
import re

def swap_colors(directory):
    replacements = {
        'slate-950': 'slate-900',
        'slate-900': 'slate-800',
        'slate-800': 'slate-700',
        'slate-700': 'slate-600',
        'slate-400': 'slate-300', # make text slightly brighter to contrast with lighter backgrounds
        'slate-500': 'slate-400',
    }
    
    # Need to replace simultaneously to avoid cascading replacements
    # Create a regex pattern that matches any of the keys
    pattern = re.compile('|'.join(re.escape(key) for key in replacements.keys()))
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.jsx', '.js', '.css')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace using the pattern and a lambda function
                new_content = pattern.sub(lambda match: replacements[match.group(0)], content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")

swap_colors("src")
