window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 125;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } 
    }
  }
 



  document.querySelector("#librarybutton").addEventListener("click", function(){document.body.classList.add("active-popup");
});
document.querySelector(".popup .closebutton").addEventListener("click", function(){
document.body.classList.remove("active-popup");
});



const masterText = "Master Web Development";
const unlockText = "Unlock the power of web development with our comprehensive tutorials in HTML, CSS, and JavaScript, your gateway to mastering the building blocks of the digital world.";

const masterElement = document.querySelector('.master');
const unlockElement = document.querySelector('.unlock');

let masterIndex = 0;
let unlockIndex = 0;

const typingEffect = (text, element, index) => {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(() => typingEffect(text, element, index), 40); // Adjust the typing speed (in milliseconds)
  }
};

typingEffect(masterText, masterElement, masterIndex);
setTimeout(() => typingEffect(unlockText, unlockElement, unlockIndex), masterText.length * 100);


