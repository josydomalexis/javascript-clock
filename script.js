const clock = document.querySelector("#clock");

window.setInterval(() => {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let isMorning = true;
  let AMPM;

  if (hour > 12) {
    hour = hour - 12;
    isMorning = false;
  }

  if (isMorning) {
    AMPM = "AM";
    clock.classList.add("bg-primary");
  } else {
    AMPM = "PM";
    clock.classList.add("bg-warning");
  }

  clock.innerHTML =
    String(hour).padStart(2, "0") +
    " : " +
    String(min).padStart(2, "0") +
    " : " +
    String(sec).padStart(2, "0") +
    " " +
    AMPM;
}, 1000);
