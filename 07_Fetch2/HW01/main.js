document.addEventListener('DOMContentLoaded', () => {
    fetchDogBreeds();

});

async function fetchDogBreeds() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    const breedsList = document.getElementById('breedsList');




    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error(`HTTP error ${resp.status}`);
        }
        const data = await resp.json();
        const breedsObj = data.message;


        for (const [breed, subBreeds] of Object.entries(breedsObj)) {
            const li = document.createElement('li');
            li.className = 'list-group-item';

            if (Array.isArray(subBreeds) && subBreeds.length > 0) {

                const title = document.createElement('div');
                title.textContent = breed;
                li.appendChild(title);

                const subUl = document.createElement('ul');
                subUl.className = 'mb-0 mt-2';
                subBreeds.forEach(sub => {
                    const subLi = document.createElement('li');

                    subLi.textContent = `${sub} ${breed}`;
                    subUl.appendChild(subLi);
                });

                li.appendChild(subUl);
            } else {
                li.textContent = breed;
            }

            breedsList.appendChild(li);
        }

    } catch (err) {

        console.error('Помилка під час завантаження списку порід собак:', err);
    }
}



