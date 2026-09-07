/* =========================================================
   HARISHMA M S - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   PRELOADER
   ========================================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        document.body.classList.toggle("menu-open");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
   ========================================================= */

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

        document.body.classList.remove("menu-open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

const header = document.getElementById("header");

function handleHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

handleHeader();


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navItems.forEach((link) => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") === `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight = header.offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =========================================================
   PROFILE IMAGE FALLBACK
   ========================================================= */

const profileImage = document.querySelector(".profile-image");

if (profileImage) {

    profileImage.addEventListener("error", () => {

        profileImage.style.display = "none";

        const frame = document.querySelector(".profile-frame");

        if (frame) {

            frame.classList.add("image-missing");

            frame.innerHTML = `
                <div style="
                    width:100%;
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#b89b5e;
                    font-family:'Playfair Display', serif;
                    font-size:80px;
                ">
                    H
                </div>
            `;

        }

    });

}


/* =========================================================
   PARALLAX HERO IMAGE
   ========================================================= */

const heroImage = document.querySelector(".hero-image-wrapper");

window.addEventListener("scroll", () => {

    if (!heroImage) {
        return;
    }

    if (window.innerWidth > 760) {

        const scrollValue = window.scrollY;

        if (scrollValue < window.innerHeight) {

            heroImage.style.transform =
                `translateY(${scrollValue * 0.08}px)`;

        }

    }

});


/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("open");

        document.body.classList.remove("menu-open");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "%cHarishma M S | Professional Portfolio",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "Portfolio loaded successfully."
);