const apiProductosPintura = "../json/matPinturaArray.json"

const contenedorTarjetas = document.getElementById("productos-container");

fetch(apiProductosPintura)
//primer then => recibe respuesta de la conexion
    .then(respuesta => respuesta.json())
    //toma los datos frente a la respuesta(hacer algo con los datos)
    .then((datos)=>{
        console.log(datos) //Verifico que todo se cargue bien
        crearTarjetasProductosInicio(datos);
    })
    .catch(error => console.log(error))
    .finally(()=> console.log("proceso finalizado"));
  


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
