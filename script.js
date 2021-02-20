console.log("hello");

function submission(){
  alert("the button was pressed");
}

function protect(){
  var password = "armans";
  var enteredPass = prompt("enter password to view grades");
  if (enteredPass == password){
    alert("correct password, redirecting");
  } else {
    alert("incorrect password");
      location.replace("main_resume.html");
  }
}
