function collapse() {
  document.querySelectorAll('.collapse').forEach((element) => element.classList.toggle('hide'));
  document.querySelector('.mobMenu').classList.toggle('fullHeight');
  this.preventDefault();
}
document.querySelector('#burgerMenu').addEventListener('click', collapse());
document.querySelectorAll('.mobMenuItem').forEach((element) => {
  element.addEventListener('click', collapse);
});
