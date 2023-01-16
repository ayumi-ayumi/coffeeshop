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
  }
}
coffeeApi();