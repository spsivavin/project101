// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS
 var firebaseConfig = {
    apiKey: "AIzaSyDXbNvE9h76OCc_krUF_jyZuYBy6Vqcew8",
    authDomain: "project100-9e7ed.firebaseapp.com",
    databaseURL: "https://project100-9e7ed-default-rtdb.firebaseio.com",
    projectId: "project100-9e7ed",
    storageBucket: "project100-9e7ed.appspot.com",
    messagingSenderId: "582976031662",
    appId: "1:582976031662:web:587bf06aa24f9d4badd63f"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



