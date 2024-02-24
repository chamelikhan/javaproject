
let myWindow;

const width = document.getElementById("width");
const height = document.getElementById("height");


width.innerHTML = "window width is :" + window.innerWidth;
height.innerHTML = "window height is :" + window.innerHeight;


function openWindow() {
	myWindow = window.open("https://www.pinterest.com/", " ");
}
function closeWindow() {
	myWindow.close();
}

function moveWindow() {
	window.console.error("You made a mistake");
}