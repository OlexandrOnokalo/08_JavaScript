document.addEventListener("DOMContentLoaded", () => {

    const UpBtn = document.getElementById('UpBtn');
    UpBtn.addEventListener("click", pressUpBtn);

    const DownBtn = document.getElementById('DownBtn');
    DownBtn.addEventListener("click", pressDownBtn);


    const output = document.getElementById('output');
});

let digit = 0;

output.innerText=digit;


function pressUpBtn() {

    digit++;
    output.innerText = digit;
}

function pressDownBtn() {
digit--;
    output.innerText = digit;
}





