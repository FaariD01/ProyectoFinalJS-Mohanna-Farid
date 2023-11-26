class Producto{
    constructor(codProd, nombre, marca, precio,img){
        this.codProd = codProd;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.img = img;
    }
}

const CEMENTO_AVELLANEDA_50KG = new Producto("000000001", "Cemento Avellaneda 50Kg", "Hidralit", 5000,);

const ARRAY_PRODUCTOS = [CEMENTO_AVELLANEDA_50KG]

ARRAY_PRODUCTOS.forEach(producto =>{
    let section = document.createElement("section");
    section.className = "matConstru";
    section.innerHTML = `
                    <p>${producto.marca}</p>
                    <p>${producto.nombre}</p>
                    <p>SKU: ${producto.codProd}</p>
                    <p>${producto.precio}</p>
    
    
    `
    divContenedor.appendChild(section);
});