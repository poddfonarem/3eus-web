document.addEventListener("DOMContentLoaded", function () {

	// Developer Support Modal
	const alertEl = document.getElementById('myAlert');
	const showBtn = document.getElementById('showOrderBtn');
	const closeBtn = document.getElementById('closeBtn');

	function showAlert() {
		alertEl.classList.add('active');
	}

	function closeAlert() {
		alertEl.classList.remove('active');
	}

	showBtn.addEventListener('click', () => {
		showAlert();
	});

	closeBtn.addEventListener('click', closeAlert);

});