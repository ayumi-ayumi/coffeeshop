//Countdown opening days (Repeatind 7 days)
let diff = 604800000;
countdown = () =>  {
  const days = document.querySelector('.days');
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds'); 
    
  diff = diff - 1000;
  if (diff < 0) {
    diff = diff + 604800000;
  }
  
  const countdownDays = Math.floor(diff/1000/60/60/24);
  const countdownHours = Math.floor((diff/1000/60/60)%24);
  const countdownMinutes = Math.floor((diff/1000/60)%60);
  const countdownSeconds = Math.floor((diff/1000)%60);
  days.innerHTML = countdownDays;
  hours.innerHTML = countdownHours;
  minutes.innerHTML = countdownMinutes;
  seconds.innerHTML = countdownSeconds;
}
setInterval(countdown, 1000) ;