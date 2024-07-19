body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
}

.background {
    position: relative;
    height: 100vh;
    background: linear-gradient(135deg, #ffccff, #ff66b2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.heart {
    position: absolute;
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #ff6699, #ff3366);
    clip-path: path('M 200,100 Q 270,30 340,100 T 440,200 Q 340,300 200,200 Q 60,100 200,100 Z');
    opacity: 0.4;
    z-index: -1;
    animation: float 8s infinite ease-in-out;
}

.overlay {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

h1 {
    margin-bottom: 20px;
    font-size: 32px;
    color: #ff66b2;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0
