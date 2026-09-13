function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    if (email == "") {
        alert("Please enter your email");
        return false;
    }

    if (phone.length != 11) {
        alert("Phone number must be 11 digits");
        return false;
    }

    alert("Validation successful!");
    return true;
}