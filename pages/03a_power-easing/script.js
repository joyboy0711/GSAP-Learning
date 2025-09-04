import { gsap } from "gsap";

gsap.to(".p1i", {
    x : 1100,
    duration : 3,
    ease : "power1.in"
});
gsap.to(".p1o", {
    x : 1100,
    duration : 3,
    ease : "power1.out"
});
gsap.to(".p1io", {
    x : 1100,
    duration : 3,
    ease : "power1.inOut"
});