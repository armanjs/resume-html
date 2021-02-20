console.log("hello");

function submission(){
  alert("the button was pressed");
}

function protect(){
  var password = "armans";
  var enteredpass =
  prompt("enter password to view grades");
  if (enteredpass == password){
    alert("correct password, redirecting");
    return true;
  } else {
    alert("incorrect password");
    return false;
    //location.reload();
  }

}
