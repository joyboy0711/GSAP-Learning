import gsap from "gsap";

const box = document.querySelector(".box");

const container = document.querySelector(".demo");
const containerBounds = container.getBoundingClientRect();
const boxBounds = box.getBoundingClientRect();


const maxY = containerBounds.bottom - boxBounds.bottom;

gsap.to(box, {
  duration: 2,
  y: maxY,
  repeat: -1,
  ease: "bounce.out",
});