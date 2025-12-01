async function fetchDog(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const result = await response.json();

    const img = document.getElementById('image');
    img.src = result.message;
    
    
}