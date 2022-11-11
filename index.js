function currtime() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var session = "AM";
  if (hr === 0) {
    hr = 12;
  }
  if (hr > 12) {
    hr = hr - 12;
    session = "PM";
  }
  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  var time = `${hr}:${min}:${sec}:${session}`;
  document.getElementById("digitalclock").innerText = time;
  document.getElementById("digitalclock").textContent = time;
  setTimeout(currtime, 1000);
}
currtime();
