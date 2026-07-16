/*=========================================
    LOADER
=========================================*/
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.transition = "0.8s";
});

/*=========================================
    AOS
=========================================*/
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

/*=========================================
    STICKY NAVBAR
=========================================*/
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});

/*=========================================
    PROGRESS BAR
=========================================*/
window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});

/*=========================================
    BACK TO TOP
=========================================*/
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*=========================================
    HAMBURGER MENU
=========================================*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

/*=========================================
    CLOSE MENU AFTER CLICK
=========================================*/
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

/*=========================================
    ACTIVE MENU
=========================================*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }
    });
});

/*=========================================
    SMOOTH SCROLL
=========================================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

/*=========================================
    COUNTER ANIMATION
=========================================*/
const counters = document.querySelectorAll(".counter");
const speed = 200;

const startCounter = () => {
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
};

const statisticSection = document.querySelector(".statistic");
let counterStarted = false;

window.addEventListener("scroll", () => {
    if (!statisticSection) return;
    const sectionTop = statisticSection.offsetTop - 400;
    if (window.scrollY >= sectionTop && !counterStarted) {
        startCounter();
        counterStarted = true;
    }
});

/*=========================================
    FAQ ACCORDION
=========================================*/
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            document.querySelectorAll(".faq-answer").forEach(item => {
                item.style.maxHeight = null;
            });
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

/*=========================================
    HERO PARALLAX
=========================================*/
window.addEventListener("scroll", () => {
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
        heroContent.style.transform = "translateY(" + window.scrollY * 0.3 + "px)";
    }
});

/*=========================================
    GALLERY HOVER EFFECT
=========================================*/
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {
    image.addEventListener("mouseenter", () => {
        image.style.transition = ".4s";
    });
});

/*=========================================
    SCROLL DOWN BUTTON
=========================================*/
const scrollDown = document.querySelector(".scroll-down");

if (scrollDown) {
    scrollDown.addEventListener("click", () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });
}

/*=========================================
    NAVBAR SHADOW
=========================================*/
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

/*=========================================
    IMAGE FADE EFFECT
=========================================*/
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("load", () => {
        img.style.opacity = "1";
    });
});

/*=========================================
    BUTTON HOVER EFFECT
=========================================*/
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transition = ".3s";
    });
});

/*=========================================
    KEYBOARD SHORTCUT
=========================================*/
document.addEventListener("keydown", (e) => {
    if (e.key === "Home") {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

/*=========================================
    DISABLE RIGHT CLICK
=========================================*/
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

/*=========================================
    DISABLE DRAG IMAGE
=========================================*/
document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
});

/*=========================================
    CONSOLE MESSAGE
=========================================*/
console.log("%cPT Pantang Mundur Indonesia", "color:#2F6F52;font-size:22px;font-weight:bold;");
console.log("%cResponsible Mining for Sustainable Future", "color:#666;font-size:14px;");