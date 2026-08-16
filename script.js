/* ========================================
   TYPING EFFECT
======================================== */

const roles = [
    "ICT Professional",
    "Systems Administrator",
    "Cybersecurity Enthusiast",
    "Security Engineer",
    "Cloud Security Learner"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* ========================================
   NAVBAR SHADOW
======================================== */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.35)";

    } else {

        navbar.style.boxShadow = "none";
    }

});


/* ========================================
   CLOSE MOBILE NAVIGATION
======================================== */

const navLinks =
    document.querySelectorAll(".nav-link");

const navbarMenu =
    document.querySelector("#navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const collapse =
                bootstrap.Collapse.getInstance(
                    navbarMenu
                );

            if (collapse) {
                collapse.hide();
            }
        }

    });

});