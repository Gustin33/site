function handleResponse(response) {
    const mainQuestion = document.getElementById('main-question');
    const subtext = document.getElementById('subtext');
    const buttons = document.getElementById('buttons');
    const responseMessage = document.getElementById('response-message');
    
    mainQuestion.style.display = 'none';
    subtext.style.display = 'none';
    buttons.style.display = 'none';

    responseMessage.classList.remove('hidden');

    if (response === 'sim') {
        responseMessage.textContent = 'Que ótimo! Estou muito feliz!';
    } else {
        responseMessage.textContent = 'Entendo. Vamos conversar mais sobre isso!';
    }
}
