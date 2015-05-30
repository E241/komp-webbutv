"use strict";

var mouse = {};

var canvas = document.getElementById("jsCanvas");
var context = canvas.getContext('2d');

window.requestAnimFrame = (function () {
  return  window.requestAnimationFrame       || 
		  window.webkitRequestAnimationFrame || 
		  window.mozRequestAnimationFrame    || 
		  window.oRequestAnimationFrame      || 
		  window.msRequestAnimationFrame     ||  
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

function resizeCanvas() {
    canvas.setAttribute('width', ''+canvas.clientWidth);
    canvas.setAttribute('height', ''+canvas.clientHeight);
}

//contex.clearRect(0,0,canvas.width,canvas.height);
function moveRectTo(x, y, contex) {
    contex.fillStyle = "#eeff00";
    contex.fillRect(x-75/2, y-75/2, 75, 75);
}

function drawBg(contex) {
    contex.fillStyle = "#000000";
    contex.fillRect(0, 0, canvas.width, canvas.height);
}

function mouseXY(e) {
    e.preventDefault();
    mouse.x = e.pageX - canvas.offsetLeft;
    mouse.y = e.pageY - canvas.offsetTop;
}

canvas.addEventListener("mousemove",mouseXY, false);

//context.fillRect(0, 0, 75, 75);

function animloop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBg(context);
	moveRectTo(mouse.x, mouse.y, context);
	requestAnimFrame(animloop);
}
resizeCanvas();
requestAnimationFrame(animloop);