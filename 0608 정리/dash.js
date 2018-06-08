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
        var list = document.querySelector("#dash");
        const tr = document.createElement("tr");
        const td_team = document.createElement("td");
        const td_description = document.createElement("td");
        const td_points = document.createElement("td");

        td_team.innerHTML=snap.child("team").val();
        td_description.innerHTML=snap.child("description").val();
        td_points.innerHTML=snap.child("points").val();

        tr.appendChild(td_team);
        tr.appendChild(td_description);
        tr.appendChild(td_points);

        tr.id = snap.key;
        list.appendChild(tr);
    });
}

window.onload = function(){
    
    setupFirebase();
    var btnSave = document.querySelector("#save");
   
    btnSave.addEventListener("click", function(){
        var team = document.querySelector("#team").value;
        var description = document.querySelector("#description").value;
        var points = document.querySelector("#points").value;

        firebase.database().ref().child("products").push().set({
            team:team,
            description:description,
            points:points
        });

    });
}