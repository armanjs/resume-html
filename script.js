console.log("hello");

function submission() {
    alert("the button was pressed");
    let option = document.getElementById("ProjectSelection").value;
    if (option === "project1"){
      window.location.replace("project1.html");
    } else if (option === "project2"){
      window.location.replace("project2.html");
    }
    //let project = decument.forms["projects"]["project"].value;
    //location.replace(project);
}

function goBack(){
  location.href = "resume.html";
}

function protect() {
    var password = "arman";
    var enteredpass = prompt("enter password to view grades");
    if (enteredpass === password) {
        alert("correct password, redirecting");
        location.href = "transcript.html";
    } else {
        alert("incorrect password");
    }
}
