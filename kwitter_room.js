
var firebaseConfig = {
      apiKey: "AIzaSyBzsEF022tkG14RQiE5kSYTL6rVKcQIph4",
      authDomain: "website-55fa2.firebaseapp.com",
      databaseURL: "https://website-55fa2-default-rtdb.firebaseio.com",
      projectId: "website-55fa2",
      storageBucket: "website-55fa2.appspot.com",
      messagingSenderId: "1092961125806",
      appId: "1:1092961125806:web:58fb00871da390243c343f"
    };
    
    // Initialize Firebase
    firebase.intializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}