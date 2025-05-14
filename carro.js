// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

// Función para mostrar el modal del carrito
function verCarrito() {
  document.getElementById('carrito-modal').style.display = 'flex';
  mostrarCarrito();
}

// Función para cerrar el modal del carrito
function cerrarCarrito() {
  document.getElementById('carrito-modal').style.display = 'none';
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
  mostrarCarrito();
}

// Función para actualizar el contador y total del carrito
function actualizarCarrito() {
  document.getElementById('contador-carrito').textContent = carrito.length;
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  document.getElementById('total-carrito').textContent = total;
}

// Función para mostrar los productos en el modal del carrito
function mostrarCarrito() {
  const lista = document.getElementById('carrito-lista');
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
  actualizarCarrito();
}
