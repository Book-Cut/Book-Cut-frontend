document.addEventListener("DOMContentLoaded", function () {

    const baseDatosServicios = {
        "corte_cabello": {
            titulo: "Corte de Cabello",
            duracion: "Duración: 1 hora",
            precio: "$ 30.000",
            imagen: "/img/corte-de-pelo.png",
            descripcion: "¿Quieres la mejor asesoría profesional para lograr el corte de cabello perfecto que resalte tu atractivo? No solo estás cortando tu cabello, estás soltando versiones antiguas de ti."
        },
        "corte_nino": {
            titulo: "Corte para Niños",
            duracion: "Duración: 40 minutos",
            precio: "$ 25.000",
            imagen: "/img/peluqueria.png",
            descripcion: "Corte moderno, rápido y cómodo para los más pequeños. Los hacemos sentir como en casa con la mejor atención y paciencia."
        },
        "afeitado": {
            titulo: "Depilación / Afeitado",
            duracion: "Duración: 1 hora",
            precio: "$ 30.000",
            imagen: "/img/cera.png",
            descripcion: "Dile adiós a la rutina diaria y hola a la suavidad duradera. Utilizamos los mejores productos para proteger tu piel de irritaciones."
        },
        "tinte": {
            titulo: "Tinte de Cabello",
            duracion: "Duración: 2 horas",
            precio: "$ 60.000",
            imagen: "/img/kit-de-tinte-para-el-cabello.png",
            descripcion: "Un nuevo color no es solo tinte, es el comienzo de una nueva versión de ti. Tintes de alta calidad que protegen la fibra capilar."
        },
        "facial": {
            titulo: "Tratamiento Facial",
            duracion: "Duración: 1 hora",
            precio: "$ 50.000",
            imagen: "/img/masaje-facial.png",
            descripcion: "Tu piel es tu mejor accesorio: cuídala, protégela y hazla brillar. Limpieza profunda para eliminar impurezas."
        },
        "capilar": {
            titulo: "Tratamiento Capilar",
            duracion: "Duración: 1 hora",
            precio: "$ 45.000",
            imagen: "/img/pelo.png",
            descripcion: "¡Tu cabello es la corona que nunca te quitas, así que dale el amor que se merece! Hidratación profunda y reparación."
        }
    };


    const parametrosURL = new URLSearchParams(window.location.search);
    const idServicio = parametrosURL.get('id');


    const servicioActual = baseDatosServicios[idServicio];


    if (servicioActual) {
        document.getElementById('servicio-titulo').textContent = servicioActual.titulo;
        document.getElementById('servicio-duracion').textContent = servicioActual.duracion;
        document.getElementById('servicio-precio').textContent = servicioActual.precio;
        document.getElementById('servicio-img').src = servicioActual.imagen;
        document.getElementById('servicio-desc').textContent = servicioActual.descripcion;
    } else {

        document.getElementById('servicio-titulo').textContent = "Servicio no encontrado";
        document.getElementById('servicio-desc').textContent = "Por favor, regresa a la página principal y selecciona un servicio válido.";
        document.querySelector('.btn-agendar').style.display = 'none';
        document.getElementById('servicio-img').style.display = 'none';
    }
});