document.addEventListener("DOMContentLoaded", () => {
const textElement = document.getElementById('textElement');     
const button1 = document.getElementById('1');
button1.addEventListener('click', () => {
  const color = button1.getAttribute('data-color');
  textElement.style.color = color;
});
const button2 = document.getElementById('2');
button2.addEventListener('click', () => {
  const color = button2.getAttribute('data-color');
  textElement.style.color = color;
});
const button3 = document.getElementById('3');
button3.addEventListener('click', () => {
  const color = button3.getAttribute('data-color');
  textElement.style.color = color;
});
const button4 = document.getElementById('4');
button4.addEventListener('click', () => {
  const color = button4.getAttribute('data-color');
  textElement.style.color = color;
});
const button5 = document.getElementById('5');
button5.addEventListener('click', () => {
  const color = button5.getAttribute('data-color');
  textElement.style.color = color;
});
const button6 = document.getElementById('6');
button6.addEventListener('click', () => {
  const color = button6.getAttribute('data-color');
  textElement.style.color = color;      
});
});




