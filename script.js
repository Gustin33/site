// Página Inicial
document.getElementById('yes-btn').onclick = function() {
    window.location.href = 'resposta.html?answer=yes';
};

document.getElementById('no-btn').onclick = function() {
    window.location.href = 'resposta.html?answer=no';
};

// Página de Resposta
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const answer = params.get('answer');

    const messageElement = document.getElementById('response-message');
    
    if (answer === 'yes') {
        messageElement.textContent = 'Amei a resposta! 💖';
    } else {
        messageElement.textContent = 'Tudo bem! 😔';
    }

    // Adicionar corações flutuantes
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        document.body.appendChild(heart);
    }
};
