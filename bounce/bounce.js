// Bounce.js

var COUNT = 0;
var balls =[];
var canvas;


function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

window.onload = function() {
    canvas = document.getElementById("my_canvas");
    let ctx = canvas.getContext("2d");
    setInterval(function(){
        COUNT = document.getElementsByName("count")[0].value;
        for(x=0; x<COUNT; x++){
            balls.push(new Ball (canvas.width,canvas.height));
        }
    }, 3000);
    setInterval(function(){
	if(balls.length!=0){
	for(x=0; x<balls.length; x++){
	    if(balls[x].radius>10){
	        balls[x].radius--;
	    }
	}
	}
    }, 100);
    setTimeout(mouse,300);
    setTimeout(movie,1000/30);
}

function mouse(){
        canvas.addEventListener("mousemove", function(event){
	for(x=0; x<balls.length; x++){
	    if(balls[x].radius<51){
	        balls[x].radius++;
	    }
	}
        });

}

function   Ball (width,height){
    this.width = width;
    this.height = height;
    this.radius = 10 + parseInt(Math.random() * 20) ;
    this.x = this.radius+parseInt(Math.random() * (width-this.radius*2)) ;
    this.y = this.radius+parseInt(Math.random() * (height-this.radius*2)) ;
    this.color = getRndColor();
    this.x_speed = 2 + parseInt(Math.random()*5); 
    this.y_speed = this.x_speed;
    this.update= function(){
        if(this.x>(this.width-this.radius) )
            this.x_speed = this.x_speed * -1;
        if(this.x<this.radius)
            this.x_speed = this.x_speed * -1;
        this.x+=this.x_speed;

        if(this.y>(this.height-this.radius) )
            this.y_speed = this.y_speed * -1;
        if(this.y<this.radius)
            this.y_speed = this.y_speed * -1;
        this.y+=this.y_speed;
    }

}

function movie(){
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    for(x=0; x<balls.length; x++){
        ctx.beginPath();
        ctx.arc(balls[x].x, balls[x].y, balls[x].radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle= balls[x].color;
        ctx.fill();
        balls[x].update();
    }
    setTimeout(movie,1000/30);
}
