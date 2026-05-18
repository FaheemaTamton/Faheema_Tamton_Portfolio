
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".hero h1", {
  y: 50,
  opacity: 0,
  duration: 1
});

// SECTION ANIMATION

document.querySelectorAll(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: section,
    y: 50,
    opacity: 0,
    duration: 1
  });
});




