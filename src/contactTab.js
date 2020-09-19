function generateContactContent() {
  const tab2 = document.querySelector('#tab2')
  tab2.classList.toggle('open-tab');

  const dailyOffer = document.createElement('div');
  dailyOffer.textContent = 'Contact us at snjezana-restoran@gmail.com'
  const tabContent = document.querySelector('#tab-content');
  tabContent.innerHTML = '';
  tabContent.appendChild(dailyOffer);
}

export {
  generateContactContent
}