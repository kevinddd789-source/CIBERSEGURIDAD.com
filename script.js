document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(".reveal");


    const observer = new IntersectionObserver(

        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observer.unobserve(entrada.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    elementos.forEach((elemento) => {

        observer.observe(elemento);

    });

});