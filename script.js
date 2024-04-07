async function getData() {
  let res = await fetch("https://restcountries.com/v3.1/all");
  let response = await res.json();
  console.log(response);
  let container = document.createElement("div");
  container.className = "className";
  let row = document.createElement("div");
  row.className = "row";

  for (let i = 0; i < response.length; i++) {
    let latlon = response[i].latlng;
    weather_data(...latlon);
    let col = document.createElement("div");
    col.className = "col-md-4 mt-3";
    col.innerHTML = `<div class="card w-100" style="width: 18rem;">
    <img src="${response[i].flags.png}" class="card-img-top flag" alt="...">
    <div class="card-body">
      <h5 class="card-title">${response[i].name.common}</h5>
      <p class="card-text">${response[i].region}</p>
      <p class="card-text">${response[i].population}</p>
      <a href="#" class="btn btn-primary" onclick="weather_data(lat, lon) /">Go somewhere</a>
    </div>
  </div>`;

    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}

async function weather_data(lat, lon) {
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e925549a6741eb7c8987906f4dcaa6c`
  );
  let datares = await data.json();
  console.log("Tempreture : " + datares.main.temp);
  console.log("Humidity : " + datares.main.humidity);
  console.log("Pressure : " + datares.main.pressure);
  console.log("Max Temp : " + datares.main.temp_max);
  console.log("Min Temp : " + datares.main.temp_min);
  alert(`
  Tempreture : ${datares.main.temp}
  Humidity : ${datares.main.humidity}
  Pressure : ${datares.main.pressure}
  Max Temp : ${datares.main.temp_max}
  Min Temp : ${datares.main.temp_min}
  `);
}
getData();
