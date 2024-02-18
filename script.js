let cursor = document.querySelector("#cursor");
let pageContent = document.querySelector(".page1-content");
let pageContentHeading = document.querySelectorAll(".elem");
let Boxes = document.querySelectorAll(".box")
let number = document.querySelectorAll(".num h1")
let page4 = document.querySelector("#page4")


let locoScroll = () => {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locoScroll();

let navMenu = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let tl = gsap.timeline({ paused: true });
    let menuOverlay = document.querySelector('.menu-overlay');
    let isOpen = false;

    let openMenu = () => {
      menuOverlay.classList.add('active');
      menuOverlay.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      tl.play();
      isOpen = true;
    };

    let closeMenu = () => {
      menuOverlay.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)"
      tl.reverse();
      isOpen = false;
    };

    document.querySelector(".open-menu-btn").addEventListener("click", openMenu );
      // if (!isOpen) {
      //   openMenu();
      // } else {
      //   closeMenu();
      // }
    

    document.querySelector(".menu-close-btn").addEventListener("click", closeMenu);



    tl.to(".video-preview", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.4,
      height: "150px",
    }, "a");

    tl.to(".menu-links, .btn", {
      duration:1.4,
      y: 0,
      ease: Power2,
      opacity: 1,
    }, "a");

    tl.to(".menu-divider", {
      duration: 2,
      width: "100%",
      ease: Power4.easeOut,
    }, "a");

    // Ensure the timeline is reversed initially
    tl.reverse();
  });
};
navMenu();

let cursorAnim = () => {
  pageContent.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      ease: Power3,
    });
  });
  pageContent.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });
  pageContent.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });
};
cursorAnim();

let pageOneHeading = () => {
  gsap.to(pageContentHeading, {
    delay: 0.115,
    y: "0%",
    duration: 0.6,
    stagger: 0.05,
    ease: Power2,
  });
};
pageOneHeading();

let page2ParaAnim = () => {
  gsap.to(".anim-para h1", {
    y: 0,
    duration: .8,
    stagger: 0.09,
    ease: Power3,
    scrollTrigger: {
      trigger: "#page2",
      scroller: ".main",
      start : "top 77%" ,
      end :"bottom 100%" ,
      scrub : 2
    },
  });
};
page2ParaAnim();

let lineAnim = () => {
    gsap.to("hr" , {
        width : "100%" ,
        duration : .2 ,
        ease : Power3 , 
        scrollTrigger: {
            trigger: "#page2",
            scroller: ".main",
            start : "top 50%" ,
            end :"bottom 100%" ,
            scrub : 1
          },

    })
}
lineAnim()

let numAnim = () =>{
  gsap.to(number , {
    y : 0 ,
    duration : 3 ,
    ease : Power3  ,
    scrollTrigger: {
      trigger: "#page4",
      scroller: ".main",
      start : "top 70%" ,
      end :"bottom 110%" ,
      scrub: 2
    },
  })
}
numAnim()

let sliderAnim = () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween : 20 ,
    slidesPerView: 4,
    freeMode: true,
    loop: true ,
    grabCursor : true ,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
sliderAnim()

let lastHeading = () => {
  gsap.to("#footer-heading h1", {
    delay: 1,
    y: "0",
    duration: 1.3,
    stagger: .2,
    ease: Power3,
    scrollTrigger: {
      trigger: ".footer",
      scroller: ".main",
      start : "top 40%" ,
      end :"bottom 100%" ,
      scrub : 3 ,
    },
  });
}
lastHeading()

let page4CursorAnim = () => {
 page4.addEventListener("mousemove", (dets) => {
    gsap.to(".page4-cursor", {
      x: dets.x,
      y: dets.y,
      ease: Power3,
    });
  });
  page4.addEventListener("mouseenter", () => {
    gsap.to(".page4-cursor", {
      opacity: 1,
      scale: 1,
    });
  });
  page4.addEventListener("mouseleave", () => {
    gsap.to(".page4-cursor", {
      opacity: 0,
      scale: 0,
    });
  });
};
page4CursorAnim();
