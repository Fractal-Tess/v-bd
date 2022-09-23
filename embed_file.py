# Open all three files (the original cake image, the hidden executable to hide inside of the image, and the output file image )
with open ('src/assets/original-cake.png', 'rb') as original, open('src/assets/cake.png', 'wb',) as secret:
    # Write to the output file the original image
    secret.write(original.read())
    # Then, append the executable into the image
    secret.write(b'Kind of curious if you found this through the javascript inside of the web page, or you actually viewed the source of the cake image via a hex editor, send me an SS of the hex editor for bonus points: Flag: You cannot find me!')
    