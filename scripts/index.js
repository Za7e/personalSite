const color = document.querySelector('.doorColor');
const plantVid = document.getElementById('thistleVideo');
const cloudVid = document.getElementById('cloudVideo');

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