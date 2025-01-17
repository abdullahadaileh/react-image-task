import React, { useEffect } from "react";
import './css/style.css';
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Portfolio() {

  useEffect(() => {
    /**
     * Add event listener on multiple elements
     */
    const addEventOnElements = function (elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    };

    /**
     * Navbar toggle for mobile
     */
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };

    addEventOnElements(navTogglers, "click", toggleNavbar);

    /**
     * Active header when window scrolls down 100px
     */
    const header = document.querySelector("[data-header]");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    });

    /**
     * Scroll reveal
     */
    const revealElements = document.querySelectorAll("[data-reveal]");
    const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

    const reveal = function () {
      for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
          revealElements[i].classList.add("revealed");
        }
      }
    };

    for (let i = 0, len = revealDelayElements.length; i < len; i++) {
      revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
    }

    window.addEventListener("scroll", reveal);
    window.addEventListener("load", reveal);


    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("load", reveal);
    };
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default Portfolio;
