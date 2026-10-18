    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const menuIcon = menuButton.querySelector("i");

    if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        menuIcon.className = isOpen ? "fas fa-xmark" : "fas fa-bars";
      });
    }

    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });

    const header = document.getElementById("siteHeader");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });

    const revealEls = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-stagger"
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -60px 0px",
        }
      );

      revealEls.forEach((el) => revealObserver.observe(el));
    }

    