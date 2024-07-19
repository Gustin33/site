function handleResponse(response) {
    document.getElementById('initial-page').classList.add('hidden');
    document.getElementById('response-page').classList.remove('hidden');
    
    const responseText = document.getElementById('response-text');
    
    if (response === 'sim') {
        responseText.textContent = 'Amei a resposta! 💖';
    } else {
        responseText.textContent = 'Tudo bem! 😔';
    }
}
