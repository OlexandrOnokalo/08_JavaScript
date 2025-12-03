document.addEventListener("DOMContentLoaded", () => {

    const changeColor = document.getElementById('changeColor');
    changeColor.addEventListener("click", pressChangeColor);
    const redCircle = document.getElementById('redCircle');
    const yellowCircle = document.getElementById('yellowCircle');
    const greenCircle = document.getElementById('greenCircle');

});

const gray='rgb(102, 102, 102)';
const red='rgb(255, 0, 0)';
const yellow='rgb(255, 255, 0)';
const green='rgb(0, 128, 0)';


function pressChangeColor(event) {  
    if (redCircle.style.backgroundColor === red) {
        redCircle.style.backgroundColor = gray;
        yellowCircle.style.backgroundColor = yellow;
    }
    else if (yellowCircle.style.backgroundColor === yellow) {
        yellowCircle.style.backgroundColor = gray;
        greenCircle.style.backgroundColor = green;
    }
    else {
        greenCircle.style.backgroundColor = gray;
        redCircle.style.backgroundColor = red;
    }

}

