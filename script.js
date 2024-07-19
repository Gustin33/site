document.getElementById('yes').addEventListener('click', function() {
    showMessage('Você aceitou o pedido! 💖');
});

document.getElementById('no').addEventListener('click', function() {
    showMessage('Que pena, talvez em outra oportunidade! 😢');
});

function showMessage(text) {
    const message = document.getElementById('message');
    message.innerText = text;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
}

function createHearts() {
    const numHearts = 10;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
        document.body.appendChild(heart);
    }
}

createHearts();
