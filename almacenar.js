// Selección de los elementos del DOM
const inputItem = document.getElementById('item');
const agregarBtn = document.getElementById('agregar');
const limpiarBtn = document.getElementById('limpiar');
const contenedor = document.getElementById('contenedor');

// Función para obtener los ítems desde localStorage
function obtenerItems() {
    const itemsGuardados = localStorage.getItem('items');
    return itemsGuardados ? JSON.parse(itemsGuardados) : [];
}

// Función para guardar los ítems en localStorage
function guardarItems(items) {
    localStorage.setItem('items', JSON.stringify(items));
}

// Función para agregar un ítem a la lista visualmente
function agregarItem(item) {
    const li = document.createElement('li');
    li.textContent = item;
    li.classList.add('list-group-item'); // Clase de Bootstrap para estilo
    contenedor.appendChild(li);
}

// Función para mostrar los ítems almacenados en la lista al cargar la página
function mostrarItems() {
    const items = obtenerItems();
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los ítems
    items.forEach(item => agregarItem(item));
}

// Función para manejar el evento de agregar un nuevo ítem
agregarBtn.addEventListener('click', () => {
    const nuevoItem = inputItem.value.trim();
    if (nuevoItem) {
        const items = obtenerItems();
        items.push(nuevoItem);
        guardarItems(items);
        agregarItem(nuevoItem); // Agregar el ítem visualmente
        inputItem.value = ''; // Limpiar el campo de entrada
    }
});

// Función para limpiar la lista y el localStorage
limpiarBtn.addEventListener('click', () => {
    localStorage.removeItem('items');
    contenedor.innerHTML = ''; // Limpiar la lista visualmente
});

// Mostrar los ítems almacenados al cargar la página
document.addEventListener('DOMContentLoaded', mostrarItems);