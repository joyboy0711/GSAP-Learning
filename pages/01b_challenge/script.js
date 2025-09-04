import { gsap } from "gsap";

gsap.to(".card  ", {
    opacity: 1,
    scale: 1,
    duration: 4,
    repeat: -1,
    yoyo: true,
    boxShadow: "0 0 30px 10px #00ffea, 0 0 60px 20px #00ffea",
    ease: "power1.inOut"
}
)