// Mostrar y ocultar el bot
function toggleBot() {
    var botContainer = document.getElementById('botContainer');
    if (botContainer.style.display === 'none' || botContainer.style.display === '') {
        botContainer.style.display = 'block';
    } else {
        botContainer.style.display = 'none';
    }
}

// Función para enviar un mensaje
function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        var botContent = document.querySelector('.bot-content');
        var userMessage = document.createElement('p');
        userMessage.textContent = "Tú: " + userInput;
        botContent.appendChild(userMessage);
        document.getElementById('userInput').value = '';
        
        // Simular una respuesta del bot
        setTimeout(function() {
            var botReply = document.createElement('p');
            botReply.textContent = "Bot: Estoy aquí para ayudarte.";
            botContent.appendChild(botReply);
            botContent.scrollTop = botContent.scrollHeight;
        }, 1000);
    }
}
