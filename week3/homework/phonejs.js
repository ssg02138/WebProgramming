/* phonejs.js*/
document.getElementById("btnSave").onclick=function(){
    lastName = document.getElementById("ln").value;
    firstName = document.getElementById("fn").value;
    phoneNumber = document.getElementById("phone").value;
    
    table = document.getElementById("insertTable");
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td4.id="del";

    td1.innerText = lastName;
    td2.innerText = firstName;
    td3.innerText = phoneNumber;
    td4.innerText = "Del"
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
}