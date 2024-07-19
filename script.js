function handleResponse(response) {
    const initialPage = document.getElementById('initial-page');
    const responsePage = document.getElementById('response-page');
    const responseMessage = document.getElementById('response-message');
    
    // Ocultar a página inicial
    initialPage.style.display = 'none';
    
    // Mostrar a página de resposta
    responsePage.style.display = 'block';
    
    // Ajustar a mensagem de resposta
    responseMessage.textContent = response === 'sim'
        ? 'Que ótimo! Estou muito feliz!'
        : 'Entendo. Vamos conversar mais sobre isso!';
}
