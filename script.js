document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    inertia: 0.8,
    lerp: 0.1,
    multiplier: 2,
  });

  // Pegando todos os links da navbar
  document.querySelectorAll(".navbar-items a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Evita o comportamento padrão do navegador

      let targetId = this.getAttribute("href"); // Pega o ID do destino
      let targetElement = document.querySelector(targetId); // Encontra o elemento no DOM

      if (targetElement) {
        scroll.scrollTo(targetElement); // Usa Locomotive Scroll para ir até o destino
      }
    });
  });

  // Pegando o link específico para "Back to Home"
  document
    .querySelector(".back-to-home")
    .addEventListener("click", function (e) {
      e.preventDefault(); // Evita o comportamento padrão do navegador

      let homeElement = document.querySelector("#Home-top"); // Pega o elemento da home

      if (homeElement) {
        scroll.scrollTo(homeElement); // Usa Locomotive Scroll para rolar até a home
      }
    });

  // Correção para animações do GSAP
  scroll.on("scroll", (args) => {
    gsap.to(".specialties-container ul li", {
      opacity: 1,
      y: 0,
      duration: 0.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".specialties-container",
        start: "top center+=100",
        end: "bottom center+=100",
        scrub: true,
      },
    });
  });
});
