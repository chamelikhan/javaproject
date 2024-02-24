

const appName = document.getElementById("appName");
const cookieEnabled = document.getElementById("cookieEnabled");
const appCodeName = document.getElementById("appCodeName");
const platform = document.getElementById("platform");
const product = document.getElementById("product");
const appVersion = document.getElementById("appVersion");
const userAgent = document.getElementById("userAgent");
const onLine = document.getElementById("onLine");
const javaEnabled = document.getElementById("javaEnabled");



appName.innerHTML = "navigator cookieEnabled is :" + " " + navigator.appName;
cookieEnabled.innerHTML = "navigator cookieEnabled is :" + " " + navigator.cookieEnabled;
appCodeName.innerHTML = "navigator appCodeName is :" + " " + navigator.appCodeName;
platform.innerHTML = "navigator platform is :"+ " " + navigator.platform;
product.innerHTML = "navigator product is :"+ " " + navigator.product;
appVersion.innerHTML = "navigator appVersion is :"+ " " + navigator.appVersion;
userAgent.innerHTML = "navigator userAgent is :"+ " " + navigator.userAgent;
language.innerHTML = "navigator language is :"+ " " + navigator.language;
onLine.innerHTML = "navigator onLine is :"+ " " + navigator.onLine;
javaEnabled.innerHTML = "navigator javaEnabled is :"+ " " + navigator.javaEnabled();

