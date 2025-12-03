document.addEventListener("DOMContentLoaded", () => {

    const htmlBtn = document.getElementById('htmlBtn');
    htmlBtn.addEventListener("click", pressHtmlBtn);

    const CSSBtn = document.getElementById('CSSBtn');
    CSSBtn.addEventListener("click", pressCSSBtn);

    const JSBtn = document.getElementById('JSBtn');
    JSBtn.addEventListener("click", pressJSBtn);

    const output = document.getElementById('output');
});


function pressHtmlBtn() {
    output.innerHTML = `<p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications. HTML describes the structure of a web page using a series of elements and tags.</p>`;
}

function pressCSSBtn() {
    output.innerHTML = `<p>CSS stands for Cascading Style Sheets. It is used to control the presentation and layout of web pages. CSS allows developers to apply styles, such as colors, fonts, and spacing, to HTML elements.</p>`;
}

function pressJSBtn() {
    output.innerHTML = `<p>JavaScript (JS) is a programming language that enables interactive and dynamic content on web pages. It allows developers to create features such as animations, form validation, and interactive maps.</p>`;
}



