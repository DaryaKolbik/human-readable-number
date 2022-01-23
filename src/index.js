module.exports = function toReadable (number) {
	let listOfUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let listOfTens1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let listOfTens2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let listOfHundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
	
	let result = '';
	let unit, ten, hundred;
	
	if (number === 0) {
		result = 'zero';
	}
	if (number > 99 && number <= 999) {
		hundred = Number(String(number)[0]);
		result  = `${listOfHundreds[hundred - 1]} `;
		number = number - hundred * 100; 
	}
	if (number >= 0 && number <= 9) {
		unit = number;
		result = `${result}${listOfUnits[unit]}`;
	} else if (number > 9 && number <= 19) {
		ten = Number(String(number)[1]);
		result = `${result}${listOfTens1[ten]}`;
	} else if (number > 19 && number <= 99) {
		ten = Number(String(number)[0]);
		unit = Number(String(number)[1]);
		result = `${result}${listOfTens2[ten - 2]} ${listOfUnits[unit]}`;
	} 
	return result.trim();
};

