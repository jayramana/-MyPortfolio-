
let prog = document.querySelector(".progress");

let img = document.querySelector(".pr");

img.addEventListener("mouseenter", () => {
    prog.style.display = "block";
})
img.addEventListener("mouseleave", () => {
    prog.style.display = "none";
})
prog.addEventListener("mouseenter", () => {
    prog.style.display = "block";
})


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

