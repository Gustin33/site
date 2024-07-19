function handleResponse(response) {
    const responseContainer = document.getElementById('response-container');
    const responseMessage = document.getElementById('response-message');

    if (response === 'sim') {
        responseMessage.innerHTML = 'Uhul! Você aceitou! 💖<br>Que felicidade!';
    } else {
        responseMessage.innerHTML = 'Tudo bem, sem problemas.<br>Podemos ser amigos!';
    }

    document.getElementById('container').style.display = 'none';
    responseContainer.classList.remove('hidden');
    createHearts();
}

function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.innerHTML = ''; // Clear any existing hearts
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        heartsContainer.appendChild(heart);
    }
}
