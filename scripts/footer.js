const socialLinks = [
  {
    iconClass: 'bi bi-github',
    link: 'https://github.com/Merisil'
  },
  {
    iconClass: 'bi bi-telegram',
    link: 'https://t.me/merisil14'
  },
  {
    iconClass: 'bi bi-chat',
    link: 'https://vk.com/mariavasiljewa' 
  }
];

function getIconElement(iconClass, link) {
  let linkContainer = document.createElement('li');
  let linkElement = document.createElement('a');
  let iconElement = document.createElement('i');
  
  
  iconClass.split(' ').forEach(className => {
    iconElement.classList.add(className);
  });
  
  linkElement.setAttribute('href', link);
  linkElement.append(iconElement);
  linkContainer.append(linkElement);

  return linkContainer;
}

function renderIconLinks(links, selector) {
  let container = document.querySelector(selector);

  links.forEach(link => {
    const element = getIconElement(link.iconClass, link.link);
    container.append(element);
  });
}


renderIconLinks(socialLinks,  'ol.navigation'); 