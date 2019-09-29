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
//content10 movement after fade in
tl.set("#content10", { x: "0", y: "30%" }) //  center the element
  .to("#content10", 2, { x: 25, y: 0, rotation: 5, z: 20, delay: 0.5 }); // move it to the desired position
//about1 section
