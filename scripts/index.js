const color = document.querySelector('.doorColor');
const plantVid = document.getElementById('thistleVideo');
const cloudVid = document.getElementById('cloudVideo');
const nav = document.getElementById("navBar");

function backgroundColor(a) {
    color.style.backgroundColor = a;
}

function plantVideo() {
    plantVid.classList.toggle('hidden');
    if (!cloudVid.classList.contains('hidden')) {
        cloudVid.classList.add('hidden');
    }
}
function cloudVideo() {
    cloudVid.classList.toggle('hidden');
    if (!plantVid.classList.contains('hidden')) {
        plantVid.classList.add('hidden');
    }
}

function showmenu() {
    var x = document.getElementById('myUL');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function openNav() {
    if (nav.className === "navigation") {
        nav.className += " responsive";
    } else {
        nav.className = "navigation";
    }
}