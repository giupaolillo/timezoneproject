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
  let date = document.querySelector("#brasilia .date");
  date.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("dddd, MMMM Do YYYY");

  let time = document.querySelector("#brasilia .time");
  time.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("hh:mm:ss:SS [<span>]a[</span>]");

  //11:29:01:00 <span class="amPM">am</span>
}

updateTime();
