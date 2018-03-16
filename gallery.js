/* gallery.js*/

var images = new Array('iu.jpg','iu2.jpg','iu3.jpg')
var start = 0;

document.getElementById("left").onclick=function(){
    start--;
    if(start<0) start=images.length-1;
    document.getElementById("myImage").src=images[start];
}

document.getElementById("right").onclick=function(){
    start++;
    if(start>images.length-1) start=0;
    document.getElementById("myImage").src=images[start];
}