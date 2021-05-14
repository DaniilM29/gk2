/*Mobile Menu*/
const buttons = document.querySelectorAll('.btn-mobile');
const nav = document.querySelector('.nav');
const formClose = document.querySelectorAll('.close');


buttons.forEach(button => button.addEventListener("click", function() {
    nav.classList.toggle('active');
}));

formClose.forEach(closeForm  => closeForm.addEventListener("click", function() {
    nav.classList.remove('active');
}));

/*Mobile Menu*/