// // logo
// var content = document.getElementById("content");
// TweenMax.fromTo(content, 2, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
// // title
// var content = document.getElementById("content2");
// TweenMax.fromTo(content, 2, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
// // desc
// var content = document.getElementById("content3");
// TweenMax.fromTo(content, 2, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
// // main-bg

var tl = new TimelineLite();
tl.from("#content, #content2", 2, { y: 50, opacity: 0 }, "+=.5");
tl.from("#content3", 2, { y: 50, opacity: 0 }, "-=1.5");
// tl.from("#content4", 2, { y: -70, opacity: 0 }, "-=1.5");
tl.from("#content5", 2, { y: -50, opacity: 0 }, "-=2");
tl.from("#content6, #content7", 2, { y: 10, opacity: 0 }, "-=1");
// tl.from("#content7", 2, { y: 50, opacity: 0 }, "-=1");
tl.from("#content8", 2, { y: -1000, opacity: 0 }, "-=3");
tl.from("#content9", 2, { x: -500, opacity: 0 }, "-=3");
tl.from("#content10", 2, { x: 500, right: 50 }, "-=2.2");
// tl.from("#content10", 2, { x: 500, opacity: 0 }, "-=3");
// tl.from("#content10", 2, { x: 500, rotation: -50 }, "-=3.3");

tl.set("#content10", { x: "0", y: "30%" }) //  center the element
  .to("#content10", 2, { x: 25, y: 0, rotation: 5, z: 20, delay: 1 }); // move it to the desired position

// tl.from("#content10", 1, { opacity: 0 });
// tl.to("#content10", 0.5, {
//   right: "-7px",
//   top: "-10px"
// });
