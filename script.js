document.addEventListener("DOMContentLoaded", function() {// Wrap every letter in a span for the title "Ozone"
  var textWrapper = document.querySelector('.ml12 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml12 .letter',
      scale: [0.5, 1], // Scale up from 0.5 to 1
      opacity: [0, 1], // Fade in from transparent to opaque
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el, i) => 70 * i
    }).add({
      targets: '.ml12',
      opacity: 0,
      duration: 3000,
      easing: "easeOutExpo",
      delay: 1000
    });
  });
