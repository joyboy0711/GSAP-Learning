import { gsap } from "gsap";

gsap.to(".card", {
    duration: 3, 
    opacity: 1,
    scale: 1,
    ease: "smooth",
    onComplete: () => {
        gsap.to(".card", {
            y: 10,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "smooth",
        })
    }  
});