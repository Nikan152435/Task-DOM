import "./css/style.css";
import "./js/app";

document.addEventListener("DOMContentLoaded", function() {
    const character = document.getElementById("character");

    function getRandomPosition() {
        const gameContainer = document.querySelector(".game-container");
        const containerRect = gameContainer.getBoundingClientRect();

        const maxX = containerRect.width - character.clientWidth;
        const maxY = containerRect.height - character.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        return { x: randomX, y: randomY };
    }

    function moveCharacter() {
        const newPosition = getRandomPosition();
        character.style.left = newPosition.x + "px";
        character.style.top = newPosition.y + "px";
    }

    // Устанавливаем интервал для регулярного перемещения персонажа
    setInterval(moveCharacter, 2000); // Здесь 2000 миллисекунд (2 секунды), можно изменить интервал по вашему усмотрению
});