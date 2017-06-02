// Get div
var div = document.getElementById('clock');
// Get body
var body = document.getElementsByTagName('body')[0];

 window.onload = function start() {
 	myFunction();
 };

function myFunction() {
	let time = new Date();
	let hour = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	let color = ( "#" + hour + "" + minutes + "" + seconds);
	body.style.backgroundColor = color;
	clock.innerText = color;
};

setInterval(myFunction, 1000);