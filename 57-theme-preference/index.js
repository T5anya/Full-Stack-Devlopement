
function DrakorLight() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    DrakorLight();
}


// Listen for system theme changes
window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function () {

        if (!localStorage.getItem("theme")) {
            DrakorLight();
        }

    });


// Theme toggle button
const btn = document.querySelector("#themeToggle");

btn.addEventListener("click", function () {

    if (document.body.classList.contains("dark")) {

        document.body.classList.remove("dark");
        document.body.classList.add("light");

        localStorage.setItem("theme", "light");

    } else {

        document.body.classList.remove("light");
        document.body.classList.add("dark");

        localStorage.setItem("theme", "dark");

    }

});