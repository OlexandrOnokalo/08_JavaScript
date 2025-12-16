const STORAGE_KEY = 'userProfile_v1';

const citiesByCountry = {
  Canada: [
    'Toronto',
    'Vancouver',
    'Montreal',
    'Calgary',
    'Ottawa'
  ],
  USA: [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'San Francisco'
  ],
  Ukraine: [
    'Kyiv',
    'Lviv',
    'Odesa',
    'Dnipro',
    'Kharkiv'
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');
  const country = document.getElementById('country');
  const city = document.getElementById('city');
  const result = document.getElementById('resultContainer');

  function populateCities(selectedCountry) {
    city.innerHTML = '<option value="">-- Select city --</option>';
    if (!citiesByCountry[selectedCountry]) return;

    citiesByCountry[selectedCountry].forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      city.appendChild(opt);
    });
  }

  function getFormData() {
    return {
      firstname: form.firstname.value.trim(),
      lastname: form.lastname.value.trim(),
      birthday: form.birthday.value,
      gender: form.gender?.value || '',
      country: country.value,
      city: city.value,
      skills: [...form.querySelectorAll('input[type="checkbox"]:checked')]
        .map(el => el.value)
    };
  }

  function formatDate(date) {
    if (!date) return '';
    const [y, m, d] = date.split('-');
    return `${d}/${m}/${y}`;
  }

  function render(data) {
    if (!data) {
      result.textContent = 'No saved user data.';
      return;
    }

    result.innerHTML = `
      <table class="table table-dark table-bordered table-sm">
        <tbody>
          <tr><td>Firstname</td><td>${data.firstname}</td></tr>
          <tr><td>Lastname</td><td>${data.lastname}</td></tr>
          <tr><td>Birthday</td><td>${formatDate(data.birthday)}</td></tr>
          <tr><td>Gender</td><td>${data.gender}</td></tr>
          <tr><td>Country</td><td>${data.country}</td></tr>
          <tr><td>City</td><td>${data.city}</td></tr>
          <tr><td>Skills</td><td>${data.skills.join(', ')}</td></tr>
        </tbody>
      </table>
    `;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = getFormData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    render(data);
  });

  country.addEventListener('change', e => populateCities(e.target.value));

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saved) {
    populateCities(saved.country);
    render(saved);
  }
});
