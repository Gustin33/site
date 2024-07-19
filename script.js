function handleResponse(response) {
    const content = document.getElementById('content');
    const responseContainer = document.getElementById('response-container');
    const responseMessage = document.getElementById('response-message');
    
    content.style.display = 'none';
    responseContainer.classList.remove('hidden');

    if (response === 'sim') {
        responseMessage.textContent = 'Que ótimo! Estou muito feliz!';
    } else {
        responseMessage.textContent = 'Entendo. Vamos conversar mais sobre isso!';
    }
}
