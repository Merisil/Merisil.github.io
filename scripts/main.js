const links = [
  {
    name: 'Главная',
    link: './index.html'
  },
  {
    name: 'Блог',
    link: './blog.html'
  },
  {
    name: 'Доклады и проекты',
    link: './presentations_projects.html'
  },
  {
    name: 'Резюме',
    link: './resume.html'
  },
]

/* const contactsLinks = [
  {
    name: 'Гитхаб',
    link: 'https://github.com/Merisil'
  },
  {
    name: 'Телеграмм',
    link: 'https://t.me/merisil14'
  },
  {
    name: 'ВК',
    link: 'https://vk.com/mariavasiljewa'
  },
]; */


function getElement(name, link) {
  let linkContainer = document.createElement('li');
  let linkElement = document.createElement('a');
  linkElement.text = name;
  linkElement.setAttribute('href', link)

  // li.innerHTML = `<a href="./blog.html">Блог</a>`;
  linkContainer.append(linkElement)

  return linkContainer;
}

function renderLinks(links, selector) {
  let container = document.querySelector(selector);

  // for (let i = 0; i < links.length; i++) {
  //   const element = renderElement(links[i].name, links[i].link);
  //   navbar.append(element);
  // }

  links.forEach(link => {
    const element = getElement(link.name, link.link);
    container.append(element);
  });
  
}

renderLinks(links, 'ul.navigation');
// renderLinks(contactsLinks, 'ol.navigation');

