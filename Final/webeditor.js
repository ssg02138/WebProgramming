//g = document.getElementById("go");
g = document.querySelector("#go");

// f = document.querySelector("#myframe");
f = document.getElementById("myframe");

// source
s = document.querySelector("#source");

//RUN BUTTON CLICK
function update(){
    //alert(s.value);
    fdoc = f.contentDocument || f.contentWindow.document;
    
    //fdoc.body.innerHTML = s.value;
    fdoc.open();
    fdoc.write(editor.getValue());
    fdoc.close();     
}
  //the editor
var  editor = ace.edit("source");
editor.setTheme("ace/theme/github");
editor.session.setMode("ace/mode/html");

editor.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`);

editor.session.on('change', function(delta) {
    update();
});