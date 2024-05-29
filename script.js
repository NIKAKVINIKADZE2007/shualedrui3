let url =
  'https://api.open-meteo.com/v1/forecast?latitude=37.09024&longitude=95.712891&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m';

fetch(url)
  .then((data) => data.json())
  .then((responsive) => {
    let day_night = document.querySelector('#dayornight');
    document.querySelector('#latitude').textContent = responsive.latitude;
    document.querySelector('#longitude').textContent = responsive.longitude;
    if (responsive.is_day == '0') {
      day_night.src = './assets/Group 1214.svg';
    } else {
      day_night.src = './assets/Ellipse 30.svg';
    }

    let temperature = document.querySelector('#temperature');

    temperature.textContent = responsive.current.temperature_2m + '°';
    temperature.classList.add('temperature');
    let tempicon = document.querySelector('#temperature-icon');
    if (responsive.current.temperature_2m <= -1) {
      tempicon.src = './assets/snow.svg';
    } else if (responsive.current.temperature_2m <= 10) {
      tempicon.src = './assets/Group 1214 (1).svg';
    } else if (responsive.current.temperature_2m <= 30) {
      tempicon.src = 'assets/Union.svg';
    } else {
      tempicon.src = './assets/Group 1232.jpg';
    }
    document.querySelector('#ferenhiet').textContent = Math.round(
      ((responsive.current.temperature_2m + 32) * 9) / 5
    );

    let wind_speed_10 = document.querySelector('#windspeed');
    wind_speed_10.textContent = responsive.current.wind_speed_10m;
  });
