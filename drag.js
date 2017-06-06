// Get time div
var timeStamp = document.getElementById('time');
// Get body
var body = document.getElementsByTagName('body')[0];
// Get hour hand
var hourHand = document.getElementById('hour');
// Get minute hand
var minuteHand = document.getElementById('minute');
// Get second hand
var secondHand = document.getElementById('second');

// window.onload = function start() {
//  	myFunction();
// };

// function myFunction() {
// 	let time = new Date();
// 	let hours = time.getHours();
// 	let minutes = time.getMinutes();
// 	let seconds = time.getSeconds();
// 	hourHand.style.transform = "rotate(" + ((hours * 30) + (minutes * 0.5)) + "deg)";
// 	minuteHand.style.transform = "rotate(" + ((minutes * 6) + (seconds * 0.1)) + "deg)";
// 	secondHand.style.transform = "rotate(" + (seconds * 6) + "deg)";
// 	if (hours < 10) {
// 		hours = "0" + hours;}
// 	if (minutes < 10) {
// 		minutes = "0" + minutes;}
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;}
// 	let color = ( "#" + hours + "" + minutes + "" + seconds);
// 	body.style.backgroundColor = color;
// 	timeStamp.innerText = color;

// };

document.onmousedown = mouseDown;
document.onmouseup = mouseUp;

hourHand.addEventListener("mouseDown", function(e){
	document.addEventListener("mousemove", function(e){
		
	})
})




// if dragObject != null, we know we are dragging something
var dragObject = null;
var mouseOffset = null;


function mouseMove(e) {
	var mousePos = mouseCoords(e);
}

function mouseCoords(e) {
	var x = event.clientX;
	var y = event.clientY;
}



function makeClickable(object){
	object.onmousedown = function() {
		dragObject = this;
	}
}
function mouseUp(e) {
	dragObject = null;
}