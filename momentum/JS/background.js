const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgsrc = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgsrc})`;
