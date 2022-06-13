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
