const board = document.querySelector('#board');
const colors = ['#7f0d0d','#0b1965','#04402a','#8cb70b','#ce30be','#c67a41','#9141c6'];
const SQUARES_NUMBER = 810;

for(let i = 0;i < SQUARES_NUMBER;i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    
    square.addEventListener('mouseover',() =>
            setColor(square)
    )

    square.addEventListener('mouseleave',() =>
            removeColor(square)
    )

    function setColor(element){
        const color = getRandomColor();
        element.style.backgroundColor = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }

    function removeColor(element){
        element.style.backgroundColor = '#1d1d1d';
        element.style.boxShadow = `0 0 2px #000`;
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    board.append (square);
}