// Seleccio elementos para el menu Mobile
const botonMenu = document.getElementById('button-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');
const messageToSend = document.getElementById('messageSend');
const buttonMessageSend = document.getElementById('buttonMessageSend');

// Evento para el menu mobile
botonMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('visible');
});

buttonMessageSend.addEventListener('click', function() {

    var pregunta = messageToSend.value;

    if (pregunta != ''){
        // Crear el elemento p con la clase 'messageUser'
        var parrafo = document.createElement("p");
        parrafo.classList.toggle("messageUser");

        // Crear el texto del párrafo
        parrafo.innerHTML = '<i class="fa-solid fa-user"></i><span>'+pregunta+'</span>';
        
        // Añadir el párrafo al div
        document.getElementById("boxMessage").appendChild(parrafo);

        //Borro caja de Mensaje
        messageToSend.value = '';

        //Envio a funcion para que responda
        responderMensaje(pregunta);
    }

});

function responderMensaje( pregunta ) {

    // Evaluo si la pregunta incluye 'mas sobre guille' o 'mas sobre Guillermo'
    if (
        pregunta.toLowerCase().includes('mas sobre guille') ||
        pregunta.toLowerCase().includes('mas sobre guillermo')
    ) {
        var respuesta = 'Te cuento mas sobre Guille blababnlaba'

        // Crear el elemento p con la clase 'messageUser'
        var parrafo = document.createElement("p");
        parrafo.classList.toggle("messageBot");
    
        // Crear el texto del párrafo
        parrafo.innerHTML = '<i class="fa-solid fa-user"></i><span>'+respuesta+'</span>';
        
        // Añadir el párrafo al div
        document.getElementById("boxMessage").appendChild(parrafo);
    
        //Borro caja de Mensaje
        messageToSend.value = '';
    }
}
