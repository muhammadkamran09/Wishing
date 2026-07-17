// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);

});

// ==========================
// Elements
// ==========================

const openBtn = document.getElementById("openBtn");
const giftSection = document.getElementById("giftSection");
const giftBox = document.getElementById("giftBox");
const message = document.getElementById("message");
const typeText = document.getElementById("typeText");
const music = document.getElementById("birthdayMusic");

// ==========================
// Open Gift Button
// ==========================

openBtn.addEventListener("click", () => {

    document.getElementById("welcome").style.display = "none";

    giftSection.style.display = "flex";

    music.play();

});

// ==========================
// Gift Open
// ==========================

giftBox.addEventListener("click", () => {

    giftBox.innerHTML = "💖";

    giftBox.style.transform = "scale(1.3) rotate(15deg)";

    setTimeout(() => {

        giftSection.style.display = "none";

        message.style.display = "flex";

        startTyping();

    }, 1200);

});

// ==========================
// Typewriter Effect
// ==========================

const text = `🎂 Happy Birthday!

May Allah bless you with happiness,
good health,
success,
beautiful memories
and endless smiles.

Stay happy,
keep smiling
and always shine like a star. ❤️`;

let index = 0;

function startTyping(){

    const typing = setInterval(() => {

        typeText.innerHTML += text.charAt(index);

        index++;

        if(index >= text.length){

            clearInterval(typing);

        }

    },40);

}

// ==========================
// Floating Balloons
// ==========================

const balloonContainer = document.getElementById("balloons");

const balloonColors = [
    "#ff4d6d",
    "#ff85a2",
    "#ffd166",
    "#7bdff2",
    "#b8f2e6",
    "#c77dff"
];

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    balloon.style.transform =
        "scale(" + (0.8 + Math.random() * 0.6) + ")";

    balloonContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 12000);

}

setInterval(createBalloon, 700);

// ==========================
// Floating Hearts
// ==========================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let position = -30;

    const move = setInterval(() => {

        position += 3;

        heart.style.bottom = position + "px";

        heart.style.opacity = 1 - (position / window.innerHeight);

        if (position > window.innerHeight) {

            clearInterval(move);

            heart.remove();

        }

    }, 25);

}

setInterval(createHeart, 900);

// ==========================
// Gallery Animation
// ==========================

const images = document.querySelectorAll(".gallery-container img");

images.forEach((img) => {

    img.addEventListener("click", () => {

        img.style.transform = "scale(1.15)";

        setTimeout(() => {

            img.style.transform = "scale(1)";

        }, 400);

    });

});