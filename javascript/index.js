function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = document.querySelector(".date");
  let losAngelesTime = document.querySelector(".time");
  let losAngelesLocal = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesLocal.format("MMMM,Do YYYY");
  losAngelesTime.innerHTML = losAngelesLocal.format("h:mm:ss A");

  //paris
  let sydneyElement = document.querySelector("#paris");
  let sydneyDate = document.querySelector(".dated");
  let sydneyTime = document.querySelector(".timed");
  let sydneyLocal = moment().tz("Australia/Sydney");
  sydneyDate.innerHTML = sydneyLocal.format("MMMM,Do YYYY");
  sydneyTime.innerHTML = sydneyLocal.format("h:mm:ss A");
}
setInterval(updateTime, 1000);
