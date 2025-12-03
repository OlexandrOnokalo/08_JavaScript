document.addEventListener("DOMContentLoaded", () => {

});

const activeColor = "#1c93b4a1";
const noActiveColor = "#303030";
let activeBook = null;

function bookClick(event) {  
    if(activeBook) {
        activeBook.style.backgroundColor = noActiveColor;
    }

    activeBook = event.target;
    activeBook.style.backgroundColor = activeColor;
}

