window.onload = function(){
    a = document.getElementById("box1");
    a.style.backgroundColor="#f00";
    a.onmouseover = function(){
        this.style.backgroundColor = "#00f";
    }
    a.onmouseout = function(){
        this.style.backgroundColor = "#f00";
    }
}