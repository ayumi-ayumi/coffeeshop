function initMap() {
  const center = { lat:52.50811483534891, lng: 13.426003939561651};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: center,
  });
  
  setMarkers(map);
}

const coffeeshops = [
  ['mitte', 52.521019850760695, 13.409969443310189],
  ['kreuzberg', 52.49548238378242, 13.415008404261387],
  ['friedrichshain', 52.51715109714451, 13.454462509580308],
];

function setMarkers(map) {
  for (let i = 0; i < coffeeshops.length; i++) {
    const coffeeshop = coffeeshops[i];
    new google.maps.Marker({
      position: {lat: coffeeshop[1], lng: coffeeshop[2]},
      map: map,
    })
  }
}

//Countdown opening days
function countdown () {
  setInterval(() => {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds'); 

    
    const today = new Date().getTime();
    const openingDay = new Date('April 4, 2022 16:06:00').getTime();
    let diff = openingDay - today;
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

  }, 1000);

}
countdown();

//Humberger menu
const nav = document.querySelector('#navArea');
const btn = document.querySelector('.toggle-btn');
btn.onclick = () => {
  nav.classList.toggle('open');
};

const ul = document.querySelector('.ul');
// console.log(a);
ul.onclick = () => {
  nav.classList.remove('open');
}


//Location slide
// let i = 0; //Start point
// let locationCard = [];
// let time = 2000;

// locationCard[0] = document.querySelector('.mitte');
// locationCard[1] = document.querySelector('.kreuzberg');
// locationCard[2] = document.querySelector('.friedrichshain');
// console.log(locationCard[2]);

// function changeCard () {
//   if (i < locationCard.length - 1) {
//     console.log(locationCard[i]);
//     i++;
//   } else {
//     i = 0;
//   }
//   locationCard[i].style.display = 'block';
//   document.querySelector('.location-container').append(locationCard[i]);
//   setTimeout('changeCard()', time);
// }