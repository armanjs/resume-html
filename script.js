console.log("hello");

function submission() {
    let option = document.getElementById("ProjectSelection").value;
    if (option === "project1") {
        location.href = "project1.html";
    } else if (option === "project2") {
        location.href = "project2.html";
    }
    //let project = decument.forms["projects"]["project"].value;
    //location.replace(project);
}

function goBack() {
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
