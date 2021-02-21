console.log("hello");

function submission() {
    alert("the button was pressed");
    let project = decument.forms["projects"]["project"].value;
    location.replace(project);
}

function protect() {
    var password = "armansadeghi";
    var enteredpass = prompt("enter password to view grades");
    if (enteredpass === password) {
        alert("correct password, redirecting");
        location.href = "transcript.html";
    } else {
        alert("incorrect password");
    }
}
