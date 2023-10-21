// En este archivo se maneja la navegación de la aplicación, se cambia el "hash" de la URL y se ejecuta una función dependiendo del "hash" que se encuentre en la URL
let infiniteScroll;                                                                                // Esta función guardará una función para paginación con "Infinite Scroll" haciendo la solicitud a la API con su respectiva URL

irRegistrarPacienteBtn.addEventListener('click', () => location.hash = '#register');
registrarPacienteBtn.addEventListener('click', () => location.hash = '#modificarPerfil');
modificarPacienteBtn.addEventListener('click', () => location.hash = '#paciente/cita');
hacerCitaBtn.addEventListener('click', () => location.hash = '#paciente/comprar');
siguienteBtn.addEventListener('click', () => location.hash = '#paciente/pedido');
homeLabel.addEventListener('click', () => location.hash = "#home");                             // Si hace click en el título de la página nos devuelve al Home


window.addEventListener('hashchange', navigator, false);                                        // Se ejecuta la función "navigator" cada vez que se cambia el "hash" #
window.addEventListener('scroll', infiniteScroll, {passive: false});                            // Agregamos un evento a la "Window" que ejecuta la función de "infiniteScroll" cada que hagamos "scroll" el tercer parametro es para evitar el "preventDefault()"
window.addEventListener('DOMContentLoaded', () => {                                             // Para un buen funcionamiento de la flecha blanca, le agrego un Evento al objeto Window cada vez que se carge el contenido del DOM, Se ejecuta la función "navigator" cuando se cargan todos los componentes de HTML
  navigator();
  window.history.pushState({ loadUrl: window.location.href }, null, '');                        // Agregando un estado de carga inical, cuando se cambie un "hostname" a otro o vengamos de otro "hostname" entonces podemos agregar ese href de carga inicial con el "href", Esa propiedad de carga de estado la he llamado "loadUrl" entonces si cargamos la aplicación desde su inicio el "href" no deberá contener ningún tipo de "hash" pero si venimos de Youtube por ejemplo entonces el "loadUrl" nos dará todo el "href" se esa ruta de carga con todo y "hash"
}, false);                                                                                      // Para manejarlo con "Bubbling" el tercer parámetro lo colocamos como "false"

searchForm.addEventListener('submit', (event) => {                                              // Con esta instrucción le digo al formulario que cuando se haga un "submit/enter" haga un "preventDefault()"
  event.preventDefault();
});

searchFormInput.addEventListener('keyup', (event) => {                                          // A la cajita de busqueda le agrego un evento para que cada vez que se de un "Enter" modifique la URL con el "hash" con el valor de lo que escribió el usuario
  if(event.key === 'Enter') location.hash = `#search=${searchFormInput.value.trim()}`;    
});


function navigator () {                                                                         // Revisa con que "hash" # termina la URL y ejecuta una función dependiendo del "hash"
  if(infiniteScroll) {                                                                          // Cuando entramos a navegación removemos de "window" el evento de "scroll" y la función/variable "infiniteScroll" la regremos a su valor inicial de "undefined"
    window.removeEventListener('scroll', infiniteScroll, {passive: false});
    infiniteScroll = undefined;
  }

  location.hash.startsWith('#register')  ? registrarPage()       :                              // En vez de anidar y escribir tanso "if/else if" puedo "anidar Operadores Ternarios" para hacer las verificaciones
  location.hash.startsWith('#modificarPerfil') ? modificarPerfilPage()       :
  location.hash.startsWith('#paciente/cita')  ? solicitarCitaPage() :
  location.hash.startsWith('#paciente/comprar') ? compraMedicinaPage() :
  location.hash.startsWith('#paciente/pedido') ? hacerPedidoPage() :
  homePage();

  document.body.scrollTop = 0;                                                                  // Con estas dos lines de código, empleo el métedo "scrollTop()" para asegurarme que cada vez que entro a una nueva categoria o vista se abra en la parte arriba y evitar que se muestre al inicio en cualquier otra parte
  document.documentElement.scrollTop = 0;                                                       // Esta 2 línea hacen lo mismo pero por temas de soporte a varios navegadores lo escribo de otra forma para que cubra a cualquier navegador (Parece ser Safari)
  
  if(infiniteScroll) window.addEventListener('scroll', infiniteScroll, {passive: false});       // Al haber cambiado de página y haber ejecutado la función "infiteScroll" dentro de las funciónes de cada sección, volvemos a agregar el evento a "window" con la variable/función "infiteScroll" que ahora tiene el valor de la función correspondiente para aplicar un "infite scroll"
}


function homePage() {                                                                           // Muestra la sección principal de Home
  console.log('Home!');
  loginSection.classList.remove('inactive');
  modificarPacienteSection.classList.add('inactive');
  registrarPacienteSection.classList.add('inactive');
  hacerCitaSection.classList.add('inactive');
  medicamentosSection.classList.add('inactive');
  hacerPedidoSection.classList.add('inactive');
};


function registrarPage() {                                                                         
  console.log('register!');
  registrarPacienteSection.classList.remove('inactive');
  loginSection.classList.add('inactive');
  modificarPacienteSection.classList.add('inactive');                     
};


function modificarPerfilPage() {                                                                         
  console.log('modificar!');
  modificarPacienteSection.classList.remove('inactive');
  loginSection.classList.add('inactive');
  registrarPacienteSection.classList.add('inactive');
};


function solicitarCitaPage() {                                                                   
  console.log('solicitar cita!');
  hacerCitaSection.classList.remove('inactive');
  modificarPacienteSection.classList.add('inactive');
  loginSection.classList.add('inactive');
  registrarPacienteSection.classList.add('inactive');
};


function compraMedicinaPage() {                                                                     
  console.log('comprar medicina!');
  medicamentosSection.classList.remove('inactive');
  hacerCitaSection.classList.add('inactive');
  modificarPacienteSection.classList.add('inactive');
  loginSection.classList.add('inactive');
  registrarPacienteSection.classList.add('inactive');
};


function hacerPedidoPage() {                                                                     
  console.log('hacer pedido!');
  hacerPedidoSection.classList.remove('inactive');
  medicamentosSection.classList.add('inactive');
  hacerCitaSection.classList.add('inactive');
  modificarPacienteSection.classList.add('inactive');
  loginSection.classList.add('inactive');
  registrarPacienteSection.classList.add('inactive');
};