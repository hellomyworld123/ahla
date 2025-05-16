// Initialiser GSAP après chargement de la page
window.addEventListener("load", () => {
  gsap.from(".hero-title", {
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: "power2.out",
  });

  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    delay: 0.3,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".btn-gold", {
    opacity: 0,
    scale: 0.8,
    delay: 0.6,
    duration: 0.8,
    ease: "back.out(1.7)",
  });

  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });
});
