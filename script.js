const icons = document.querySelectorAll('.icon');
const items = document.querySelectorAll('.item');

icons.forEach((icon, id) => {
	icon.addEventListener('click', () => {
		removeOpen();

		icon.parentElement.classList.add('open');
	});
});

function removeOpen() {
	items.forEach((item) => {
		if (item.classList.contains('open')) {
			item.classList.remove('open');
		}
	});
}
