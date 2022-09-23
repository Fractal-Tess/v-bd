# Every single png file ends with these bytes
png_end_hex = b"\x00\x00\x00\x00\x49\x45\x4e\x44\xae\x42\x60\x82"

# Open the cake file
with open ('src/assets/cake.png', 'rb') as f, open('file', 'wb',) as s:
    # Read the png file
    content = f.read()
    # Find the content ending of the png file
    offset = content.index(png_end_hex)
    # Move the cursor to the index
    f.seek(offset + len(png_end_hex))
    # Extract the data
    s.write(f.read())
    
    print("File has been extracted")
    