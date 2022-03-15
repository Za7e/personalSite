const album = document.querySelector('.album');
const albumHolder = document.querySelector('.albumHolder');
const demosUp = document.querySelector('.demosUp');
const demosUpHolder = document.querySelector('.demosUpHolder');
const demosDown = document.querySelector('.demosDown');
const demosDownHolder = document.querySelector('.demosDownHolder');
const color = document.querySelector('.container');


function backgroundColor(a) {
    color.style.backgroundColor = a;
}

album.onclick = function () {
    albumHolder.classList.toggle('hidden');
    demosUpHolder.classList.add('hidden');
    demosDownHolder.classList.add('hidden');
}
demosUp.onclick = function () {
    demosUpHolder.classList.toggle('hidden');
    albumHolder.classList.add('hidden');
    demosDownHolder.classList.add('hidden');
}
demosDown.onclick = function () {
    demosDownHolder.classList.toggle('hidden');
    demosUpHolder.classList.add('hidden');
    albumHolder.classList.add('hidden');
}
