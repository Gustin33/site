document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const message = document.getElementById('message');

    yesButton.addEventListener('click', () => {
        message.textContent = "YAY! 💖 Você disse SIM! 🥳";
        message.style.display = 'block';
        yesButton.style.background = '#ff99cc';
        noButton.style.background = '#ff3333';
    });

    noButton.addEventListener('click', () => {
        message.textContent = "Oh não! 😢 Você disse NÃO!";
        message.style.display = 'block';
        yesButton.style.background = '#ff66b2';
        noButton.style.background = '#ff9999';
    });
});
