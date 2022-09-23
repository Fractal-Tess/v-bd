with open('src/assets/original-cake.png', 'rb') as original:
    with open('src/assets/fake-cake.png', 'wb',) as secret:
        secret.write(original.read())
        secret.write(b'https://hentaihaven.xxx/')
