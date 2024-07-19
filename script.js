body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: #ffccff; /* Gradiente rosa */
    overflow: hidden;
    position: relative;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 1;
}

.content {
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #ff99cc;
}

#yes {
    background: #ff66b2;
    color: white;
}

#no {
    background: #ff3333;
    color: white;
}

.message {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 24px;
    color: #ff66b2;
    display: none;
}

@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

.heart {
    position: absolute;
    width: 50px;
    height: 50px;
    background: url('heart.png') no-repeat center center;
    background-size: cover;
    animation: float 3s infinite;
    opacity: 0.5;
}

/* Estilo para a segunda página */
.message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #ffccff; /* Gradiente rosa */
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
}

.message-container h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.message-container p {
    font-size: 24px;
    margin: 10px 0;
}

.back-button {
    margin-top: 20px;
    padding: 10px 20px;
    background: #ff66b2;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    transition: background 0.3s;
}

.back-button:hover {
    background: #ff99cc;
}
