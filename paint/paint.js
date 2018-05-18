
var mycanvas;
var ctx;
var draw;
var radius;
var lineWidth;

window.onload = function(evt){
    mycanvas = document.querySelector("#mycanvas");
    ctx = mycanvas.getContext("2d");
    draw = false;
    radius = 10;

    ctx.lineWidth = radius * 2;

    mycanvas.addEventListener("mousedown",function(event){
        draw = true;
    });
    mycanvas.addEventListener("mouseup",function(event){
        draw = false;
        ctx.beginPath();
    });
    mycanvas.addEventListener("mousemove",function(event){
        if(!draw) return;
        let loc = this.getBoundingClientRect();
        //Subtract the MOUSE LOCATION FROM the element location
        let x = event.clientX - loc.x;
        let y = event.clientY - loc.y;
        
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2* Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x, y);
    });
};

// pen width

var minRad = 5;
var maxRad = 100;
var interval = 5;
var radSpan = document.getElementById("radval");
var decRad = document.getElementById("decrad");
var incRad = document.getElementById("incrad");

var eraser = document.getElementById("eraser");

var setRadius = function(newRadius){
    if(newRadius < minRad)
        newRadius = minRad;
    else if(newRadius > maxRad)
        newRadius = maxRad;
    radius = newRadius;
    ctx.lineWidth = radius * 2;

    radSpan.innerHTML = radius;
}

decRad.addEventListener("click", function(event){
    setRadius(radius - interval);
});
incRad.addEventListener("click", function(event){
    setRadius(radius + interval);
});

// eraser

eraser.addEventListener("click", function(event){
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#FFFFFF"
});


//colors

var colors = ["black", "red", "orange", "yellow" , "green", "blue", 
                "orange", "indigo", "violet", "pink"];

var swatches = document.getElementById("colors");

swatches.addEventListener("click", function(event){
    ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle = ctx.fillStyle;
});
