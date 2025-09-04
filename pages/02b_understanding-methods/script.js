import { gsap } from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");





const anim = gsap.to(".box", {
    opacity: 1,
    rotate: 360,
    borderRadius: "50%",
    scale: 1.1,
    duration: 2
});

play.addEventListener("click", () => {
    anim.play();
});

pause.addEventListener("click", () => {
    anim.pause();
});

resume.addEventListener("click", () => {
    anim.resume();
});

restart.addEventListener("click", () => {
    anim.restart();
});

reverse.addEventListener("click", () => {
    anim.reverse();
});

repeat.addEventListener("click", () => {
    anim.repeat(2);
});

kill.addEventListener("click", () => {
    anim.kill();
});

yoyo.addEventListener("click", () => {
    anim.yoyo(true);
});