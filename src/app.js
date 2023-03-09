function updateTime() {
  let dateSaoPauloElement = document.querySelector("#sao_paulo .date");

  if (dateSaoPauloElement) {
    let currentDateSaoPaulo = moment()
      .tz("America/Sao_Paulo")
      .format("dddd, MMMM Do YYYY");

    let currentTimeSaoPaulo = moment()
      .tz("America/Sao_Paulo")
      .format("hh:mm:ss [<span>]a[</span>]");

    let timeSaoPauloElement = document.querySelector("#sao_paulo .time");

    dateSaoPauloElement.innerHTML = currentDateSaoPaulo;
    timeSaoPauloElement.innerHTML = currentTimeSaoPaulo;
  }

  let dateNYElement = document.querySelector("#new-york .date");

  if (dateNYElement) {
    let currentDateNewYork = moment()
      .tz("America/New_York")
      .format("dddd, MMMM Do YYYY");

    let timeNewYorkElement = document.querySelector("#new-york .time");
    let currentTimeNewYork = moment()
      .tz("America/New_York")
      .format("hh:mm:ss [<span>]a[</span>]");

    timeNewYorkElement.innerHTML = currentTimeNewYork;
    dateNYElement.innerHTML = currentDateNewYork;
  }

  let dateShanghaiElement = document.querySelector("#shanghai .date");
  if (dateShanghaiElement) {
    let currentDateShanghai = moment()
      .tz("Asia/Shanghai")
      .format("dddd, MMMM Do YYYY");

    let timeShanghaiElement = document.querySelector("#shanghai .time");
    let currentTimeShanghai = moment()
      .tz("Asia/Shanghai")
      .format("hh:mm:ss [<span>]a[</span>]");

    dateShanghaiElement.innerHTML = currentDateShanghai;
    timeShanghaiElement.innerHTML = currentTimeShanghai;
  }
}

function newTimeZoneEntry(event) {
  setInterval(function () {
    if (event.target.value.length > 0) {
      let timeZone = event.target.value;
      let formattedTimeZone = timeZone
        .replace("_", " ")
        .replace("Sao", "São")
        .split("/")[1];
      let cityElement = document.querySelector("#city");
      cityElement.innerHTML = `<div class="cities">
          <div class="data">
            <h2>${formattedTimeZone}</h2>
            <i class="fa-regular fa-calendar calendar"></i>
            <span class="date">${moment()
              .tz(timeZone)
              .format("dddd, MMMM Do YYYY")}</span>
          </div>
          <div class="time">${moment()
            .tz(timeZone)
            .format("hh:mm:ss")} <span>${moment()
        .tz(timeZone)
        .format("a")}</span></div>
        </div>`;
    }
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let selectElement = document.querySelector("#countries");
selectElement.addEventListener("change", newTimeZoneEntry);
