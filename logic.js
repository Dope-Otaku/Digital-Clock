const timeClock = () => {
  const time = new Date();
  let hours = time.getHours();
  const meridian = hours <= 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const allTime = `${hours}:${minutes}:${seconds}:${meridian}`;
  document.getElementById("clock").textContent = allTime;
  console.log(meridian);
};

timeClock();
setInterval(timeClock, 1000);
