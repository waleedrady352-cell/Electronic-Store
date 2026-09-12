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