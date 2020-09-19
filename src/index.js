import {
  initialPageLoad
} from './initial-load.js';

import {
  generateMenuContent
} from './menuTab.js';

import {
  generateContactContent
}
from './contactTab.js';

initialPageLoad();
generateMenuContent();


const tabs = document.querySelectorAll('.tab');
tabs.forEach(el => {
  el.addEventListener('click', tabSwitcher)
})

function tabSwitcher(e) {
  let elementId = e.target.id
  if (elementId == 'tab1') {
    generateMenuContent();
    const tab2 = document.querySelector('#tab2')
    tab2.classList.toggle('open-tab');
  } else {
    generateContactContent();
    const tab1 = document.querySelector('#tab1')
    tab1.classList.toggle('open-tab');
  }

}