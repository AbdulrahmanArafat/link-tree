const bio = document.getElementById("bio");

const sentences = [
    "Web Developer",
    "I design and build modern, responsive, and professional websites.",
    "Turning ideas into modern, responsive, and user-friendly websites.",
    "I create clean interfaces with smooth user experiences.",
    "Building fast, accessible, and reliable web pages.",
    "Always learning, improving, and creating better digital experiences."
];

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 40;
const deletingSpeed = 40;
const delayBetweenSentences = 2500;

function typeText() {
    const currentSentence = sentences[sentenceIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    bio.textContent = currentSentence.substring(0, charIndex);

    if (!isDeleting && charIndex === currentSentence.length) {
        isDeleting = true;
        setTimeout(typeText, delayBetweenSentences);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }

    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

typeText();
