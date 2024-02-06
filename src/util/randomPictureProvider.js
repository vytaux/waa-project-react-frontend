const randomPictureProvider = () => {
    const pictures = [
        "/1.webp",
        "/2.webp",
        "/3.webp",
    ]

    let random = Math.floor(Math.random() * pictures.length);

    return pictures[random];
}

export default randomPictureProvider;