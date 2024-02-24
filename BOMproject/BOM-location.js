

const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");



href.innerHTML = "location href is :" + " " + window.location.href;
hostname.innerHTML = "location hostname is :" + " " + window.location.hostname;
pathname.innerHTML = "location pathname is :"+ " " + window.location.pathname;
protocol.innerHTML = "location protocol is :"+ " " + window.location.protocol;
port.innerHTML = "location port is :"+ " " + window.location.port;

function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
