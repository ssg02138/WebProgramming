//mydrawings.js

var mycanvas;
var eraser;
var ctx;
var draw;

window.onload = function(evt){

    mycanvas = document.querySelector("#mycanvas");
    eraser = document.querySelector("#eraser");
    ctx = mycanvas.getContext("2d");
    draw = false;

    mycanvas.addEventListener("mousedown",function(event){
        draw = true;
        
    });
    mycanvas.addEventListener("mouseup",function(event){
        draw = false;
        ctx.strokeStyle = 'rgb('+30+',' + Math.floor(Math.random()*200)+1 + ',' + Math.floor(Math.random()*200)+1 + ')';
    });
    mycanvas.addEventListener("mousemove",function(event){
        if(!draw) return;
        let loc = this.getBoundingClientRect();
        //Subtract the MOUSE LOCATION FROM the element location
        let x = event.clientX - loc.x;
        let y = event.clientY - loc.y;
        ctx.beginPath();
        ctx.arc(x, y, Math.floor(Math.random()*40)+1, 0, 2* Math.PI, true);
        ctx.stroke();
    });
    eraser.addEventListener("mousedown", function(event){
        mycanvas.setAttribute("width", "500px");
        mycanvas.setAttribute("height","500px");
    });
};

