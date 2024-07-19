document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    if (yesButton) {
        yesButton.addEventListener('click', function() {
            showMessage('Você aceitou o pedido! 💖 Estou tão feliz por você ter aceitado! 🌟 Vamos viver muitos momentos incríveis juntos!');
        });
    }

    if (noButton) {
        noButton.addEventListener('click', function() {
            showMessage('Que pena, talvez em outra oportunidade! 😢');
        });
    }
});

function showMessage(text) {
    const message = document.getElementById('message');
    message.innerText = text;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 5000); // Exibe a mensagem por 5 segundos
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
