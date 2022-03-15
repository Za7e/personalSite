const nav = document.getElementById("navBar");

function openNav() {
    if (nav.className === "navigation") {
        nav.className += " responsive";
    } else {
        nav.className = "navigation";
    }
}