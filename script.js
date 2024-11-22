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
	if (capitalCheck) {
		chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (lowerCheck) {
		chars += "abcdefghijklmnopqrstuvwxyz";
	}
	if (digitCheck) {
		chars += "0123456789";
	}
	if (symbolsCheck) {
		chars += "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
	}

	const charsLength = chars.length;
	let result = "";

	for (let i = 1; i <= leng; i++) {
		result += chars.charAt(Math.floor(Math.random() * charsLength))
	}
	output.innerHTML = result;
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
	
digit.addEventListener('change', () => {
	const passLeng = number.value;
	const max = passLeng;
	const current = Math.round(max/4);
	
	
    if (digit.checked) {
		const passLeng = number.value;
		const max = passLeng;
		const current = Math.round(max/4);
		minSlider.setAttribute("max", ""+max+"");
		minNumber.setAttribute("max", ""+max+"");
		minSlider.setAttribute("value", ""+current+"");
		minNumber.setAttribute("value", ""+current+"");
		const min = minNumber.value;
		maxSlider.setAttribute("max", ""+max+"");
		maxSlider.setAttribute("min", ""+min+"");
		maxNumber.setAttribute("max", ""+max+"");
		maxNumber.setAttribute("min", ""+min+"");
		maxSlider.setAttribute("value", ""+current+"");
		maxNumber.setAttribute("value", ""+current+"");
		console.log(hidden);
		console.log(hidden2);
		hidden.style.display = "inline";
		hidden2.style.display = "inline";

	  } else  {
		hidden.style.display = "none";
		hidden2.style.display = "none";
	  }
});

