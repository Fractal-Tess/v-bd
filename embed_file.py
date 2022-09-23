# Open all three files (the original cake image, the hidden executable to hide inside of the image, and the output file image )
with open ('src/assets/original-cake.png', 'rb') as f, open('hidden/target/release/hidden', 'rb') as s, open('src/assets/cake.png', 'ab',) as n:
    # Write to the output file the original image
    n.write(f.read())
    # Then, append the executable into the image
    n.write(s.read())
    