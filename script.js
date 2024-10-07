// Fonction affichage des description,  Btn more  + réduire //

document.addEventListener("DOMContentLoaded", function() {
    let buttonsMore = document.querySelectorAll("#more");
    let descriptions = document.querySelectorAll(".services-description");

    buttonsMore.forEach((button, index) => {
        button.addEventListener("click", function(e) {
            e.stopPropagation();

            
            let currentDescription = descriptions[index];

            if (currentDescription.style.display === "none" || currentDescription.style.display === "") {
                currentDescription.style.display = "block";
                button.textContent = "Réduire";
            } else {
                currentDescription.style.display = "none";
                button.textContent = "En savoir plus";
            }
        });
    });
});

// Scroll reveal //

ScrollReveal({
    reset: true,
    distance: '0px',
    duration: 1000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .techno-box, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .home-content li, .about-content', {origin: 'right'}); 

// ScrollReveal des sections //

document.addEventListener("DOMContentLoaded", function() {

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// Navbar à plus de 100pixel de scroll applique l'effet sticky //

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

// Remove toggle icon et la  navbar pour faire apparaitre les liens //

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.classList.remove('.fa-xmark');
    navbar.classList.remove('active');

}; 

// Défilement description home-img //

    const typed = new Typed('',{
        strings: [''],
        typeSpeed: 200,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

// Toggle navbar //

document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
});

// MODALE //

document.addEventListener("DOMContentLoaded", function() {
 
  const portfolioBoxes = document.querySelectorAll(".portfolio-box");

  // Ouverture de la modal pour chaque projet
  portfolioBoxes.forEach(box => {
      box.addEventListener("click", function() {
          const projectName = this.querySelector("h4").textContent.trim().toLowerCase().replace(/\s+/g, '-');
          const modalId = `modal-${projectName}`;
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.style.display = "block";
          } else {
              console.log(`No modal found for ${projectName}`);
          }
      });
  });

  // BTN close
  const closeButtons = document.querySelectorAll(".close");

  // BTN CLOSE qui ferme la modale pou chaque modal 
  closeButtons.forEach(button => {
      button.addEventListener("click", function() {
          const modalId = this.getAttribute('data-modal');
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.style.display = "none";
          }
      });
  });

  // Ferme la modal si click en dehors
  window.addEventListener("click", function(event) {
      if (event.target.classList.contains('modal')) {
          event.target.style.display = "none";
      }
  });
});

  // Section home //
  document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = 1;
        }, index * 800); // Chaque mot apparaît après 800ms, de façon séquentielle
    });
});
