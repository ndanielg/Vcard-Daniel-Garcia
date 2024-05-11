function cambiarModo() {
    var cuerpoweb = document.body;
    cuerpoweb.classList.toggle("oscuro");

    var contenedor = document.getElementsByClassName('trabajo');
    for (var i = 0; i < contenedor.length; i++) {
        contenedor[i].classList.toggle("trabajo-oscuro");
    }

    var iconos = document.getElementsByClassName('icono');
    for (var i = 0; i < iconos.length; i++) {
        iconos[i].classList.toggle("icono-oscuro");
    }

    var iconos = document.getElementsByClassName('logo');
    for (var i = 0; i < iconos.length; i++) {
        iconos[i].classList.toggle("lista-oscura");
    }

    var iconos = document.getElementsByClassName('barra-busqueda');
    for (var i = 0; i < iconos.length; i++) {
        iconos[i].classList.toggle("busqueda-oscura");
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
// Filtros
// Filtros
// Filtros
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});
