const elements = document.getElementById('elements');

const addFish = document.getElementById('add-fish');
const addApple = document.getElementById('add-apple');
const addEggs = document.getElementById('add-eggs');

const fish = document.getElementById('fish');

addFish.onclick = () => {

    elements.innerHTML += ` <li id="fish">
    <div><img src="./icons_hw_module_3/Food_C205-128.png" alt="">
    <a href="https://www.taste.com.au/recipes/easy-fish-pockets-recipe/0pdz2dvc">Fish</a></div>
</li>`;
}
addApple.onclick = () => {

    elements.innerHTML += `             <li>
    <div><img src="./icons_hw_module_3/Food_C240-128.png" alt="">
    <a href="https://www.taste.com.au/recipes/basic-cinnamon-apple-muffins/5bc800c9-a884-485a-b07d-5ecaca9c04ac">Apple</a></div>
</li>`;
}
addEggs.onclick = () => {

    elements.innerHTML += `             <li>
                <div><img src="./icons_hw_module_3/Food_C203-128.png" alt="">
                <a href="https://www.taste.com.au/recipes/easter-egg-surprise-cake-recipe/aa24po5d">Eggs</a></div>
            </li>`;
}