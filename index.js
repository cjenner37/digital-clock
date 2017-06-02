// Get div
var div = document.getElementById('clock');
// Get body
var body = document.getElementsByTagName('body')[0];

 window.onload = function start() {
 	myFunction();
 };

function myFunction() {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	if (hours < 10) {
		hours = "0" + hours;}
	if (minutes < 10) {
		minutes = "0" + minutes;}
	if (seconds < 10) {
		seconds = "0" + seconds;}
	let color = ( "#" + hours + "" + minutes + "" + seconds);
	body.style.backgroundColor = color;
	clock.innerText = color;
};

setInterval(myFunction, 1000);