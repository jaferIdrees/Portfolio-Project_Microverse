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
document.querySelectorAll('.seeBtn').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let popUpDiv = document.createElement('div');
    let projectImage = document.createElement('img');
    projectImage.className = 'puImg';
    let closeAnchor = document.createElement('a');
    closeAnchor.className = 'closeIcon';
    let projectTitle = document.createElement('h2');
    projectTitle.className = 'puPTitle';
    let projectUl = document.createElement('ul');
    projectUl.className = 'puLangCont';
    let projectDesc = document.createElement('p');
    projectDesc.className = 'puMainText';
    let projectBtns = document.createElement('div');
    projectBtns.className = 'puBtns';
    let btn1 = document.createElement('button');
    btn1.innerText = 'See Live';
    btn1.className = 'btn1';
    let btn2 = document.createElement('button');
    btn2.innerText = 'See Source';
    btn2.className = 'btn1';
    btn2.classList.add('btn2');
    let projectsInfo = [
      {
        name: 'Keeping track of hundreds of components', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea', 
        'featured image': 'images/Snapshoot_Portfolio.jpg', 
        technologies: ['Ruby on rails', 'css', 'JavaScript'], 
        'link to live version': 'www.test1.com',
        'link to source': 'www.test1.com',
      },
    ];
    popUpDiv.appendChild(closeAnchor);
    projectImage.src = projectsInfo[0]['featured image'];
    popUpDiv.appendChild(projectImage);
    projectTitle.textContent = projectsInfo[0].name;
    popUpDiv.appendChild(projectTitle);
    for (let i = 0; i < projectsInfo[0].technologies.length; i++) {
      let projectLi = document.createElement('li');
      projectLi.className = 'lang';
      projectLi.textContent = projectsInfo[0].technologies[i];
      projectUl.appendChild(projectLi);
    }
    popUpDiv.appendChild(projectUl);
    projectDesc.textContent = projectsInfo[0].description;
    popUpDiv.appendChild(projectDesc);
    btn1.href = projectsInfo[0]['link to live version'];
    btn2.href = projectsInfo[0]['link to source'];
    projectBtns.appendChild(btn1);
    projectBtns.appendChild(btn2);
    popUpDiv.appendChild(projectBtns);
    /*Append the main div to the body */
    popUpDiv.className = 'popUpWindowMob';
    popUpDiv.id = 'popUpWindow';
    const originalPage = document.querySelector('.allPage');
    document.body.replaceChild(popUpDiv, document.querySelector('.allPage'));
  });
});
