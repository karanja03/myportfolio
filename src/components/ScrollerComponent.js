
import React, { useEffect } from "react";
import HomePage from "./HomePage";
import About from "./About";
import MyProjects from "./MyProjects";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);

function ScrollerComponent() {
  useEffect(() => {
    gsap.utils.toArray(".revealup").forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        markers: true, // Set to true for debugging
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
      });
    });
  }, []); // Ensure this effect runs only once

  return (
    <div>
      <div className="section">
        <HomePage />
      </div>

      <div className="section bg1">
        <div className="revealup">
          <About />
        </div>
      </div>
      <div className="section bg2">
        <div className="revealup">
          <MyProjects />
        </div>
      </div>
      <div className="section bg1">
        <div className="revealup">
          <Contact />
        </div>
      </div>

    </div>
  );
}

export default ScrollerComponent;
