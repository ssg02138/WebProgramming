var w_score=0;
var c_score=0;

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
        var war = document.querySelector("#war");
        var cav = document.querySelector("#cav");
        

        var list = document.querySelector("#game");
        const tr = document.createElement("tr");
        const td_description = document.createElement("td");
        const td_points = document.createElement("td");

        
        if(snap.child("team").val()=="Cavaliers"){
            c_score=parseInt(c_score)+parseInt(snap.child("points").val());
        }
        if(snap.child("team").val()=="Warriors"){
            w_score=parseInt(w_score)+parseInt(snap.child("points").val());
        }
        td_description.innerHTML=snap.child("team").val()+"-"+snap.child("description").val();
        td_points.innerHTML=snap.child("points").val();

        tr.appendChild(td_description);
        tr.appendChild(td_points);

        tr.id = snap.key;
        list.appendChild(tr);
        war.innerHTML=w_score;
        cav.innerHTML=c_score;
        
    });
    
}

window.onload = function(){
    
    setupFirebase();
    
}