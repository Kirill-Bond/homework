// Задача 1

const person = {
	name: "Кирилл",
	surname: "Бондаренко",
	age: 23,
};

console.log(person);

// Задача 2

const isEmpty = (object) => {
	for (const key in object) {
		return false;
	}

	return true;
};

console.log(isEmpty({}));
console.log(isEmpty(person));

// Задача 3

const task = {
	title: "Изучить JavaScript",
	description: "Разобраться с объектами и функциями",
	isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
	const newObject = {
		...object,
		...modifications,
	};
	return newObject;
};

const updatedTask = cloneAndModify(task, {
	description: "Повторить тему объектов",
	isCompleted: true,
});

console.log(updatedTask);

for (const property in updatedTask) {
	console.log(`${property}: ${updatedTask[property]}`);
}

// Задача 4

const callAllMethods = (object) => {
	for (const key in object) {
		const value = object[key];
		if (typeof value === "function") {
			value();
		}
	}
};

const myObject = {
	showMessage() {
		console.log("Метод 1 вызван");
	},
	sayHello() {
		console.log("Метод 2 вызван");
	},

	property: "Это не метод",
};

callAllMethods(myObject);
