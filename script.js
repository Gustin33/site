function handleResponse(response) {
    const responseContainer = document.getElementById('response-container');
    const responseMessage = document.getElementById('response-message');

    if (response === 'sim') {
        responseMessage.innerHTML = 'Uhul! Você aceitou! 💖<br>Que felicidade!';
    } else {
        responseMessage.innerHTML = 'Tudo bem, sem problemas. <br> Podemos ser amigos!';
    }

    document.getElementById('container').style.display = 'none';
    responseContainer.style.display = 'flex';
    createHearts();
}

function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartsContainer.appendChild(heart);
    }
}
