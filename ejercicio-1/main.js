document.getElementById('cambiarColor').addEventListener('click', function() {
    var textoElemento = document.getElementById('texto');
    if (textoElemento.classList.contains('purple')) {
      textoElemento.classList.remove('purple');
      textoElemento.classList.add('orange');
    } else {
      textoElemento.classList.remove('orange');
      textoElemento.classList.add('purple');
    }
  });
  
  