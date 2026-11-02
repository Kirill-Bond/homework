// Задача 1

function calculateFinalPrice(price, discount, tax) {
	const discountAmount = price * (discount / 100);
	const priceWithDiscount = price - discountAmount;
	const finalPrice = priceWithDiscount + priceWithDiscount * tax;
	return finalPrice;
}

// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); //90

// Задача 2

function checkAccess(userName, password) {
	if (userName === "admin" && password === "123456") {
		return "Доступ разрешен";
	}
	return "Доступ запрещен";
}

// console.log(checkAccess("admin", "123456"));
// console.log(checkAccess("admin", "576586"));

// Задача 3

function getTimeOfDay(time) {
	if (time >= 0 && time <= 5) {
		return "Ночь";
	} else if (time >= 6 && time <= 11) {
		return "Утро";
	} else if (time >= 12 && time <= 17) {
		return "День";
	} else if (time >= 18 && time <= 23) {
		return "Вечер";
	}
	return "Некорректное время";
}

// console.log(getTimeOfDay(3));
// console.log(getTimeOfDay(9));
// console.log(getTimeOfDay(15));
// console.log(getTimeOfDay(21));
// console.log(getTimeOfDay(25));

// Задача 4

function findFirstEven(start, end) {
	for (let number = start; number <= end; number++) {
		if (number % 2 === 0) {
			return number;
		}
	}
	return "Чётных чисел нет";
}

// console.log(findFirstEven(1, 10));
// console.log(findFirstEven(9, 9));
