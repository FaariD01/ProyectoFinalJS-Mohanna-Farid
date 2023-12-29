const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en bicicletas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto"
    nuevoProducto.innerHTML = `
                                <img src="${producto.imagenProducto}" alt="Foto Producto">
                                <h2>${producto.nombreProducto}</h2>
                                <p>Precio: $${producto.precioProducto}</p>
                                <button>Agregar al carrito</button>
    
    `
    contenedorTarjetas.appendChild(nuevoProducto);
    nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(materialesPlomeria);