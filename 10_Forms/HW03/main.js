
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('colorForm');
  const palette = document.getElementById('palette');
  const errorEl = document.getElementById('error');

  const r = document.getElementById('r');
  const g = document.getElementById('g');
  const b = document.getElementById('b');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const rv = parseInt(r.value, 10);
    const gv = parseInt(g.value, 10);
    const bv = parseInt(b.value, 10);

    const valid =
      isValid(rv) &&
      isValid(gv) &&
      isValid(bv);

    if (!valid) {
      showError(true);
      setInvalid(r, !isValid(rv));
      setInvalid(g, !isValid(gv));
      setInvalid(b, !isValid(bv));
      return;
    }


    showError(false);
    setInvalid(r, false);
    setInvalid(g, false);
    setInvalid(b, false);

    addColor(rv, gv, bv);


    r.value = '';
    g.value = '';
    b.value = '';
    r.focus();
  });


  function isValid(x) {
    return Number.isInteger(x) && x >= 0 && x <= 255;
  }


  function showError(state) {
    if (state) {
      errorEl.classList.remove('d-none');
    } else {
      errorEl.classList.add('d-none');
    }
  }

  function setInvalid(input, state) {
    if (state) input.classList.add('is-invalid');
    else input.classList.remove('is-invalid');
  }

 
  function addColor(r, g, b) {
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const text = `RGB (${r}, ${g}, ${b})`;

    const item = document.createElement('div');
    item.className = 'col-12 col-md-6 col-lg-4';

    item.innerHTML = `
      <div class="d-flex align-items-center border rounded p-2 bg-white">
        <div class="me-3"
             style="width:40px;height:32px;border-radius:3px;background:${rgb};">
        </div>
        <div>${text}</div>
      </div>
    `;

    palette.appendChild(item);
  }
});
