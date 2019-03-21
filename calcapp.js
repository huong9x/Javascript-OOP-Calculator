
function plus(x, y) {
	return x + y
};

function minus(x, y) {
	return x - y
};

function mult(x, y) {
	return x * y
};

function divi(x, y) {
	if (y == 0) {
		return "Infinity Error";
	} else
		return x / y;
};

var operations = {
	'+': plus,
	'-': minus,
	'*': mult,
	'/': divi
};
var calculate = function (x, y, operation) {
	return operations[operation](x, y);
}

console.log(calculate(20, 5, '/'));
