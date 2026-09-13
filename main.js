let toggleBtn = document.getElementById("theme-toggle");

let html = document.documentElement;


function theme() {

    if (html.getAttribute("data-theme") == "dark") {

        html.setAttribute("data-theme", "light");

    } else {

        html.setAttribute("data-theme", "dark");

    }

    toggleBtn.classList.toggle("bi-sun-fill");

    toggleBtn.classList.toggle("bi-moon-fill");

}


function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;

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

    if (age < 18) {
        alert("Age must be 18 or above");
        return false;
    }

    alert("Validation successful!");
    return true;
}