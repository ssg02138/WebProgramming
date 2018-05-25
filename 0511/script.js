//pure javascript code
window.onload=function(){
    var btnShow = document.querySelector("#btnShow");
    var btnHide = document.querySelector("#btnHide");

    btnShow.addEventListener("click", function(ev){
        let mc = document.querySelector("#mycircle");
        mc.style.display="";
    });
    btnHide.addEventListener("click", function(ev){
        let mc = document.querySelector("#mycircle");
        mc.style.display="none";
    });

    var mysvg = document.querySelector("#mysvg");
    mysvg.addEventListener("click", function(ev){
        let xy = document.getElementById("xy");
        let mc = document.querySelector("#mycircle");
        xy.innerHTML = event.clientX + " " + event.clientY;

        loc = this.getBoundingClientRect();
        x = event.clientX - loc.x;
        y = event.clientY - loc.y;
        mc.setAttribute("cx", parseInt(x));
        mc.setAttribute("cy", parseInt(y));
    });
    
}

$(document).ready(function(event){
    $("#btnS").click(function(event){
        $("#mycircle").show();
    });
    $("#btnH").click(function(event){
        $("#mycircle").hide();
    });
});