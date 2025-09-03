import {gsap} from "gsap";

gsap.to(".box", {
    opacity: 1,
    duration: 2,
    rotation: 360,
    background: '#ff6f61',
    borderRadius: '50%',
    scale: 1.2,
    x: 600,
    delay: 0.5,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.2,
    
});