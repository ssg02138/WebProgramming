// Initialize Firebase
function setupFirebase(){
    var config = {
        apiKey: "AIzaSyBSs68dNhF7hooGTl_ByX8YBd6l1VpPgXk",
        authDomain: "webproject-61336.firebaseapp.com",
        databaseURL: "https://webproject-61336.firebaseio.com",
        projectId: "webproject-61336",
        storageBucket: "webproject-61336.appspot.com",
        messagingSenderId: "806596204972"
    };
    firebase.initializeApp(config);

    //firebase database event
    var ref = firebase.database().ref("products");
    ref.on("child_added", function(snap){
        var list = document.querySelector("#list");
        const tr = document.createElement("tr");
        const td_id = document.createElement("td");
        const td_name = document.createElement("td");
        const td_price = document.createElement("td");
        // 삭제하기 위해 생성한 변수들
        const td_action = document.createElement("td");
        const action = document.createElement("a");

        td_id.innerHTML=snap.child("id").val();
        td_name.innerHTML=snap.child("name").val();
        td_price.innerHTML=snap.child("price").val();
        action.innerHTML="Delete";
        action.href="#";
        // 데이터베이스의 ID값 찾기
        action.onclick=function (){
            //alert(this.parentElement.parentElement.id);
            var pid = this.parentElement.parentElement.id;
            var product = firebase.database().ref("products").child(pid);

            // 버튼누르면 해당하는 데이터베이스 데이터 삭제하기
            product.remove();
            // 버튼누르면 해당하는 html 코드 삭제하기
            var del_tr = document.querySelector("#"+pid);
            del_tr.remove();
        };
        td_action.appendChild(action);

        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_price);
        tr.appendChild(td_action);

        tr.id = snap.key;
        list.appendChild(tr);
    });
}

window.onload = function(){
    setupFirebase();
    var btnSave = document.querySelector("#button_save");
    // btnSave.onclick = function(){} 옛날 방법
    btnSave.addEventListener("click", function(){
        var id = document.querySelector("#id").value;
        var name = document.querySelector("#name").value;
        var price = document.querySelector("#price").value;

        console.log(id);
        console.log(name);
        console.log(price);

        firebase.database().ref().child("products").push().set({
            id:id,
            name:name,
            price:price
        });

    });

    
}