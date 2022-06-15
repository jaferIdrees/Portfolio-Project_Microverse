const projectsInfo = [
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured image': 'images/Snapshoot_Portfolio.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    'link to live version': 'www.test1.com',
    'link to source': 'www.test1.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured image': 'images/Snapshoot_Portfolio2.png',
    technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'www.test1.com',
    'link to source': 'www.test1.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured image': 'images/Snapshoot_Portfolio.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    'link to live version': 'www.test1.com',
    'link to source': 'www.test1.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured image': 'images/Snapshoot_Portfolio2.png',
    technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'www.test1.com',
    'link to source': 'www.test1.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured image': 'images/Snapshoot_Portfolio.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    'link to live version': 'www.test1.com',
    'link to source': 'www.test1.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'featured image': 'images/Snapshoot_Portfolio2.png',
    technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    'link to live version': 'www.test1.com',
    'link to source': 'www.test1.com',
  },
];
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
  btn1.innerText = 'See Live';
  btn1.className = 'btn1';
  const btn2 = document.createElement('button');
  btn2.innerText = 'See Source';
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
  btn1.href = projectsInfo[ProjectId]['link to live version'];
  btn2.href = projectsInfo[ProjectId]['link to source'];
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

/* <section class="gridContainer">
      <div class="gridCell works">
        <article class="cardContainer">
          <img src="images/Img_Plaholder.svg" alt="Image placeholder" class="imgPlaceholder">
          <h3 class="projectTitle">Multi-Post Stories Gain+Glory</h3>
          <ul class="langContainer">
            <li class="lang"><a class="lang" href="">Ruby on rails</a></li>
            <li class="lang"><a class="lang" href="">css</a></li>
            <li class="lang"><a class="lang" href="">JavScript</a></li>
            <li class="lang"><a class="lang" href="">html</a></li>
          </ul>
          <button type="button" class="seeBtn" id="0">See Project</button>
        </article>
      </div> */
window.addEventListener('load', () => {
  // gridCell.className = ;
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
const contactForm = document.forms[0];
contactForm.addEventListener('submit', (event) => {
  showMessage(contactForm.email_address, '', true);
  if (contactForm.email_address.value.match(/[A-Z]/)) {
    showMessage(contactForm.email_address, 'Please enter the email in lowercase. Form not sent!', false);
    event.preventDefault();
  }
});
