function generateMenuContent() {
  const tab1 = document.querySelector('#tab1')
  tab1.classList.toggle('open-tab');


  const dailyOffer = document.createElement('div');
  dailyOffer.innerHTML = `
  <p>Today's special menu consists of:</p>
  <ul>
    <li>Fish</li>
    <li>Meat</li>
    <li>Potatoes</li>
    <li>Milk</li>
    <li>Cardboard</li>
    <li>The moon</li>
  </ul>`

  const tabContent = document.querySelector('#tab-content');
  tabContent.innerHTML = '';
  tabContent.appendChild(dailyOffer);
}

export {
  generateMenuContent
}