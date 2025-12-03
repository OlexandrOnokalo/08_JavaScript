document.addEventListener("DOMContentLoaded", () => {

    const del1 = document.getElementById('del1');
    del1.addEventListener("click", pressDel1);
    const del2 = document.getElementById('del2');
    del2.addEventListener("click", pressDel2);
    const del3 = document.getElementById('del3');
    del3.addEventListener("click", pressDel3);  
});

function pressDel1() {
    const news1 = document.getElementById('news1');
    news1.remove();
}
function pressDel2() {
    const news2 = document.getElementById('news2');
    news2.remove();
}
function pressDel3() {
    const news3 = document.getElementById('news3');
    news3.remove();
}

