
const searchBtn = document.getElementById('searchBtn');
const keywordInput = document.getElementById('keyword');
const adviceList = document.getElementById('adviceList');
const errorEl = document.getElementById('error');





function fetchAdviceByKeyword(keyword) {

    
    if (!keyword) {
        errorEl.textContent = 'Введіть, будь ласка, слово для пошуку.';
        errorEl.style.display = 'block';
        return;
    }

    const url = 'https://api.adviceslip.com/advice/search/' + keyword;


    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (Array.isArray(data.slips) && data.slips.length > 0) 
                {
                data.slips.forEach(slip => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item';
                    li.textContent = slip.advice;
                    adviceList.appendChild(li);
                });
                return;
            }


            errorEl.textContent = 'Поради не знайдені для запиту: ' + keyword;
            errorEl.style.display = 'block';
        })
        .catch(err => {



            errorEl.textContent = 'Сталася помилка: ' + (err && err.message ? err.message : String(err));
            errorEl.style.display = 'block';
        });
}

