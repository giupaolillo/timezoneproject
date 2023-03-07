/* function alertTime(event) {
  if (event.target.value.length > 0) {
    alert(
      `It is ${moment()
        .tz(event.target.value)
        .format("dddd, MMMM D, YYYY hh:mm A")} in ${event.target.value}`
    );
  }
}
let selectElement = document.querySelector("#countries");
selectElement.addEventListener("change", alertTime); */

function updateTime() {
  let dateSaoPauloElement = document.querySelector("#sao_paulo .date");
  let currentDateSaoPaulo = moment()
    .tz("America/Sao_Paulo")
    .format("dddd, MMMM Do YYYY");

  let currentTimeSaoPaulo = moment()
    .tz("America/Sao_Paulo")
    .format("hh:mm:ss [<span>]a[</span>]");

  let timeSaoPauloElement = document.querySelector("#sao_paulo .time");

  dateSaoPauloElement.innerHTML = currentDateSaoPaulo;
  timeSaoPauloElement.innerHTML = currentTimeSaoPaulo;

  let dateNYElement = document.querySelector("#new-york .date");
  let currentDateNewYork = moment()
    .tz("America/New_York")
    .format("dddd, MMMM Do YYYY");

  let timeNewYorkElement = document.querySelector("#new-york .time");
  let currentTimeNewYork = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<span>]a[</span>]");

  timeNewYorkElement.innerHTML = currentTimeNewYork;
  dateNYElement.innerHTML = currentDateNewYork;

  let dateShanghaiElement = document.querySelector("#shanghai .date");
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

updateTime();
setInterval(updateTime, 1000);
