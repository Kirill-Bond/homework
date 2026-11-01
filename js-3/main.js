for (let i = 1; i <= 20; i++) {
	if (i % 4 === 0) {
		continue;
	}
	console.log(i);
}

const number = +prompt("Введите число для определения факториала:", 0);
let factorial = 1;
for (let i = 1; i <= number; i++) {
	factorial = factorial * i;
}
console.log(factorial);

let board = "";
for (let i = 1; i <= 8; i++) {
	let row = "";
	for (let j = 1; j <= 8; j++) {
		row += (i + j) % 2 === 0 ? "# " : "  ";
	}
	board += row + "\n";
}
console.log(board);
