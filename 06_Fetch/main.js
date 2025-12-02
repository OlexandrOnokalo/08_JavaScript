
const usernameInput = document.getElementById('username');
const goBtn = document.getElementById('go');
const errBox = document.getElementById('error');
const card = document.getElementById('card');
const rawPre = document.getElementById('raw');

const avatar = document.getElementById('avatar');
const htmlUrl = document.getElementById('html_url');
const nameEl = document.getElementById('name');
const loginEl = document.getElementById('login');
const blogEl = document.getElementById('blog');
const locationEl = document.getElementById('location');
const emailEl = document.getElementById('email');
const followersEl = document.getElementById('followers');
const followingEl = document.getElementById('following');

function showError(msg) {
  errBox.textContent = msg;
  errBox.classList.remove('d-none');
  card.classList.add('d-none');
  console.error(msg);
}

function hideError() {
  errBox.classList.add('d-none');
}

function showRaw(data) {
  rawPre.textContent = JSON.stringify(data, null, 2);
}

function setFieldText(el, value) {

  if (value === null) el.textContent = 'null';
  else if (value === undefined) el.textContent = 'undefined';
  else el.textContent = String(value);
}

function populate(data) {

  console.log('GitHub API response object:', data);
  showRaw(data);

  avatar.src = data.avatar_url;
  avatar.alt = data.login;

  htmlUrl.href = data.html_url;
  htmlUrl.textContent = data.html_url;

  setFieldText(nameEl, data.name);
  setFieldText(loginEl, data.login);
  setFieldText(blogEl, data.blog);
  setFieldText(locationEl, data.location);
  setFieldText(emailEl, data.email);
  setFieldText(followersEl, data.followers);
  setFieldText(followingEl, data.following);

  card.classList.remove('d-none');
}

function fetchUser(username) {
  const url = 'https://api.github.com/users/' + encodeURIComponent(username);
  console.log('Fetching', url);
  fetch(url, { headers: { 'Accept': 'application/vnd.github.v3+json' } })
    .then(response => {
      console.log('HTTP', response.status, response.statusText);
      if (!response.ok) {
        return response.text().then(text => Promise.reject('HTTP ' + response.status + ' — ' + text));
      }
      return response.json();
    })
    .then(data => {
      hideError();
      populate(data);
    })
    .catch(err => {
      showError(String(err));
    });
}

goBtn.addEventListener('click', () => {
  const u = usernameInput.value.trim();
  if (!u) {
    showError('Введіть логін');
    return;
  }
  hideError();
  fetchUser(u);
});

usernameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') goBtn.click();
});
