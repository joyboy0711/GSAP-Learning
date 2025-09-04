import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (element) => {
    const tabBounds = element.getBoundingClientRect();
    const rowBounds = tabRow.getBoundingClientRect();

    const width = tabBounds.width;
    const offset = tabBounds.left - rowBounds.left;

    gsap.to(indicator, {
        width: width,
        x: offset,
        ease: "back.inOut(1.7)",
        duration: 0.5,
    });
};

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.add("active"));
        tab.classList.remove("active");
        updateIndicator(tab);
    });
});
