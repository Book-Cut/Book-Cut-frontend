const flecha = document.querySelector(".flecha-scroll");
const inicio = document.querySelector("#inicio");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                flecha.style.opacity = "0";
                flecha.style.pointerEvents = "none";
                observer.disconnect(); // desaparece definitivamente
            }
        });
    },
    {
        threshold: 0.6
    }
);

observer.observe(inicio);

// Scroll suave al hacer click
flecha.addEventListener("click", () => {
    document.querySelector("#Servicios").scrollIntoView({
        behavior: "smooth"
    });
});
