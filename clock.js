var timeRead = document.getElementById("timeRead")
var colorCode = document.getElementById("colorCode")
var timeText = document.getElementById("timeText")
var hexcode = document.getElementById("hexcode")
var digital = document.getElementById("digital")
var colorCode = document.getElementById("colorCode")
var timeMessage = document.getElementById("timeMessage")

setInterval(function() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (hour < 10) {hour = "0" + hour}
  if (minutes < 10) {minutes = "0" + minutes}
  if (seconds < 10) {seconds = "0" + seconds}
  timeRead.innerHTML = `${hour}:${minutes}:${seconds}`
  colorCode.style.backgroundColor = `#${hour}${minutes}${seconds}`
}, 1000);

setInterval(function() {
  var date = new Date();
  var hour = date.getHours();
  if (hour < 12) {
      timeText.innerHTML = "Good Morning!";
      timeMessage.style.backgroundImage = "url('images/morning-face.gif')"
      timeMessage.style.backgroundSize = "cover"
  } else if (hour >= 12 && hour < 18) {
      timeText.innerHTML = "Good Afternoon!";
      timeMessage.style.backgroundImage = "url('images/afternoon-face.gif')"
      timeMessage.style.backgroundSize = "cover"
  } else {
      timeText.innerHTML = "Good Evening!";
      timeMessage.style.backgroundImage = "url('images/evening-face.gif')"
      timeMessage.style.backgroundSize = "cover"
  }
}, 1000);

hexcode.addEventListener("click", function() {
  hexcode.disabled = true;
  digital.disabled = false;
  colorCode.style.visibility = "visible"
  timeMessage.style.visibility = "hidden"
})

digital.addEventListener("click", function() {
  hexcode.disabled = false;
  digital.disabled = true;
  colorCode.style.visibility = "hidden"
  timeMessage.style.visibility = "visible"
})
