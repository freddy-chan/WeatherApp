const apiKey = 'a2368da94b7405d17fd091ff0d8fb834';
const city = 'Yangon';

async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    document.getElementById('location').textContent = `Location: ${data.name}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

fetchWeather();
