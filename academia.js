var i = 0, w = 0;
var labels = [
    "Arduino", "Java", "Visual Basic", "microcontroladores", "electrotecnia",
    "matemática", "html", "diseño 3D", "impresión 3D"];
var speed = 50; /* The speed/duration of the effect in milliseconds */
var typing = true;

// Contact modal
var modalA = document.getElementById('contactModalA');
var btnA = document.getElementById('btnContactA');
var spanA = document.getElementsByClassName('closeA')[0];

function typeWriter() {
    if (typing) {
        //Type
        if (i < labels[w].length) {
            document.getElementById("autoText").innerHTML += labels[w].charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typing = false;
            setTimeout(typeWriter, 2000);
        }
    } else {
        //Delete
        if (i > 0) {
            document.getElementById("autoText").innerHTML = document.getElementById("autoText").innerHTML.slice(0, -1);
            i--;
            setTimeout(typeWriter, speed);
        } else {
            w = w < labels.length - 1 ? ++w : 0;
            typing = true;
            setTimeout(typeWriter, 400);
        }
    }
}

btnA.onclick = function () {
    document.body.classList.remove('bgUnBlur')
    document.body.classList.add('bgBlur');
    modalA.style.display = 'grid';
}

spanA.onclick = function () {
    document.body.classList.remove('bgBlur');
    document.body.classList.add('bgUnBlur')
    modalA.style.display = 'none';
}