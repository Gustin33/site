function handleResponse(response) {
    const initialPage = document.getElementById('initial-page');
    const responsePage = document.getElementById('response-page');
    const responseText = document.getElementById('response-text');
    
    // Ocultar a página inicial
    initialPage.style.display = 'none';
    
    // Mostrar a página de resposta
    responsePage.style.display = 'flex';
    
    // Ajustar a mensagem de resposta
    responseText.textContent = response === 'sim'
        ? 'Que ótimo! Estou muito feliz!'
        : 'Entendo. Vamos conversar mais sobre isso!';
}
