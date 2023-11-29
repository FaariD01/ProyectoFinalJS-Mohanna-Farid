class TipoProductos{

    constructor(link, img, nombreTipoProducto){
        this.link = link;
        this.img = img;
        this.nombreTipoProducto = nombreTipoProducto;
    }
}


const MATERIALES_PARA_CONSTRUCCION = new TipoProductos("../pages/pagesMatConstru.html","../assets/fotosTiposMateriales/materialesConstru.jpg", "MATERIALES PARA LA CONSTRUCCION");
const PLOMERIA = new TipoProductos("#","../assets/fotosTiposMateriales/plomeria.jpg", "PLOMERIA");
const PINTURA = new TipoProductos("#","../assets/fotosTiposMateriales/pintura.jpg", "PINTURA");
const FERRETERIA = new TipoProductos("#","../assets/fotosTiposMateriales/ferreteria.jpg", "FERRETERIA");
const CONSTRUCCION_EN_SECO = new TipoProductos("#","../assets/fotosTiposMateriales/construEnSeco.jpg", "CONSTRUCCION EN SECO");


const ARRAY_TIPO_PRODUCTOS = [MATERIALES_PARA_CONSTRUCCION, PLOMERIA, PINTURA, FERRETERIA,CONSTRUCCION_EN_SECO]


ARRAY_TIPO_PRODUCTOS.forEach(producto =>{
    let div = document.createElement("div");
    div.className = "materiales"; //Aplico una Class
    div.innerHTML = `
                        
                        
                        <a href="${producto.link}">
                            <div>
                                <img src="${producto.img}"></img>
                                <h2>${producto.nombreTipoProducto}</h2>
                            </div>
                        </a>
                    
    
    
    `
    materiales.appendChild(div); //Inyecto en el HTML la etiqueta que declare
});

