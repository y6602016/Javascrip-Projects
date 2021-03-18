const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    document.body.style.background = 'linear-gradient('+randomNumber + ',' + randomNumber2 +')';
    color.textContent = randomNumber + ' to ' + randomNumber2;
});

function getRandomNumber() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let index = hex[Math.floor(Math.random() * hex.length)];
        color += index;
    }
    return color;
}