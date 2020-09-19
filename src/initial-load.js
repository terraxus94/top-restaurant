function initialPageLoad() {
  const content = document.querySelector('#content');
  const image = document.createElement('img');
  image.setAttribute('src', 'https://www.bevanda.hr/wp-content/uploads/2019/08/Restaurant-1920x670.jpg');
  image.setAttribute('id', 'banner-image');

  const title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.textContent = 'Restaurant Guru';

  const copy = document.createElement('p');
  copy.setAttribute('class', 'copy');
  copy.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const tabs = document.createElement('div');
  tabs.setAttribute('id', 'tabs');

  const tabsNav = document.createElement('div');
  tabsNav.setAttribute('id', 'tabs-nav');
  const tabContent = document.createElement('div');
  tabContent.setAttribute('id', 'tab-content')


  const tab1 = document.createElement('div');
  tab1.setAttribute('id', 'tab1');
  tab1.setAttribute('class', 'tab');
  tab1.textContent = 'Menu'
  const tab2 = document.createElement('div');
  tab2.setAttribute('id', 'tab2');
  tab2.setAttribute('class', 'tab');
  tab2.textContent = 'Contact Us'

  tabs.appendChild(tabsNav)
  tabs.appendChild(tabContent)
  tabsNav.appendChild(tab1);
  tabsNav.appendChild(tab2);



  content.appendChild(image);
  content.appendChild(title);
  content.appendChild(copy);
  content.appendChild(tabs);
}

export {
  initialPageLoad
};