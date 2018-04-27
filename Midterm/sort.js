var pb = new Array();

function updateTable(p){
    mytable = document.getElementById('insertTable');
    row = mytable.insertRow(mytable.rows.length);

    cell1 =row.insertCell(0);
    cell2 =row.insertCell(1);
    cell3 =row.insertCell(2);

    cell1.innerHTML = '<td>'+p.lastName+'</td>';
    cell2.innerHTML = '<td>'+p.firstName+'</td>';
    cell3.innerHTML = '<td>'+p.phoneNumber+'</td>';
}

function idSort(){
    var p = new Object();   // DataBase 사전 준비
    p.firstName = document.getElementById("name").value;
    p.phoneNumber = document.getElementById("price").value;

    pb.push(p);

    updateTable(p);

    mytable = document.getElementById('insertTable');
    row = mytable.insertRow(mytable.rows.length);

    pb.sort(function(a, b) { // 오름차순
        return a.lastName < b.lastName ? -1 : a.lastName > b.lastName ? 1 : 0;
    });
    
    for(var i =1; i<=pb.length; i++){
        var x = mytable.rows[i].cells;
        x[0].innerHTML=i;
        x[1].innerHTML=pb[i-1].firstName;
        x[2].innerHTML=pb[i-1].phoneNumber;
    }
}

function nameSort(){
    var p = new Object();   // DataBase 사전 준비
    p.firstName = document.getElementById("name").value;
    p.phoneNumber = document.getElementById("price").value;

    pb.push(p);

    updateTable(p);

    mytable = document.getElementById('insertTable');
    row = mytable.insertRow(mytable.rows.length);

    pb.sort(function(a, b) { // 오름차순
        return a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
    });
    
    for(var i =1; i<=pb.length; i++){
        var x = mytable.rows[i].cells;
        x[0].innerHTML=i;
        x[1].innerHTML=pb[i-1].firstName;
        x[2].innerHTML=pb[i-1].phoneNumber;
    }
}

function priceSort(){
    var p = new Object();   // DataBase 사전 준비
    p.firstName = document.getElementById("name").value;
    p.phoneNumber = document.getElementById("price").value;

    pb.push(p);

    updateTable(p);

    mytable = document.getElementById('insertTable');
    row = mytable.insertRow(mytable.rows.length);

    pb.sort(function(a, b) { // 오름차순
        return a.phoneNumber < b.phoneNumber ? -1 : a.phoneNumber > b.phoneNumber ? 1 : 0;
    });
    
    for(var i =1; i<=pb.length; i++){
        var x = mytable.rows[i].cells;
        x[0].innerHTML=i;
        x[1].innerHTML=pb[i-1].firstName;
        x[2].innerHTML=pb[i-1].phoneNumber;
    }
}