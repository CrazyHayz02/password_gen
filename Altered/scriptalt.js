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

slider.addEventListener('input', function (e) { number.value = e.target.value; 
		const passLeng = slider.value;
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
});
number.addEventListener('input', function (e) { slider.value = e.target.value; 
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
});

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
}

minSlider.addEventListener('input', function (e) { minNumber.value = e.target.value;  
	const min = minSlider.value;
	if (minSlider == number) {
		maxSlider.setAttribute("min", ""+min+"");
		maxNumber.setAttribute("min", ""+min+"");
		maxSlider.setAttribute("max", ""+min+"");
		maxNumber.setAttribute("max", ""+min+"");
		maxSlider.setAttribute("value", ""+min+"");
		maxNumber.setAttribute("value", ""+min+"");
	} else {
		maxSlider.setAttribute("min", ""+min+"");
		maxNumber.setAttribute("min", ""+min+"");
		maxSlider.setAttribute("value", ""+min+"");
		maxNumber.setAttribute("value", ""+min+"");
	}
});
minNumber.addEventListener('input', function (e)  { minSlider.value = e.target.value; 
	const min = minNumber.value;
	if (minNumber == number) {
		maxSlider.setAttribute("min", ""+min+"");
		maxNumber.setAttribute("min", ""+min+"");
		maxSlider.setAttribute("max", ""+min+"");
		maxNumber.setAttribute("max", ""+min+"");
		maxSlider.setAttribute("value", ""+min+"");
		maxNumber.setAttribute("value", ""+min+"");
	} else {
		maxSlider.setAttribute("min", ""+min+"");
		maxNumber.setAttribute("min", ""+min+"");
		maxSlider.setAttribute("value", ""+min+"");
		maxNumber.setAttribute("value", ""+min+"");
	}
});

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
}

maxSlider.addEventListener('input', function (e) { maxNumber.value = e.target.value; });
maxNumber.addEventListener('input', function (e) { maxSlider.value = e.target.value; });

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

const passGen = (leng, capitalCheck, lowerCheck, digitCheck, symbolsCheck, minCheck, maxCheck) => {
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
		const num = "0123456789";
		let numCount = leng;
		console.log(capitalCheck || lowerCheck || symbolsCheck);
		if (capitalCheck || lowerCheck || symbolsCheck){
			numCount = Math.floor(Math.random() * (maxCheck - minCheck + 1)) + minCheck;
		}

		console.log(numCount);
		charLeft -= numCount;
		
		const numLength = num.length;
		for (let i = 1; i <= numCount; i++) {
			result += num.charAt(Math.floor(Math.random() * numLength));
		}
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
	
	for (let i = 1; i <= charLeft; i++) {
		result += chars.charAt(Math.floor(Math.random() * charsLength));
	}
	console.log(result);
	const resultSplit = result.split("");
	resultSplit.sort(() => 0.5 - Math.random());
	const scrambled = resultSplit.join("");
	output.innerHTML = scrambled;
};

button.addEventListener("click", () => {
    const passLeng = parseInt(number.value);
	const capitalToggle = capital.checked;
	const lowerToggle = lower.checked;
	const digitToggle = digit.checked;
	const symbolsToggle = symbols.checked;
	const numMin = parseInt(minNumber.value);
	const numMax = parseInt(maxNumber.value);
	if (isValid (capitalToggle, lowerToggle, digitToggle, symbolsToggle)) {
		passGen(passLeng, capitalToggle, lowerToggle, digitToggle, symbolsToggle, numMin, numMax);
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

