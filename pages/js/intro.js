"use strict";

var mouse = {};

var canvas = document.getElementById("jsCanvas");
var context = canvas.getContext('2d');

var counter = 0;
var lastCount = 0;
var currentColor = "#eeff00"

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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
    if (counter - 30 == lastCount) {
        currentColor = getRandomColor();
        lastCount = counter;
    }
    contex.fillStyle = currentColor;
    contex.fillRect(x-75/2, y-75/2, 75, 75);
    counter++;
}

function drawBg(contex) {
    contex.fillStyle = "#000000";
    contex.fillRect(0, 0, canvas.width, canvas.height);
    contex.fillStyle = "#ffffff";
    contex.font = "18px sans-serif";
    contex.fillText('Current color: ' + currentColor, 1, 18);
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