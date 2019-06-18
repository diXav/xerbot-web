var modal = document.getElementById('contactModal');
var btn = document.getElementById('btnContact');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    document.body.classList.remove('bgUnBlur')
    document.body.classList.add('bgBlur');
    modal.style.display = 'grid';
}

span.onclick = function () {
    document.body.classList.remove('bgBlur');
    document.body.classList.add('bgUnBlur')
    modal.style.display = 'none';
}