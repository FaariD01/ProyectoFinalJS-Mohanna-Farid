//CARGO LOS PRODUCTOS DE "MATERIALES_PARA_CONSTRUCCION"


class Producto{
    constructor(codProd, nombre, marca, precio,img,link){
        this.codProd = codProd;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.img = img;
        this.link = link;
    }
}

const CEMENTO_AVELLANEDA_50KG = new Producto("000000001", "Cemento Avellaneda 50Kg", "Hidralit", 5000,"../assets/fotosProductos/cemento.webp","../pages/pageProdCemento.html");
const CAL_EL_MILAGRO = new Producto("000000002", "Cal El Milagro 25kg", "El Milagro", 7000,"../assets/fotosProductos/cal_el_milagro.jpg","../pages/pageProdCal.html");
const KLAUKOL_BLANCO = new Producto ("000000003", "Klaukol Blanco", "Patito", 3000, "../assets/fotosProductos/klaukol_blanco.jpg");
const YESO_TUYANGO = new Producto ("000000004", "Yeso Tuyango", "Tuyango", 1500, "../assets/fotosProductos/yeso_tuyango.jpg");
const PASTINA_WEBER = new Producto ("000000005", "Pastina Weber", "Weber", 900, "../assets/fotosProductos/pastina_weber.jpg");
const MEMBRANA_EMPAMI = new Producto ("000000006", "Membrana Empami", "Empami", 4000, "../assets/fotosProductos/membrana_empami.jpg");
const CERESITA = new Producto ("000000007", "Ceresita", "Ceresita", 8000, "../assets/fotosProductos/ceresita.jpg");
const KLAUKOL_PORCELLANATO = new Producto ("000000008", "Klaukol Procellanato", "Klaukol", 11000, "../assets/fotosProductos/klaukol_porcellanato.jpg");



const LISTADO_PRODUCTOS_MAT_CONSTRUCCION = [CEMENTO_AVELLANEDA_50KG,CAL_EL_MILAGRO, KLAUKOL_BLANCO,YESO_TUYANGO,PASTINA_WEBER,MEMBRANA_EMPAMI,CERESITA,KLAUKOL_PORCELLANATO]

LISTADO_PRODUCTOS_MAT_CONSTRUCCION.forEach(producto =>{
    let div = document.createElement("div");
    div.className = "matConstru";
    div.innerHTML = `
                    <a href="${producto.link}">
                        <div>                        
                            <img src="${producto.img}" alt="Foto Producto">
                            <h2>${producto.nombre}</h2>
                            <p>Precio: $${producto.precio}</p>
                        </div>
                    </a>
    
    
    `
    
    materialesMezcla.appendChild(div);
});



