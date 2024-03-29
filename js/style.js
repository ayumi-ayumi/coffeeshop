//Countdown opening days (Repeating 7 days)
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

//Humberger menu
// const nav = document.querySelector('#navArea');
// const btn = document.querySelector('.toggle-btn');
// btn.onclick = () => {
//   nav.classList.toggle('open');
// };

// const ul = document.querySelector('.ul');
// ul.onclick = () => {
//   nav.classList.remove('open');
// }

// Review using randomuser & adviceslip quotation
const randomuser = async () => {
  try {
    let response = await fetch('https://randomuser.me/api/?results=10')
    let users = await response.json();
    let userList = users.results;

    let adviceslip = await fetch('https://api.adviceslip.com/advice')
    let quotes = await adviceslip.json();
    let quote = quotes.slip.advice

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
  
      q.innerHTML = quote;
      pName.innerHTML = userList[i].name.first;
  
      rightDiv.append(img, divStar);  
      leftDiv.append(q, pName);

      div.append(rightDiv, leftDiv);  
      reviewCard.appendChild(div);
    }

  } catch(error){
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
          if (email.value === emailaddress && pwd.value === password) {
            alert('Welcome Back!');
          } else {
            alert('Check your email or password');
          }
      });
    } catch(error) {
    }
    };
    example();

