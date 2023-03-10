function updateTime() {
  let dateSaoPauloElement = document.querySelector("#sao_paulo .date");

  if (dateSaoPauloElement) {
    let currentDateSaoPaulo = moment()
      .tz("America/Sao_Paulo")
      .format("dddd, MMMM Do YYYY");

    let currentTimeSaoPaulo = moment()
      .tz("America/Sao_Paulo")
      .format("h:mm:ss [<span>]a[</span>]");

    let timeSaoPauloElement = document.querySelector("#sao_paulo .time");

    dateSaoPauloElement.innerHTML = currentDateSaoPaulo;
    timeSaoPauloElement.innerHTML = currentTimeSaoPaulo;
  }

  let dateJohannesburgElement = document.querySelector("#johannesburg .date");

  if (dateJohannesburgElement) {
    let currentDateJohannesburg = moment()
      .tz("Africa/Johannesburg")
      .format("dddd, MMMM Do YYYY");

    let timeJohannesburgElement = document.querySelector("#johannesburg .time");
    let currentTimeJohannesburg = moment()
      .tz("Africa/Johannesburg")
      .format("h:mm:ss [<span>]a[</span>]");

    timeJohannesburgElement.innerHTML = currentTimeJohannesburg;
    dateJohannesburgElement.innerHTML = currentDateJohannesburg;
  }

  let dateShanghaiElement = document.querySelector("#shanghai .date");
  if (dateShanghaiElement) {
    let currentDateShanghai = moment()
      .tz("Asia/Shanghai")
      .format("dddd, MMMM Do YYYY");

    let timeShanghaiElement = document.querySelector("#shanghai .time");
    let currentTimeShanghai = moment()
      .tz("Asia/Shanghai")
      .format("h:mm:ss [<span>]a[</span>]");

    dateShanghaiElement.innerHTML = currentDateShanghai;
    timeShanghaiElement.innerHTML = currentTimeShanghai;
  }
}

function newTimeZoneEntry(event) {
  setInterval(function () {
    if (event.target.value.length > 0) {
      let timeZone = event.target.value;
      if (timeZone === "current") {
        timeZone = moment.tz.guess();
      }
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
            .format("h:mm:ss")} <span>${moment()
        .tz(timeZone)
        .format("a")}</span></div>
        </div>
        <a href="/">Back to Main</a>`;
    }
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let selectElement = document.querySelector("#countries");
selectElement.addEventListener("change", newTimeZoneEntry);
