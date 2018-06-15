function ck_age() { 
    var year=parseInt(new Date().getFullYear()); 
    var age=document.getElementsByName('birth'); 
    var ck=parseInt(age[0].value.substr(0,4)); 
    form.age.value=(year-ck)+1; // 우리나라 나이 표시 +1 더함 
  }  

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
        const td_ln = document.createElement("td");
        const td_fn = document.createElement("td");
        const td_bday = document.createElement("td");
        const td_age = document.createElement("td");
        const td_pos = document.createElement("td");
        // 삭제하기 위해 생성한 변수들
        const td_action = document.createElement("td");
        const action = document.createElement("a");

        td_id.innerHTML=snap.child("id").val();
        td_ln.innerHTML=snap.child("ln").val();
        td_fn.innerHTML=snap.child("fn").val();
        td_bday.innerHTML=snap.child("bday").val();

        // 나이 계산
        var birthday = new Date(snap.child("bday").val());
        var today = new Date();
        var years = today.getFullYear() - birthday.getFullYear();
        birthday.setFullYear(today.getFullYear());
        if (today < birthday)
        {
            years--;
        }
        td_age.innerHTML=years;


        td_pos.innerHTML=snap.child("pos").val();
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
        tr.appendChild(td_ln);
        tr.appendChild(td_fn);
        tr.appendChild(td_bday);
        tr.appendChild(td_age);
        tr.appendChild(td_pos);
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
        var ln = document.querySelector("#ln").value;
        var fn = document.querySelector("#fn").value;
        var bday = document.querySelector("#bday").value;
        var pos = document.querySelector("#pos").value;

        firebase.database().ref().child("products").push().set({
            id:id,
            ln:ln,
            fn:fn,
            bday:bday,
            pos:pos
        });

    });

    
}