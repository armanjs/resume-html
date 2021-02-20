console.log("hello");

function submission() {
    alert("the button was pressed");
}

<<<<<<< HEAD
function protect(){
  var password = "armans";
  var enteredPass = prompt("enter password to view grades");
  if (enteredPass == password){
    alert("correct password, redirecting");
  } else {
    alert("incorrect password");
      location.replace("main_resume.html");
  }
=======
function protect() {
    var password = "armans";
    var enteredpass = prompt("enter password to view grades");
    if (enteredpass === password) {
        alert("correct password, redirecting");
        location.href = "transcript.html";
    } else {
        alert("incorrect password");
    }

>>>>>>> c98c75cb8cc08ef834622c538410d4ee3c8a416d
}
