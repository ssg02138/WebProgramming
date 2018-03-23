/* phonejs.js*/

var pb = new Array();

function removeRow(r){ 
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('insertTable').deleteRow(i);
}

function updateTable(p){
    document.getElementById();
}

function tablesort(){
    this.name = "";
}

document.getElementById("btnSave").onclick=function(){
    lastName = document.getElementById("ln").value;
    firstName = document.getElementById("fn").value;
    phoneNumber = document.getElementById("phone").value;
    

    // table 삭제 후 배열 입력으로 대체
    /*
    table = document.getElementById("insertTable");
    tr = document.createElement("tr");
    */
    var p = new Object();   // DataBase 사전 준비
    p.lastName = lastName;
    p.firstName = firstName;
    p.phoneNumber = phoneNumber;
    pb.push(p);
    updateTable(p);
    /*
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td1.innerText = p.lastName;
    td2.innerText = p.firstName;
    td3.innerText = p.phoneNumber;

    td4.innerHTML = "<input type='button' name=cmdDelete value='Del' onClick='removeRow(this);'>";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    */
}