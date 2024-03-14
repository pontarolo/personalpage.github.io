function time() {
var a = new Date();
var b = a.toLocaleTimeString();

document.getElementsByClassName('time')[0].innerHTML = b;
}
window.setInterval(time, 0);