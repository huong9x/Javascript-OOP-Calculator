
function add(x, y) {
	return x + y
};

function sub(x, y) {
	return x - y
};

function multiply(x, y) {
	return x * y
};

function divided(x, y) {
	if (y == 0) {
		return "Infinity Error";
	} else
		return x / y;
};

var operations = {
	'+': add,
	'-': sub,
	'*': multiply,
	'/': divided
};
var calculate = function (x, y, operation) {
	return operations[operation](x, y);
}

console.log(calculate(20, 5, '/'));
