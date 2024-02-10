let cursor = document.querySelector("#cursor");
let pageContent = document.querySelector(".page1-content");
let pageContentHeading = document.querySelectorAll(".elem");
let Boxes = document.querySelectorAll(".box")
let number = document.querySelectorAll(".num h1")
let page4 = document.querySelector("#page4")


let locoScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll();

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
