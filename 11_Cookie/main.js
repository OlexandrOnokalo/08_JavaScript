const nameInput  = document.getElementById('colorName');
const typeSelect = document.getElementById('colorType');
const codeInput  = document.getElementById('colorCode');
const saveBtn    = document.getElementById('saveBtn');

const nameError  = document.getElementById('nameError');
const typeError  = document.getElementById('typeError');
const codeError  = document.getElementById('codeError');
const formError  = document.getElementById('formError');

const colorsRow = document.getElementById('colorsRow');


let colors = [];



function setCookie(name, value) {
  const expires = new Date(Date.now() + 3 * 60 * 60 * 1000).toUTCString(); 
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === name) return decodeURIComponent(val);
  }
  return null;
}



function clearErrors() {
  nameError.textContent = '';
  typeError.textContent = '';
  codeError.textContent = '';
  formError.style.display = 'none';
  formError.textContent = '';

  nameInput.classList.remove('is-invalid');
  typeSelect.classList.remove('is-invalid');
  codeInput.classList.remove('is-invalid');
}

function validateName(name) {
  const regex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ]+$/;
  return regex.test(name);
}

function validateRGB(code) {
  const regex = /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/;
  const match = code.match(regex);
  if (!match) return false;

  return match.slice(1).every(n => Number(n) >= 0 && Number(n) <= 255);
}

function validateRGBA(code) {
  const regex = /^(\d{1,3}),(\d{1,3}),(\d{1,3}),(0|0\.\d+|1(\.0)?)$/;
  const match = code.match(regex);
  if (!match) return false;

  const rgbOk = match.slice(1, 4).every(n => Number(n) >= 0 && Number(n) <= 255);
  const a = Number(match[4]);
  return rgbOk && a >= 0 && a <= 1;
}

function validateHEX(code) {
  return /^#[0-9A-Fa-f]{6}$/.test(code);
}

function validateByType(type, code) {
  if (type === 'RGB')  return validateRGB(code);
  if (type === 'RGBA') return validateRGBA(code);
  if (type === 'HEX')  return validateHEX(code);
  return false;
}



function buildCssColor(type, code) {
  if (type === 'HEX') return code;
  if (type === 'RGB') return `rgb(${code})`;
  if (type === 'RGBA') return `rgba(${code})`;
}

function addColorCard(name, type, code) {
  const col = document.createElement('div');
  col.className = 'col-3';

  const card = document.createElement('div');
  card.className = 'border rounded p-2 text-center';

  const square = document.createElement('div');
  square.style.height = '80px';
  square.style.borderRadius = '6px';
  square.style.background = buildCssColor(type, code);

  const title = document.createElement('div');
  title.className = 'fw-bold mt-2';
  title.textContent = name;

  const info = document.createElement('div');
  info.textContent = `${type}: ${code}`;

  card.appendChild(square);
  card.appendChild(title);
  card.appendChild(info);
  col.appendChild(card);

  colorsRow.appendChild(col);
}



saveBtn.addEventListener('click', function () {
  clearErrors();

  const name = nameInput.value.trim();
  const type = typeSelect.value;
  const code = codeInput.value.trim();

  let valid = true;

  if (!validateName(name)) {
    valid = false;
    nameError.textContent = 'Тільки літери.';
    nameInput.classList.add('is-invalid');
  }

  if (!validateByType(type, code)) {
    valid = false;
    codeError.textContent = 'Невірний формат.';
    codeInput.classList.add('is-invalid');
  }

  if (!valid) return;


  colors.push({ name, type, code });
  setCookie("palette", JSON.stringify(colors));


  addColorCard(name, type, code);


  nameInput.value = '';
  codeInput.value = '';
});



window.addEventListener("DOMContentLoaded", () => {
  const saved = getCookie("palette");

  if (saved) {
    try {
      colors = JSON.parse(saved);

      colors.forEach(c => {
        addColorCard(c.name, c.type, c.code);
      });

    } catch (e) {
      console.error("Cookie parse error:", e);
    }
  }
});
