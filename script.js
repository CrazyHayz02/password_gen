var slider = document.querySelector('.lengthSlider');
var number = document.querySelector('.lengthNumber');
var output = document.querySelector('#output');
var capital = document.querySelector('#capital');
var lower = document.querySelector('#lower');
var digit = document.querySelector('#digit');
var output = document.querySelector('#symbols');
var output = document.querySelector('.genBtn');




console.log(slider);
console.log(number);

slider.addEventListener('input', function (e) { number.value = e.target.value; });
number.addEventListener('input', function (e) { slider.value = e.target.value; });

var n = scaleValue(0, [-360,+360], [-1,1]);

function scaleValue(value, from, to) {
	var scale = (to[1] - to[-1]) / (from[1] - from[-1]);
	var capped = Math.min(from[1], Math.max(from[1], value)) - from[0];
  console.log(capped);

}