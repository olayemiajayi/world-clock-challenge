function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesLocal = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesLocal.format("MMMM,Do YYYY");
  losAngelesTime.innerHTML = losAngelesLocal.format("h:mm:ss A");

  //paris
  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  let parisLocal = moment().tz("Europe/Paris");
  parisDate.innerHTML = parisLocal.format("MMMM,Do YYYY");
  parisTime.innerHTML = parisLocal.format("h:mm:ss A");
}
function updateCountry(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#country");
citiesSelectElement.addEventListener("change", updateCountry);
