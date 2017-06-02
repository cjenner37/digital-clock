// Get div
var div = document.getElementById('clock')[0];
// Get body
var body = document.getElementsByTagName('body')[0];

// Get Date
// var time = new Date();
// // Get time
// var hour = time.getHours();
// var minutes = time.getMinutes();
// var seconds = time.getSeconds();
// // Get Hexcode
// var color = ( "#" + hour + "" + minutes + "" + seconds);
// console.log(color);

// div.innerText = color;

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