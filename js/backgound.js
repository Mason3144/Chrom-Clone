const img = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chosenImg = img[Math.floor(Math.random() * img.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);

