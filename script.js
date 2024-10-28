document.addEventListener("DOMContentLoaded", function() {
  const textWrapper = document.querySelector('.ml12 .letters');
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        scale: [0.5, 1],
        opacity: [0, 1],
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
  }

  const menuButton = document.getElementById("menu-button");
  const navTitle = document.querySelector(".navtitle");

  if (menuButton && navTitle) {
    // Toggle menu on button click
    menuButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent click from propagating to document
      navTitle.style.display = navTitle.style.display === "flex" ? "none" : "flex";
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
      if (navTitle.style.display === "flex" && !navTitle.contains(event.target) && event.target !== menuButton) {
        navTitle.style.display = "none";
      }
    });

    // Close menu when clicking a menu item
    navTitle.addEventListener("click", function () {
      navTitle.style.display = "none";
    });
  }
});
