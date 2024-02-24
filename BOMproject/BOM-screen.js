
const width = document.getElementById("width");
const height = document.getElementById("height");
const availwidth = document.getElementById("availwidth");
const availheight = document.getElementById("availheight");
const colordepth = document.getElementById("colordepth");
const pixeldepth = document.getElementById("pixeldepth");


width.innerHTML = "screen width is :" + screen.width;
height.innerHTML = "screen height is :" + screen.height;
availwidth.innerHTML = "screen availWidth is :" + screen.availWidth;
availheight.innerHTML = "screen availHeight is :" + screen.availHeight;
colordepth.innerHTML = "screen colorDepth is :" + screen.colorDepth;
pixeldepth.innerHTML = "screen pixelDepth is :" + screen.pixelDepth;
