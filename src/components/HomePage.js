// import React from "react";

// function HomePage() {
//   return(
//     <div >
//         <div className="intropart">
//         <h1 className="myh1">HELLO,</h1>
//         <h2 className="myh2">I AM WAMBUI KARANJA</h2>
//         <h3 className="myh3">WELCOME TO MY WORLD</h3>
//         </div>
//     </div>
//   )
// }

// export default HomePage;

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  useEffect(() => {
    gsap.to('.text0', {
      x: '20%',
      rotate: 10,
      duration: 0.85,
      scrollTrigger: {
        trigger: '.text0',
        scrub: true,
        start: 'top 20%'
      }
    });

    gsap.to('.text2', {
      x: '20%',
      rotate: 10,
      duration: 0.85,
      scrollTrigger: {
        trigger: '.text2',
        scrub: true,
        start: 'top 40%'
      }
    });

    gsap.to('.text1', {
      x: '-20%',
      rotate: -10,
      duration: 0.85,
      scrollTrigger: {
        trigger: '.text1',
        scrub: true,
        start: 'top 30%'
      }
      });

    // Add more animations as needed

  }, []); // Ensure this effect runs only once

  return (
    <div>
      <div className="intropart">

        < div id ="text" className="text0">HELLO,</div>
        <div id ="text" className="text1">I AM WAMBUI KARANJA</div>
        <div id="text"  className="text2">WELCOME TO MY WORLD</div>
      </div>
    </div>
  );
}

export default HomePage;
