const welcomeText = "Welcome to JAVASCRIPT Tutorial";

const welcomeElement = document.querySelector(".welcome");

let welcomeIndex = 0;

const typingEffect = (text, element, index) => {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typingEffect(text, element, index), 125);
  }
};
typingEffect(welcomeText, welcomeElement, welcomeIndex);
window.onload = typingEffect;
