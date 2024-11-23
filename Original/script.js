const slider = document.querySelector('.lengthSlider');
const number = document.querySelector('.lengthNumber');
const output = document.querySelector('#output');
const capital = document.querySelector('#capital');
const lower = document.querySelector('#lower');
const digit = document.querySelector('#digit');
const symbols = document.querySelector('#symbols');
const button = document.querySelector('.genBtn');
const hidden = document.querySelector('#min.hidden');
const hidden2 = document.querySelector('#max.hidden');
const minSlider = document.querySelector('#minSlider');
const minNumber = document.querySelector('#minNumber');
const maxSlider = document.querySelector('#maxSlider');
const maxNumber = document.querySelector('#maxNumber');




console.log(slider);
console.log(number);

slider.addEventListener('input', function (e) { number.value = e.target.value; });
number.addEventListener('input', function (e) { slider.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
}

const isValid = (capitalValid, lowerValid, digitValid, symbolsValid) => {
	if (capitalValid == false) {
		if (lowerValid == false) {
			if (digitValid == false) {
				if (symbolsValid == false) {
					alert("Please toggle at least one option");
				} else {
					return true;
				}
			} else {
				return true;
			}
		} else {
			return true;
		}
	} else {
		return true;
	}
}

const passGen = (leng, capitalCheck, lowerCheck, digitCheck, symbolsCheck) => {
	let chars = "";
	let charLeft = leng;
	let result = "";
	if (capitalCheck) {
		const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const capLength = cap.length;
		result += cap.charAt(Math.floor(Math.random() * capLength));
		chars += cap;
		charLeft -= 1;
		console.log(result);
		console.log(charLeft);
	}
	if (lowerCheck) {
		const low = "abcdefghijklmnopqrstuvwxyz";
		const lowLength = low.length;
		result += low.charAt(Math.floor(Math.random() * lowLength));
		chars += low;
		charLeft -= 1;
		console.log(result);
		console.log(charLeft);
	}
	if (digitCheck) {
		chars += "0123456789";
		const charsLength = chars.length;
		result += chars.charAt(Math.floor(Math.random() * charsLength));
		chars += chars;
		charLeft -= 1;
		console.log(result);
		console.log(charLeft);
	}
	if (symbolsCheck) {
		const sym = "!@~$%^&*";
		const symLength = sym.length;
		result += sym.charAt(Math.floor(Math.random() * symLength));
		chars += sym;
		charLeft -= 1;
		console.log(result);
		console.log(charLeft);
	}
	
	
	const charsLength = chars.length;

	for (let i = 1; i <= charLeft ; i++) {
		result += chars.charAt(Math.floor(Math.random() * charsLength));
		console.log(result);
	}
	const resultSplit = result.split("");
	resultSplit.sort(() => 0.5 - Math.random());
	const scrambled = resultSplit.join("");
	output.innerHTML = scrambled;
};

button.addEventListener("click", () => {
    const passLeng = number.value;
	const capitalToggle = capital.checked;
	const lowerToggle = lower.checked;
	const digitToggle = digit.checked;
	const symbolsToggle = symbols.checked;
	if (isValid (capitalToggle, lowerToggle, digitToggle, symbolsToggle)) {
		passGen(passLeng, capitalToggle, lowerToggle, digitToggle, symbolsToggle);
	}
});

