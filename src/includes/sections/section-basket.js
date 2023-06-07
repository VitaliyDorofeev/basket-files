// получаем все карточки товаров
const productCards = document.querySelectorAll('.section-basket__item-wrapper');

// добавляем обработчик клика на каждую карточку
productCards.forEach((card) => {
	// получаем кнопки изменения количества товара и кнопку добавления в корзину
	const decreaseButton = card.querySelector('.section-basket__quantity-minus');
	const increaseButton = card.querySelector('.section-basket__quantity-plus');
	const quantityInput = card.querySelector('.section-basket__counter');
	const price = card.querySelector('.section-basket__price');

	// добавляем обработчик клика на кнопку уменьшения количества товара
	decreaseButton.addEventListener('click', () => {
		let quantity = quantityInput.innerHTML;

		if (quantity > 1) {
			quantity--;
			quantityInput.innerHTML = quantity;
		}

		let nowPrice = 525;
		let sum = nowPrice * quantity;
		price.innerHTML = sum;

		if (nowPrice > 525) {
			return sum - nowPrice;
		}
		updateCard ();
	});

	// добавляем обработчик клика на кнопку увеличения количества товара
	increaseButton.addEventListener('click', () => {
		let quantity = quantityInput.innerHTML;
		quantity++;
		quantityInput.innerHTML = quantity;

		let nowPrice = 525;
		let sum = nowPrice * quantity;
		price.innerHTML = sum;
		updateCard ();
	});
});

// Получаем все кнопки удаления товаров
const deleteButtons = document.querySelectorAll('.section-basket__close');

deleteButtons.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		const card = event.target.closest('.section-basket__item-wrapper');
		card.remove();
		updateCard ()
	});
})

function updateCard () {
	const items = document.querySelectorAll('.section-basket__item-wrapper');
	const subtotalInner = document.querySelector('.section-basket__total-price-subtotal');
	const totalInner = document.querySelector('.section-basket__total-price-total');

	// инициализируем переменную для хранения общей суммы
	let total = 0;
	let tax = 250;
	// проходимся по каждому элементу товара
	items.forEach((item) => {
		// получаем цену и количество товара из соответствующих элементов
		const price = parseInt(item.querySelector('.section-basket__price').innerHTML);
		const subtotal = price;
		// вычисляем сумму для этого товара и добавляем ее к общей сумме
		total += subtotal;
		// обновляем отображение суммы для этого товара
		subtotalInner.innerHTML = `$${subtotal}`;
		totalInner.innerHTML = `$${subtotal}`;
	});
	let sumWithTax = total + tax;
	subtotalInner.innerHTML = `$${total}`;
	totalInner.innerHTML = `$${sumWithTax}`;
}
