// Google map API
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

// coffee menu API
const coffeeApi = async () => {
  try {
    let response = await fetch('https://api.sampleapis.com/coffee/hot')
    let coffee = await response.json()
    console.log(coffee)
    console.log(coffee[1].title);

    for (let i = 0; i < 10; i++) {
      let coffeemenu = document.querySelector('.coffeemenu');
  
      // Create tabs and class 
      let divParent = document.createElement('div');
      divParent.classList.add('divParent');
      
      // div: title
      let divTitle = document.createElement('div');
      divTitle.classList.add('divTitle');
      divTitle.innerHTML = coffee[i].title;
      
      // div: hr
      let divLine = document.createElement('div');
      divLine.classList.add('divLine');
      let hr = document.createElement('hr');
      divLine.appendChild(hr);
      
      // div: price(2-6€)
      let divPrice = document.createElement('div');
      let random = (Math.random() * 4) +2;
      let price =  random.toFixed(2);
      divPrice.innerHTML =  price + '€';
  
      // Append
      divParent.append(divTitle, divLine, divPrice);
      coffeemenu.appendChild(divParent);

    }
    







  } catch(error){
    console.log(error)
  }
}
coffeeApi();