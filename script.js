function confirmChoice(choice) {
    const messageContainer = document.getElementById('message-container');
    const message = document.getElementById('message');

    if (choice === 'sim') {
        message.innerHTML = 'Uhul! Que felicidade! <br> <div id="hearts"></div>';
    } else {
        message.innerHTML = 'Tudo bem, sem problemas. <br> Espero que possamos ser amigos!';
    }

    document.getElementById('container').style.display = 'none';
    messageContainer.style.display = 'flex';
    createHearts();
}

function createHearts() {
    const heartContainer = document.getElementById('hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartContainer.appendChild(heart);
    }
}
