document.getElementById("botonTexto").onclick = function(){
    document.getElementById("nomBoton").innerHTML="Tocaste el Botón!!!";
}

document.getElementById("botonFecha").onclick = function(){
    document.getElementById("botonHora").innerHTML=Date();
}

document.addEventListener('click', function() {
    document.getElementById("sensorDeClick").innerHTML = "Hubo por lo menos un CLICK!!!";
    document.body.style.backgroundColor= 'yellow';
})

document.getElementById("botonHide").onclick = function(){
    document.getElementById("botonHora").style.display='none';
}

document.getElementById("botonShow").onclick = function(){
    document.getElementById("botonHora").style.display='initial';
}

document.getElementById("botonHideClick").onclick = function(){
    document.getElementById("sensorDeClick").style.display='none';
}

document.getElementById("botonShowClick").onclick = function(){
    document.getElementById("sensorDeClick").style.display='initial';
}