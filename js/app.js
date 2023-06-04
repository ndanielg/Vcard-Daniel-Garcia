function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro");
    
    var contenedor = document.getElementsByClassName('perfil');
    for (var i = 0; i < contenedor.length; i++) {
        contenedor[i].classList.toggle("perfil-oscuro");
    }
    
    var iconos = document.getElementsByClassName('icono');
    for (var i = 0; i < iconos.length; i++) {
        iconos[i].classList.toggle("icono-oscuro");
    }

    var lista = document.getElementsByClassName('serv-datos');
     for (var i = 0; i < lista.length; i++) {
        lista[i].classList.toggle("lista-oscura");
    }

    var info = document.getElementsByClassName('info');
     for (var i = 0; i < info.length; i++) {
        info[i].classList.toggle("info-oscura");
    }

    var job = document.getElementsByClassName('job');
     for (var i = 0; i < job.length; i++) {
        job[i].classList.toggle("job-oscuro");
    }

    var dot = document.getElementsByClassName('dot');
     for (var i = 0; i < dot.length; i++) {
        dot[i].classList.toggle("dot-oscuro");
    }
}
