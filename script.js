function handleResponse(response) {
    const initialPage = document.getElementById('initial-page');
    const responsePage = document.getElementById('response-page');
    const responseText = document.getElementById('response-text');
    
    // Ocultar a página inicial
    initialPage.classList.add('hidden');
    
    // Mostrar a página de resposta
    responsePage.classList.remove('hidden');
    
    // Ajustar a mensagem de resposta
    responseText.textContent = response === 'sim'
        ? 'Que ótimo! Estou muito feliz!'
        : 'Entendo. Vamos conversar mais sobre isso!';
}
