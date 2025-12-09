document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const email = document.getElementById('email');
  const login = document.getElementById('login');
  const pass1 = document.getElementById('pass1');
  const pass2 = document.getElementById('pass2');
  const result = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValue = email.value.trim();
    const loginValue = login.value.trim();
    const p1 = pass1.value.trim();
    const p2 = pass2.value.trim();

    if (!mailValue || !loginValue || !p1 || !p2) {
      alert('Будь ласка, заповніть всі поля.');
      return;
    }

    if (p1 !== p2) {
      alert('Паролі не збігаються.');
      return;
    }

    
    result.textContent = `На ${mailValue} надіслано лист із підтвердженням.`;
    result.classList.remove('d-none');

    
    form.reset();
  });
});
