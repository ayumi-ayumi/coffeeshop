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

//Countdown opening days (Repeatind 7 days)
let diff = 604800000;
countdown = () =>  {
  
  // const today = new Date().getTime();
  // const openingDay = new Date('April 7, 2022 13:42:00').getTime();
  // console.log(openingDay);
  // console.log(today);
  // let diff = (openingDay - today);
  // if (diff < 0) {
    //   diff = diff + 604800000;
    // }

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
      divPrice.classList.add('divPrice');
      let random = (Math.random() * 4) +2;
      let price =  random.toFixed(2);
      divPrice.innerHTML =  price + '€';
  
      // Append
      divParent.append(divTitle, divLine, divPrice);
      coffeemenu.appendChild(divParent);
    }
  } catch(error){
      // console.log(error);
  }
}
coffeeApi();

// Review using randomuser & Friends quotation
const randomuser = async () => {
  try {
    let response = await fetch('https://randomuser.me/api/?results=10')
    let users = await response.json();
    let userList = users.results;

    let friends = await fetch('https://friends-quotes-api.herokuapp.com/quotes')
    let quotes = await friends.json();

    for (let i = 0; i < 6; i++) {

      let reviewCard = document.querySelector('.review-card');
      
      let div = document.createElement('div');
      div.classList.add('onereview');

      let rightDiv = document.createElement('div');
      rightDiv.classList.add('rightDiv');
      let img = document.createElement('img');
      let rate = document.createElement('div');
      
      let leftDiv = document.createElement('div');
      leftDiv.classList.add('leftDiv');
      let q = document.createElement('q');
      q.classList.add('quote');
      let pName = document.createElement('p');
      
      let image = userList[i].picture.large;
      img.setAttribute('src', image);
      
      let rateNum = Math.floor((Math.random() * 6) + 0);
      // rate.innerHTML = rateNum;
      
      let divStar = document.createElement('div');
      let star1= document.createElement('span');
      star1.classList.add("fa", "fa-star", "star1");
      let star2= document.createElement('span');
      star2.classList.add("fa", "fa-star", "star2");
      let star3= document.createElement('span');
      star3.classList.add("fa", "fa-star", "star3");
      let star4= document.createElement('span');
      star4.classList.add("fa", "fa-star", "star4");
      let star5= document.createElement('span');
      star5.classList.add("fa", "fa-star", "star5");
      divStar.append(star1, star2, star3, star4, star5);
  
      for(let i = 0; i <= rateNum; i++) {
        switch (rateNum) {
          case 5:
            star1.classList.add('checked');
            star2.classList.add('checked');
            star3.classList.add('checked');
            star4.classList.add('checked');
            star5.classList.add('checked');
          break;
          case 4:
            star1.classList.add('checked');
            star2.classList.add('checked');
            star3.classList.add('checked');
            star4.classList.add('checked');
          break;
          case 3:
            star1.classList.add('checked');
            star2.classList.add('checked');
            star3.classList.add('checked');
          break;
          case 2:
            star1.classList.add('checked');
            star2.classList.add('checked');
          break;
          case 1:
            star1.classList.add('checked');
          break;
        }
      }
  
      q.innerHTML = quotes[i].quote;
      pName.innerHTML = userList[i].name.first;
  
      rightDiv.append(img, divStar);  
      leftDiv.append(q, pName);

      div.append(rightDiv, leftDiv);  
      reviewCard.appendChild(div);
    }

  } catch(error){
      // console.log(error);
  }
  }
  randomuser();

  // Example email and password, Login
  const example = async () => {
    try {
      let response = await fetch('https://randomuser.me/api/?results=10')
      let users = await response.json();
      let userList = users.results;

      let emailex = document.querySelector('#emailex');
      let pwdex = document.querySelector('#pwdex');

      let emailaddress = userList[1].email;
      let password = userList[1].login.password;
      emailex.innerHTML = emailaddress;
      pwdex.innerHTML = password;

      let email = document.querySelector('#email');
      let pwd = document.querySelector('#pwd');
      let button = document.querySelector('#button');
      
      button.addEventListener('click', ()=>{
        // console.log(email.value);
          if (email.value === emailaddress && pwd.value === password) {
            alert('Welcome Back!');
          } else {
            alert('Check your email or password');
          }
      });
    } catch(error) {
      // console.log(error);
    }
    };
    example();


