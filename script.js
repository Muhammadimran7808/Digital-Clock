let a = "AM"
setInterval(fun = () => {
  const date = new Date()
  let hours = date.getHours()
  if (hours > 12) {
    hours = hours - 12;
    a = "PM"
  }
  let min = date.getMinutes()
  let sec = date.getSeconds()
  clock.innerHTML = (hours + " : " + min + " : " + sec + "    " + a)
}, 1000)

let clock = document.getElementsByClassName("time")[0]