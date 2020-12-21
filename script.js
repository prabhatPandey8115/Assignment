"use strict";

/*
for the email and phone validator i have used the regex and for the other where size is required there i property of size in the html.

*/

let Demo = () => {
    if (document.getElementById("email").checked || document.getElementById("phone").checked) {
        if (document.getElementById("email").checked) {
            document.getElementById('emailDiv').style.display = "inline";
        }
        else {
            document.getElementById('emailDiv').style.display = "none";
        }
        if (document.getElementById("phone").checked) {
            document.getElementById('phoneDiv').style.display = "inline";
        }
        else {
            document.getElementById('phoneDiv').style.display = "none";
        }

    }
    else {
        document.getElementById('emailDiv').style.display = "none";
        document.getElementById('phoneDiv').style.display = "none";
    }
}
function emailValidator() {
    let inputText = document.CustomerData.emailField.value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {

    }
    else {
        document.getElementById("emailError").innerHTML = "You must enter valid email format";
    }
}
function phoneValidator() {
    let inputText = document.CustomerData.phoneField.value;
    var mailformat = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if (inputText.match(mailformat)) {

    }
    else {
        document.getElementById("phoneError").innerHTML = "You must enter valid phone number";
    }
}