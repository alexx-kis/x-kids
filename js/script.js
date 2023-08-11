'use strict';

/*==================================== PANEL ====================================*/

; (function () {

	let items = document.querySelectorAll('.muscles__item');
	let itemBasic = document.querySelector('.muscles__item--active');

	let images = document.querySelectorAll('.muscles__image');
	let imageBasic = document.querySelector('.muscles__image--active');

	let arrows = document.querySelectorAll('.muscles__item-arrow');
	let arrowBasic = document.querySelector('.muscles__item-arrow--active');





	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener('mouseover', function () {
			items[i].classList.add('muscles__item--active');
			images[i].classList.add('muscles__image--active');
			arrows[i].classList.add('muscles__item-arrow--active');



			if (items[i] != itemBasic) {
				itemBasic.classList.remove('muscles__item--active');
				imageBasic.classList.remove('muscles__image--active');
				arrowBasic.classList.remove('muscles__item-arrow--active');


			}


		});

		items[i].addEventListener('mouseout', function () {
			items[i].classList.remove('muscles__item--active');
			images[i].classList.remove('muscles__image--active');
			arrows[i].classList.remove('muscles__item-arrow--active');


			itemBasic.classList.add('muscles__item--active');
			imageBasic.classList.add('muscles__image--active');
			arrowBasic.classList.add('muscles__item-arrow--active');


		});
	}
})();

/*==================================== SELECT ====================================*/

; (function () {
	let selectSingle = document.querySelector('.footer__select');
	let selectSingle_title = selectSingle.querySelector('.footer__select-title');
	let selectSingle_labels = selectSingle.querySelectorAll('.footer__select-label');

	selectSingle_title.addEventListener('click', () => {
		if ('active' === selectSingle.getAttribute('data-state')) {
			selectSingle.setAttribute('data-state', '');
		} else {
			selectSingle.setAttribute('data-state', 'active');
		}
	});

	for (let i = 0; i < selectSingle_labels.length; i++) {
		selectSingle_labels[i].addEventListener('click', (evt) => {
			selectSingle_title.textContent = evt.target.textContent;
			selectSingle.setAttribute('data-state', '');
		});
	}

	let wrapper = document.querySelector('.wrapper');
	wrapper.addEventListener('click', function (e) {
		e.stopImmediatePropagation;
		for (let i = 0; i < selectSingle_labels.length; i++) {
			selectSingle_labels[i].addEventListener('click', (evt) => {
				selectSingle_title.textContent = evt.target.textContent;
				selectSingle.setAttribute('data-state', '');
				selectSingle_title.classList.add('footer__select-title--selected');

			});
		}
	});
})();

/*==================================== FORM SCROLL ====================================*/

; (function () {
	let inputs = document.querySelectorAll('.footer__form-input');
	let formInner = document.querySelector('.footer__form-inner');

	for (let input of inputs) {
		input.addEventListener('focus', function () {
			formInner.style.maxHeight = formInner.scrollHeight + 'px';
			let timerId = setInterval(function () {
				formInner.style.overflow = 'visible';
			}, 1000);
		});
	}

})();