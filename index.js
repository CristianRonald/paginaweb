window.addEventListener('load', iniciar, false);


function iniciar() {
    var imagen = document.getElementById('area1');
    imagen.addEventListener('mouseover',cambio,true)
    imagen.addEventListener('mouseout',reinicio,false)
}

function cambio() {
    document.getElementById('message1').classList.add('clase1');
}
function reinicio() {
    document.getElementById('message1').classList.remove('clase1');
}