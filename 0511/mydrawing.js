var mycanvas = document.querySelector("#mycanvas");

var ctx = mycanvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 50, 40, 0, 2 * Math.PI);
ctx.stroke();