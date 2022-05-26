// abrir menu
function openNav() {
  // llama a la etiqueta con id "openNavEvent" y modifica el ancho.
  document.getElementById('openNavEvent').style.width = '300px';
}

let btnOpen = document.getElementById('open');
btnOpen.addEventListener('click', () => {
  // llamando a la funcion "openNav"
  openNav();
});

// cerrar menu
function closeNav() {
  // llama a la etiqueta con id "openNavEvent" y modifica el ancho.
  document.getElementById('openNavEvent').style.width = '0px';
}

let btnClose = document.getElementById('close');
btnClose.addEventListener('click', () => {
  // llama a la funcion "closeNav"
  closeNav();
});
