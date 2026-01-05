
const API_KEY = '1b7d9ba910833ded6f779c7e66a49341'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';


let currentWeatherData = null;
let forecastData = null;
let currentCity = '';
let currentTab = 'today'; 


document.addEventListener("DOMContentLoaded", () => {

    navigator.geolocation.getCurrentPosition(succesPosition, errorPosition);


    document.getElementById('search-form').addEventListener('submit', searchHandle);


    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleTabSwitch);
    });
});


function succesPosition(position) {
    const { latitude, longitude } = position.coords;
    fetchAllWeatherData(null, latitude, longitude);
}

function errorPosition() {
    const url = "http://ip-api.com/json";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data;
            fetchAllWeatherData(null, lat, lon);
        })
        .catch(err => {
            console.error(err);
            
            fetchAllWeatherData('Kyiv'); 
        });
}


async function fetchAllWeatherData(city = null, lat = null, lon = null) {
    let weatherQuery, forecastQuery;

    if (city) {
        weatherQuery = `q=${city}`;
    } else {
        weatherQuery = `lat=${lat}&lon=${lon}`;
    }

    try {
        
        const weatherRes = await fetch(`${BASE_URL}/weather?${weatherQuery}&units=metric&appid=${API_KEY}`);
        if (!weatherRes.ok) {
            renderError404();
            return;
        }
        currentWeatherData = await weatherRes.json();
        
        
        const { coord } = currentWeatherData;
        
        
        const forecastRes = await fetch(`${BASE_URL}/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${API_KEY}`);
        forecastData = await forecastRes.json();


        currentCity = currentWeatherData.name;
        document.getElementById('city-name-header').innerText = `${currentWeatherData.name}, ${currentWeatherData.sys.country}`;
        
        
        renderApp();

    } catch (error) {
        console.error(error);
        renderError404();
    }
}

function searchHandle(event) {
    event.preventDefault();
    const form = event.target;
    const search = form["search"].value.trim();
    if (search.length > 0) {
        fetchAllWeatherData(search);
    }
    form.reset();
}

function handleTabSwitch(event) {
    event.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');

    currentTab = event.target.dataset.tab;
    renderApp();
}



function renderApp() {
    const container = document.getElementById("content-row");
    container.innerHTML = "";

    if (currentTab === 'today') {
        renderTodayTab(container);
    } else {
        renderFiveDayTab(container);
    }
}

function renderError404() {
    document.getElementById('city-name-header').innerText = "Not Found";
    const container = document.getElementById("content-row");
    container.innerHTML = `
        <div class="col-12 error-container">
            <h3>404</h3>
            <p>Location could not be found.<br>Please enter a different location.</p>
        </div>
    `;
}


function generateHourlyCardsHtml(list) {
    let html = `<div class="row text-center">`;
    
    list.forEach(item => {
        html += `
            <div class="col-4 col-md-2 mb-3">
                <div class="p-2">
                    <h5 class="mb-1">${formatTime(item.dt)}</h5>
                    <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="icon" style="width: 40px;">
                    <p class="small text-capitalize mb-1" style="height: 40px; overflow: hidden;">${item.weather[0].description}</p>
                    <h4 class="mb-1">${Math.round(item.main.temp)}°</h4>
                    <p class="small text-muted mb-1">Feel: ${Math.round(item.main.feels_like)}°</p>
                    <p class="small mb-0">${Math.round(item.wind.speed * 3.6)} km/h<br>${getWindDirection(item.wind.deg)}</p>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    return html;
}


function renderTodayTab(container) {
    if (!currentWeatherData) return;

    
    const currentBlock = document.createElement('div');
    currentBlock.className = "card border-primary mb-3";
    
    const sunrise = new Date(currentWeatherData.sys.sunrise * 1000);
    const sunset = new Date(currentWeatherData.sys.sunset * 1000);
    const durationMs = sunset - sunrise;
    const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
    const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    currentBlock.innerHTML = `
        <div class="card-header">CURRENT WEATHER</div>
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-md-4 text-center">
                    <img src="http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png" alt="icon">
                    <p class="mb-0 text-capitalize">${currentWeatherData.weather[0].description}</p>
                </div>
                <div class="col-md-4 text-center">
                    <h1 class="display-4">${Math.round(currentWeatherData.main.temp)}°C</h1>
                    <p>Real Feel ${Math.round(currentWeatherData.main.feels_like)}°</p>
                </div>
                <div class="col-md-4">
                    <p class="mb-1">Sunrise: ${formatTime(currentWeatherData.sys.sunrise)}</p>
                    <p class="mb-1">Sunset: ${formatTime(currentWeatherData.sys.sunset)}</p>
                    <p class="mb-0">Duration: ${durationHours}hr ${durationMinutes}min</p>
                </div>
            </div>
        </div>
    `;
    container.appendChild(currentBlock);


    const hourlyBlock = document.createElement('div');
    hourlyBlock.className = "card border-secondary mb-3";
    

    const hourlyList = forecastData.list.slice(0, 6);
    
    hourlyBlock.innerHTML = `
        <div class="card-header">HOURLY</div>
        <div class="card-body">
            ${generateHourlyCardsHtml(hourlyList)}
        </div>
    `;
    container.appendChild(hourlyBlock);
    

}


function renderFiveDayTab(container) {
    if (!forecastData) return;

    const dailyMap = new Map();
    forecastData.list.forEach(item => {
        const dateKey = item.dt_txt.split(' ')[0];
        if (!dailyMap.has(dateKey)) dailyMap.set(dateKey, []);
        dailyMap.get(dateKey).push(item);
    });

    const daysKeys = Array.from(dailyMap.keys()).slice(0, 5);
    const daysRow = document.createElement('div');
    daysRow.className = "row mb-4";
    let selectedDate = daysKeys[0];


    const renderSelectedDayDetails = (dateKey) => {
        const detailsContainer = document.getElementById('five-day-details');
        detailsContainer.innerHTML = '';
        
        const dayItems = dailyMap.get(dateKey);
        const card = document.createElement('div');
        card.className = "card border-secondary";
        
        card.innerHTML = `
            <div class="card-header">HOURLY FOR ${dateKey}</div>
            <div class="card-body">
                ${generateHourlyCardsHtml(dayItems)} 
            </div>
        `; 
        detailsContainer.appendChild(card);
    };


    daysKeys.forEach((key, index) => {
        const dayItems = dailyMap.get(key);
        const midDayItem = dayItems[Math.floor(dayItems.length / 2)];
        const dateObj = new Date(midDayItem.dt * 1000);
        const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
        const monthDay = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        const col = document.createElement('div');
        col.className = "col-md-2 mb-2";

        col.innerHTML = `
            <div class="card text-center day-card cursor-pointer h-100 ${index === 0 ? 'active' : ''}" data-date="${key}">
                <div class="card-body p-2">
                    <h6 class="card-title text-uppercase mb-0">${dayName}</h6>
                    <small class="text-muted">${monthDay}</small>
                    <div class="my-2">
                         <img src="http://openweathermap.org/img/wn/${midDayItem.weather[0].icon}.png" alt="icon">
                    </div>
                    <h4>${Math.round(midDayItem.main.temp)}°C</h4>
                    <small>${midDayItem.weather[0].main}</small>
                </div>
            </div>
        `;
        
        col.querySelector('.day-card').addEventListener('click', (e) => {
            document.querySelectorAll('.day-card').forEach(c => c.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderSelectedDayDetails(key);
        });

        daysRow.appendChild(col);
    });

    container.appendChild(daysRow);
    const detailsDiv = document.createElement('div');
    detailsDiv.id = "five-day-details";
    container.appendChild(detailsDiv);
    renderSelectedDayDetails(selectedDate);
}


function formatTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function getWindDirection(deg) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
    return directions[index];
}