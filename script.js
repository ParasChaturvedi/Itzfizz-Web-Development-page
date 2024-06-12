// Section 1

document.addEventListener("DOMContentLoaded", function () {

    const letterElement = document.getElementById("t");
    
    let animationStartTime;
    const animationDuration = 3000;

    function startAnimation() {
        animationStartTime = performance.now();
        animate();
    }

    function animate() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - animationStartTime;
        
        if (elapsedTime < animationDuration) {
            const progress = elapsedTime / animationDuration;
            const path = "abcdefghijklmnopqrst";
            const currentPos = Math.floor(progress * path.length);
            letterElement.textContent = path[currentPos];
            
            requestAnimationFrame(animate);
        } else {
            letterElement.textContent = "n"; 
        }
    }

    startAnimation();
});

gsap.registerPlugin(ScrollTrigger);

gsap.to('.hero-bg-black', {
  height: '100vh',
  scrollTrigger: {
    trigger: '.section-1',
    start: "50% center",
    end: "bottom top",  
    scrub: true,
    pin: true,
    // markers: true,
  },
});

// Section 9

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const accordionSerial = accordion.querySelector(".accordion-serial");
    const accordionBody = accordion.querySelector(".accordion-body");
    const serialarrow = accordion.querySelector(".serialarrow");

    accordionBody.classList.toggle("active");
    accordion.classList.toggle("active");
    accordionSerial.classList.toggle("active");
    serialarrow.classList.toggle("active");
  });
});




// Section 4 

gsap.registerPlugin(ScrollTrigger);

function scrollpin(element, elementpin){
  gsap.to(element, {
    x: 0,
    scrollTrigger: {
      trigger: elementpin,
      start: "top 80%",
      end: "bottom 30%",
      scrub: true,
      // markers: true,
    },
  });
}

scrollpin("._1", ".pin1");
scrollpin("._2", ".pin2");
scrollpin("._3", ".pin3");
scrollpin("._4", ".pin4");

// section 6


$(function() {  
  $('article').viewportChecker({
    classToAdd: 'current',
    repeat: true,
    offset: '50%'
  });
});

// Section 7
// =====================

function functionForSmallViewport() {
    // Function for small viewport
    gsap.to('.img-tool', {
      x: 100,
      // right:0,
      rotation:-90,
      scale: 2,
      scrollTrigger: {
        trigger: '.image-container',
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
}

function functionForMediumViewport() {
    // Function for medium viewport
    gsap.to('.img-tool', {
      x: 570,
      // right:0,
      rotation:-90,
      scale: 2.5,
      scrollTrigger: {
        trigger: '.image-container',
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
}

function functionForLargeViewport() {
  gsap.to('.img-tool', {
    x: 370,
    // right:0,
    rotation:-90,
    scale: 1.5,
    scrollTrigger: {
      trigger: '.image-container',
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      // markers: true,
    },
  });
}
function functionForExtraLargeViewport() {
  gsap.to('.img-tool', {
    x: 770,
    // right:0,
    rotation:-90,
    scale: 1.5,
    scrollTrigger: {
      trigger: '.image-container',
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      // markers: true,
    },
  });
}

function determineViewport() {
    var width = window.innerWidth;

    if (width < 600) {
        functionForSmallViewport();
    } else if (width >= 600 && width < 1024) {
        functionForMediumViewport();
    }
      else if (width >= 1024 && width <= 1400) {
      functionForLargeViewport();
    } else {
        functionForExtraLargeViewport();
    }
}

// Call the function initially
determineViewport();

// Call the function again when the window is resized
window.addEventListener('resize', determineViewport);

// =====================
gsap.registerPlugin(ScrollTrigger);

// gsap.to('.img-tool', {
//   x: 770,
//   // right:0,
//   rotation:-90,
//   scale: 1.5,
//   scrollTrigger: {
//     trigger: '.image-container',
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//     // markers: true,
//   },
// });
gsap.to('.text', {
  x: -4300,
  scrollTrigger: {
    trigger: '.text-container',
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
  },
});



/*;-------------------------------------------------
   Parallax  GSAP
-------------------------------------------------;*/

let tl = gsap.timeline({scrollTrigger:{
	trigger:".section-3",
	start:"top 0%",
	// end:"bottom 90%",
  scrub:true,
  pin: false,
  // markers:true,

	toggleActions:"restart none none reset"
}})
tl.from('.sect-3-left',{
  yPercent: 10,
  ease: "none",

}, 'section-3')
tl.to('.sect-3-right',{
  yPercent: 20,
  ease: "none",

}, 'section-3')


//  -------------------   

let tl2 = gsap.timeline({scrollTrigger:{
	trigger:".section-5",
	start:"top 0%",
	// end:"bottom center",
  // markers:true,
  scrub:true,
  pin: false,
	toggleActions:"restart none none reset"
}})
tl2.to('.sect-5-arrow',{
  yPercent: -110,
  ease: "none",

}, 'section-5')
tl2.to('.sect-5-L-1',{
  yPercent: 60,
  ease: "none",

}, 'section-5')
tl2.to('.check-bg',{
  // yPercent: 40,
  scale:1.03,
  ease: "none",

}, 'section-5')
tl2.to('.sect-5-R-1',{
  yPercent: 40,
  ease: "none",

}, 'section-5')
tl2.to('.sect-5-R-2',{
  yPercent: 50,
  ease: "none",

}, 'section-5')




// ----------------------------------


let tl4= gsap.timeline({scrollTrigger:{
	trigger:".section-8",
	start:"top 0%",
	// end:"bottom center",
  // markers:true,
  scrub:true,
	toggleActions:"restart none none reset"
}})
tl4.to('.sect-8-L-1',{
  yPercent: 250,
  ease: "none",

}, 'section-8')
tl4.to('.sect-8-R-1',{
  yPercent: -200,
  ease: "none",

}, 'section-8')

// --------------------------------------------

let tl5= gsap.timeline({scrollTrigger:{
	trigger:".section-9",
	start:"top 0%",
	// end:"bottom center",
  // markers:'true',
  scrub:true,
	toggleActions:"restart none none reset"
}})
tl5.to('.questionmark-sect-9',{
  yPercent: 350,
  ease: "none",

}, 'section-9')

tl4.to('.sect-9-L-1',{
  yPercent: -40,
  ease: "none",

},'section-9')
tl4.to('.sect-9-R-1',{
  yPercent: -40,
  ease: "none",

},'section-9')


// -----------------------------------------


let tl7= gsap.timeline({scrollTrigger:{
	trigger:".section-9",
	start:"bottom 10%",
	// end:"bottom center",
  // markers:true,
  scrub:true,
	toggleActions:"restart none none reset"
}})
tl7.to('.sect-10-L-1',{
  yPercent: 100,
  ease: "none",

}, 'section-10')
tl7.to('.sect-10-L-2',{
  yPercent: 50,
  ease: "none",

}, 'section-10')
tl7.to('.sect-10-R-2',{
  yPercent: 50,
  ease: "none",

}, 'section-10')
tl7.to('.sect-10-arrow',{
  yPercent: 20,
  ease: "none",

}, 'section-10')
