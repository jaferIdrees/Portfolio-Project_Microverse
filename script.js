const projectsInfo = [
  {
    name: 'Explore meat Recipes of different cuisines',
    description: `On this webapp you can check a list of different meat types with the related ranges of calories and total fat.
    For each meat type you can check the available cuisine types and you can navigate to any available Recipe details.`,
    'featured image': 'images/Meat-explorer2.png',
    technologies: ['React', 'Bootstrap', 'JavaScript', 'Redux'],
    'link to live version': 'https://jafer-meat-explorer.netlify.app/',
    'link to source': 'https://github.com/jaferIdrees/nutrition-explorer',
  },
  {
    name: 'Keeping track of your daily tasks',
    description: 'Interactive To Do List, draggable tasks, optimized for desktop and mobile screen sizes. It reserves data in local storage. Built with HTML, CSS, and JavaScript.',
    'featured image': 'images/Todo.png',
    technologies: ['GitHub', 'JavaScript', 'CSS', 'Webpack'],
    'link to live version': 'https://jaferidrees.github.io/To-Do-List/dist',
    'link to source': 'https://github.com/jaferIdrees/To-Do-List',
  },
  {
    name: 'Keeping track and manage your spending',
    description: 'Its a simple yet powerfull budget app on which you can categrorize your expenses for better management!',
    'featured image': 'images/smart-budget.png',
    technologies: ['Ruby on Rails', 'Bootstrap','css', 'PostgreSQL'],
    'link to live version': 'https://jafer-smart-budget.onrender.com/',
    'link to source': 'https://github.com/jaferIdrees/smart_budget',
  },
  {
    name: 'World wide weather forcasting webapp',
    description: 'Interactive weather application, for daily and 7 days weather forecasting for any city world wide',
    'featured image': 'images/Weather_app.png',
    technologies: ['ReactJS', 'GitHub', 'JavaScript', 'Bootstrap'],
    'link to live version': 'https://630cd93d1ab82d0059f02ac8--singular-peony-e5ed38.netlify.app/',
    'link to source': 'https://github.com/jaferIdrees/weather-app/tree/develop',
  },
  {
    name: 'Math magicians',
    description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations, and read a random math-related quote.',
    'featured image': 'images/calculator.jpeg',
    technologies: ['css', 'React', 'JavaScript'],
    'link to live version': 'https://ornate-fudge-018ce8.netlify.app/calculator',
    'link to source': 'https://github.com/jaferIdrees/math-magicians-react',
  },
  {
    name: 'Book your temporary office anywhere',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured image': 'images/officeverse.png',
    technologies: ['Ruby on Rails', 'ReactJS', 'Redux', 'Tailwind CSS', 'PostgreSQL'],
    'link to live version': 'https://63a1efda1ab4a60007cacf18--tourmaline-tiramisu-88cd75.netlify.app/',
    'link to source': 'https://github.com/jaferIdrees/officeverse-frontend',
  },
];

// Use localStorage to store form data when changed
const contactForm = document.forms[0];

contactForm.addEventListener('change', () => {
  const dataRecord = {
    full_name: contactForm.full_name.value,
    email_address: contactForm.email_address.value,
    message: contactForm.message.value,
  };
  const portfolioFormData = JSON.stringify(dataRecord);
  localStorage.setItem('portfolioFormData', portfolioFormData);
});

function setContactFormData(contactFormData) {
  const currentData = JSON.parse(contactFormData);
  contactForm.full_name.value = currentData.full_name;
  contactForm.email_address.value = currentData.email_address;
  contactForm.message.value = currentData.message;
}

function showProject(event) {
  const popUpDiv = document.createElement('div');
  const projectImage = document.createElement('img');
  projectImage.className = 'puImg';
  const closeAnchor = document.createElement('a');
  closeAnchor.className = 'closeIcon';
  const projectTitle = document.createElement('h2');
  projectTitle.className = 'puPTitle';
  const projectUl = document.createElement('ul');
  projectUl.className = 'puLangCont';
  const projectDesc = document.createElement('p');
  projectDesc.className = 'puMainText';
  const projectBtns = document.createElement('div');
  projectBtns.className = 'puBtns';
  const btn1 = document.createElement('button');
  btn1.className = 'btn1';
  const liveLink = document.createElement('a');
  liveLink.innerText = 'See Live';
  btn1.appendChild(liveLink);
  const btn2 = document.createElement('button');
  const sourceLink = document.createElement('a');
  sourceLink.innerText = 'See Source';
  btn2.appendChild(sourceLink);
  btn2.className = 'btn1';
  btn2.classList.add('btn2');
  const ProjectId = parseInt(event.target.id, 10);
  popUpDiv.appendChild(closeAnchor);
  projectImage.src = projectsInfo[ProjectId]['featured image'];
  popUpDiv.appendChild(projectImage);
  projectTitle.textContent = projectsInfo[ProjectId].name;
  popUpDiv.appendChild(projectTitle);
  for (let i = 0; i < projectsInfo[ProjectId].technologies.length; i += 1) {
    const projectLi = document.createElement('li');
    projectLi.className = 'lang';
    projectLi.textContent = projectsInfo[ProjectId].technologies[i];
    projectUl.appendChild(projectLi);
  }
  popUpDiv.appendChild(projectUl);
  projectDesc.textContent = projectsInfo[ProjectId].description;
  popUpDiv.appendChild(projectDesc);
  liveLink.href = projectsInfo[ProjectId]['link to live version'];
  sourceLink.href = projectsInfo[ProjectId]['link to source'];
  projectBtns.appendChild(btn1);
  projectBtns.appendChild(btn2);
  popUpDiv.appendChild(projectBtns);
  /* Append the main div to the body */
  popUpDiv.className = 'popUpWindowMob';
  popUpDiv.id = 'popUpWindow';
  const originalPage = document.querySelector('.allPage');
  document.body.replaceChild(popUpDiv, document.querySelector('.allPage'));
  document.querySelector('.closeIcon').addEventListener('click', () => {
    document.body.replaceChild(originalPage, popUpDiv);
  });
}

window.addEventListener('load', () => {
  for (let j = 0; j < projectsInfo.length; j += 1) {
    const cardContainer = document.createElement('article');
    cardContainer.className = 'cardContainer';
    const imgPlaceholder = document.createElement('img');
    imgPlaceholder.alt = 'Image placeholder';
    imgPlaceholder.className = 'imgPlaceholder';
    const projectTitle = document.createElement('h3');
    projectTitle.className = 'projectTitle';
    const langContainer = document.createElement('ul');
    langContainer.className = 'langContainer';
    const seeBtn = document.createElement('button');
    seeBtn.className = 'seeBtn';
    seeBtn.innerText = 'See Project';
    seeBtn.onclick = showProject;
    const projectsContainer = document.querySelector('.gridContainer');
    const gridCell = document.createElement('div');
    gridCell.classList.add('works', 'gridCell');
    projectTitle.textContent = projectsInfo[j].name;
    imgPlaceholder.src = projectsInfo[j]['featured image'];
    langContainer.replaceChildren();
    for (let i = 0; i < projectsInfo[j].technologies.length; i += 1) {
      const langLi = document.createElement('li');
      langLi.className = 'lang';
      langLi.textContent = projectsInfo[j].technologies[i];
      langContainer.appendChild(langLi);
    }
    seeBtn.id = j;
    cardContainer.replaceChildren(imgPlaceholder, projectTitle, langContainer, seeBtn);
    gridCell.appendChild(cardContainer);
    projectsContainer.appendChild(gridCell);
  }
  if (localStorage.getItem('portfolioFormData')) setContactFormData(localStorage.getItem('portfolioFormData'));
});
document.querySelector('#burgerMenu').addEventListener('click', () => {
  document.querySelectorAll('.collapse').forEach((element) => element.classList.toggle('hide'));
  document.querySelector('.mobMenu').classList.toggle('fullHeight');
});
document.querySelectorAll('.mobMenuItem').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelectorAll('.collapse').forEach((element) => element.classList.toggle('hide'));
    document.querySelector('.mobMenu').classList.toggle('fullHeight');
  });
});

/* Contact form validation */
// show a message with a type of the input
function showMessage(input, message, type) {
  // get the <small> element and set the message
  const msg = input.parentNode.parentNode.querySelector('.messageText');
  msg.innerText = message;
  // update the class for the input
  input.parentNode.className = type ? 'success' : 'error';
  return type;
}
contactForm.addEventListener('submit', (event) => {
  showMessage(contactForm.email_address, '', true);
  if (contactForm.email_address.value.match(/[A-Z]/)) {
    showMessage(contactForm.email_address, 'Please enter the email in lowercase. Form not sent!', false);
    event.preventDefault();
  }
});