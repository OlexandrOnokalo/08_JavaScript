document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addForm');
  const nameInput = document.getElementById('name');
  const textInput = document.getElementById('text');
  const messagesEl = document.getElementById('messages');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim() || 'Anonymous';
    const text = textInput.value.trim();
    if (!text) {

      alert('Будь ласка, введіть текст повідомлення.');
      return;
    }

    const card = createMessageCard(name, text, new Date());

    messagesEl.insertBefore(card, messagesEl.firstChild);


    nameInput.value = '';
    textInput.value = '';
    textInput.blur();
  });

  function createMessageCard(name, text, date) {

    const timeStr = formatDate(date);
    const wrapper = document.createElement('div');
    wrapper.className = 'card msg-box';

    const body = document.createElement('div');
    body.className = 'card-body p-2';

    const header = document.createElement('div');
    header.className = 'd-flex justify-content-between align-items-start mb-2';

    const nameEl = document.createElement('div');
    nameEl.className = 'msg-header';
    nameEl.textContent = name;

    const timeEl = document.createElement('div');
    timeEl.className = 'msg-time';
    timeEl.textContent = timeStr;

    header.appendChild(nameEl);
    header.appendChild(timeEl);

    const textEl = document.createElement('div');
    textEl.className = 'card-text';
    textEl.textContent = text; 

    body.appendChild(header);
    body.appendChild(textEl);
    wrapper.appendChild(body);
    return wrapper;
  }

  function pad(n) { return n < 10 ? '0' + n : n; }

  function formatDate(d) {

    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ` +
           `${pad(d.getDate())}.${pad(d.getMonth()+1)}.${d.getFullYear()}`;
  }
});
