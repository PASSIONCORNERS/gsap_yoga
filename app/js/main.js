// nav section
const navSlide = () => {
  const burger = document.querySelector(".nav-burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    burger.classList.toggle("nav-burger-bar-close"); //icon
    nav.classList.toggle("nav-links-active"); //menu
  });
};
navSlide();

// animation
var tl = new TimelineLite();
//nav and hero section
tl.from("#content, #content2", 2, { y: 50, opacity: 0 }, "+=.5");
tl.from("#content3", 2, { y: 50, opacity: 0 }, "-=1.5");
tl.from("#content5", 2, { y: -50, opacity: 0 }, "-=2");
tl.from("#content6, #content7", 2, { y: 10, opacity: 0 }, "-=1");
tl.from("#content8", 2, { y: -1000, opacity: 0 }, "-=3");
tl.from("#content9", 2, { x: -500, opacity: 0 }, "-=3");
tl.from("#content10", 2, { x: 500, right: 50 }, "-=2.2");
//content10 after movement
tl.set("#content10", { x: "0", y: "30%" }) //  center the element
  .to("#content10", 2, { x: 25, y: 0, rotation: 5, z: 20, delay: 0.5 }); // move it to the desired position
//about1 section
var tl2 = new TimelineLite();
const controller = new ScrollMagic.Controller();

tl2.from("#content11, #content11", 2, { y: 50, opacity: 0 }, "-=1");
tl2.from("#content12", 2, { y: 50, opacity: 0 }, "-=1.5");
tl2.from("#content13", 2, { y: 50, opacity: 0 }, "-=1.5");
tl2.from("#content14", 2, { y: 50, opacity: 0 }, "-=1.5");
tl2.from("#content15", 2, { y: 50, opacity: 0 }, "-=1.5");

const scene = new ScrollMagic.Scene({
  triggerElement: ".about1"
})
  .setTween(tl2)
  .addTo(controller);

// //about2 section
var tl3 = new TimelineLite();
const controller2 = new ScrollMagic.Controller();

tl3.from("#content16", 2, { y: 50, opacity: 0 }, "-=1");
tl3.from("#content17", 2, { y: 50, opacity: 0 }, "-=1.5");
tl3.from("#content18", 2, { x: -50, opacity: 0 }, "-=1.5");

// lady after movement
tl3
  .set("#lady-leg", { x: "1850", y: "910" }) //  center the element
  .to("#lady-leg", 2, { x: 2085, y: 705, rotation: 29, z: 20, delay: 0.5 }, 3); // move it to the desired position

// plant after movement
tl3.to(
  "#plant-top",
  2,
  { x: 2550, y: 1349, rotation: 5, z: 20, delay: 0.5 },
  3
); // move it to the desired position

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".about2"
})
  .setTween(tl3)
  .addTo(controller2);
