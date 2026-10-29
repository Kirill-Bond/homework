//1.
const number = +prompt("Введите число");
if (number % 2 === 0) {
	console.log(`${number} чётное число`);
} else {
	console.log(`${number} не чётное число`);
}

2.
const age = +prompt("Укажите ваш возраст");
const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
console.log(`Скидка: ${discount}%`);


//3.
const username = prompt("Введите имя пользователя:");
const password = prompt("Введите пароль:");
if ((username === "admin" || username === "user") && password === "123456") {
	alert("Доступ разрешен");
} else {
	alert("Доступ запрещен");
}

