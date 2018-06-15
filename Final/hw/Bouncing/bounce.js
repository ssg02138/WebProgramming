// Bounce.js

var COUNT = 20;
var balls =[];
var canvas; 

var mouseX=0;
var mouseY=0;

var prevOnload = window.onload; // window.onload 중복 사용

window.onload = function() {
    prevOnload();   // window.onload 중복 사용
    canvas = document.getElementById("bo_my_canvas");
    canvas.onmousemove = function(evt){
        var rect = canvas.getBoundingClientRect();
        mouseX =  evt.clientX - rect.left;
        mouseY =  evt.clientY - rect.top;
    }
    canvas.onmouseout = function(evt){
     
        mouseX =  -1
        mouseY =  -1
    }

    for(x=0; x<COUNT; x++){
        balls.push(new Ball (canvas.width,canvas.height));
    }
   myLoop();
}

function myLoop(){

    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(x=0; x<balls.length; x++){
        balls[x].draw(ctx)
        balls[x].update()
    }
    setTimeout(myLoop,1000/70);
   
}

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function   Ball (width,height){

    this.width = width;
    this.height = height;


    this.x = parseInt(Math.random() * width) ;
    this.y = parseInt(Math.random() * height) ;
    this.radius = 5 + parseInt(Math.random() * 15) ;
    this.color = getRndColor();
    
    this.x_speed = 2 + parseInt(Math.random()*3);  
    this.y_speed = this.x_speed;
    
    
    
    
    this.update= function(){
        if(mouseX>0 && mouseY >0){ 
        if(Math.abs(mouseX -this.x ) < this.radius  && Math.abs(mouseY -this.y ) < this.radius  ){
            if(this.radius <50 )
                this.radius +=5;            
        }else{
            if(this.radius >10 )
                this.radius +=-1;            
        }
    }


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

    this.draw = function (ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle= this.color; 
        ctx.fill();
    }

}



