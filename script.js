"use strict";

/*
for the email and phone validator i have used the regex and for the other where size is required there i property of size in the html.

*/
function nameLength() {
    let nameSize = document.CustomerData.name.value;
    if ((nameSize != null) && nameSize.length <= 35) {
        document.getElementById('nameError').style.display = "none";
    }
    else {
        document.getElementById('nameError').style.display = "inline";
        document.getElementById("nameError").innerHTML = "Name Length should not be greater than 35";
    }
}
function occupationLength() {
    let occupationSize = document.CustomerData.occupation.value;
    if ((occupationSize != null) && occupationSize.length <= 25) {
        document.getElementById('occError').style.display = "none";
    }
    else {
        document.getElementById('occError').style.display = "inline";
        document.getElementById("occError").innerHTML = "Occupation Length should not be greater than 25";
    }
}
function addressLength() {
    let addressSize = document.CustomerData.address.value;
    if ((addressSize != null) && addressSize.length <= 255) {
        document.getElementById('addError').style.display = "none";
    }
    else {
        document.getElementById('addError').style.display = "inline";
        document.getElementById("addError").innerHTML = "Address Length should not be greater than 255";
    }
}
function ageValidator(text) {
    let pattern = /[\d][\d]|[\d]{1}/;
    let age = document.CustomerData.age.value;
    if ((age != null) && age <= 99 && age.match(pattern)) {
        document.getElementById('ageError').style.display = "none";
        let checkZero = !Boolean(age.key);
        console.log(checkZero);
        if (checkZero && age<=0) {
            document.getElementById('ageError').style.display = "inline";
            document.getElementById("ageError").innerHTML = "Age must be greater than 0";
        }

    }
    else if (age == '') {
        document.getElementById('ageError').style.display = "inline";
        if (age.key != undefined)
            document.getElementById("ageError").innerHTML = "Age feild can't be Blank";
        else
            document.getElementById("ageError").innerHTML = "Enter valid Age";

    }
    else {
        console.log('<<<' + age);
        document.getElementById('ageError').style.display = "inline";
        if (age > 99 || age < 0)
            document.getElementById("ageError").innerHTML = "max age value allowed 99 year";
    }
}
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

        document.getElementById('emailError').style.display = "none";
    }
    else {
        document.getElementById('emailError').style.display = "inline";
        document.getElementById("emailError").innerHTML = "You must enter valid email format";
    }
}
function phoneValidator() {
    let inputText = document.CustomerData.phoneField.value;
    var mailformat = /^()?\d{3}()?\d{3}\d{4}$/;
    if (inputText.match(mailformat)) {
        document.getElementById('phoneError').style.display = "none";
    }
    else {
        document.getElementById('phoneError').style.display = "inline";
        document.getElementById("phoneError").innerHTML = "You must enter valid phone number";
    }
}