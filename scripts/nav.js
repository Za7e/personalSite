const nav = document.getElementById("navBar");

function openNav() {
    if (nav.className === "navigation") {
        nav.className += " responsive";
    } else {
        nav.className = "navigation";
    }
}

function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
};

window.addEventListener('resize', function () {
    setDocHeight();
});
window.addEventListener('orientationchange', function () {
    setDocHeight();
});

setDocHeight();