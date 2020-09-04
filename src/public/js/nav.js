const check = document.querySelector('.menu-drop-down input');
const nav = document.querySelector('.navbar ul');

check.addEventListener('click', () => {
	nav.classList.toggle('anime');
});
