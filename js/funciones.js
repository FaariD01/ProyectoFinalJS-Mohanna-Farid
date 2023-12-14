function comprar_producto(){
    let nombreProd = "Cemento Avellaneda 50KG"    
    let precio_incial_producto = 5000;
    const ENVIO = 1000;
    let precio_final_producto;
    let retiraEnSucursal;
    let pago;
    let seguirComprando;
    let facturacion;


    do{
        precio_final_producto = precio_incial_producto;

//PREGUNTO Y VALIDO RESPUESTA POR ENVIO
        
        do{
            retiraEnSucursal = prompt("Quieres retirar el producto por la sucursal? (SI / NO)").toLowerCase();
            
        }while (retiraEnSucursal !== "si" && retiraEnSucursal !== "no");
        
        if(retiraEnSucursal === "no"){
            precio_final_producto = precio_incial_producto + ENVIO; 
        }

//PREGUNTO Y VALIDO POR METODO DE PAGO
        
        do{
            pago = prompt("Como vas a abonar? (EFECTIVO / TRANSFERENCIA)").toLowerCase();

        }while(pago !== "efectivo" && pago !== "transferencia");
        
        if(pago === "transferencia"){
            precio_final_producto = (precio_final_producto * 0.10) + precio_final_producto;
        }
        else{
            precio_final_producto = (precio_final_producto * (-0.05)) + precio_final_producto;
        }

        

//PREGUNTO Y VALIDO SI QUIERE FACTURA

        do{
            facturacion = prompt("Queres factura? (SI / NO)").toLowerCase();

        }while(facturacion !== "si" && facturacion !== "no")

        if(facturacion === "si"){
             precio_final_producto = (precio_final_producto * 0.21) + precio_final_producto;
        }

//PREGUNTO SI QUIERE SEGUIR COMPRANDO

        seguirComprando = prompt("Quiere comprar algo mas?").toLowerCase();

        

    }while(seguirComprando === 'si');



//PRINTEO EN CONSOLA NOMBRE DEL PRODUCTO + PRECIO INICIAL
    console.log("¡¡¡Felicidades, compraste " + nombreProd + " " + "el precio inicial es $" + precio_incial_producto + "!!!");


    //PRINTEO EN CONSOLA ENVIO
    if(retiraEnSucursal === "no"){
        console.log("~Decidiste que te lo llevemos a traves de envio, el costo del servicio es de $" + ENVIO);
    }
    else{
        console.log("~Decidiste pasar a retirarlo por la sucursal, no hay recargo por envio");
    }    


    //PRINTEO EN CONSOLA MODO DE PAGO
    if(pago === "transferencia"){
        console.log("~Pagaste con transferencia bancaria por este motivo tenes un recargo del 10% en tu compra");
    }
    else{
        console.log("~Pagaste en efectivo, tenes un 5% de descuento");
    }    


    //PRINTEO SI FACTURE
    if(facturacion === "si"){
        console.log("~Debido a que pediste facturar, se le agrego el IVA al precio final");
    }



    //PRINTEO EN CONSOLA PRECIO FINAL DEL PRODUCTO
    console.log("~El precio final es: $" + precio_final_producto);



}

function modoOscuro(){
    const botonModo = document.getElementById("botonModo");

    botonModo.addEventListener("click", ()=> {
        document.body.classList.toggle("dark");
        if(document.body.classList.contains("dark")){
            localStorage.setItem("modo","dark");
        }else {
            localStorage.setItem("modo","claro");
        }
    })
}
modoOscuro();
//FUNCION BORRAR TEXTO DEL DOM
function clearHTML(){
    prodEnCarrito.innerHTML = '';
}
//Carrito de compras

//Creo el array

const PRODUCTOS_EN_CARRITO = [];

//Creo la clase

class Producto{
    constructor(img,nombre, precio){
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
    }
}

//Creo dos productos

const prod1 = new Producto ("../assets/fotosProductos/cemento.webp","Cemento Avellaneda", 5000);
const prod2 = new Producto ("../assets/fotosProductos/cal_el_milagro.jpg","Cal El Milagro", 3000);

//AGREGO LOS PRODUCTOS AL ARRAY

PRODUCTOS_EN_CARRITO.push(prod1,prod2);



//FUNCION MOSTRAR CARRITO
function printearCarrito(array){
    
    //Verifico si el array tiene productos, para mostrarlos. Si no tiene muestra "No hay elementos en el carrito"
    if(array.length > 0){ //Si el array tiene productos, los muestra.
        //Muestro los productos en el DOM
        array.forEach(producto => {
    
            let div = document.createElement("div");
            div.className = "prodEnCarrito"; //Aplico una Class
            div.innerHTML = `
                                
                                <div>
                                    <img src="${producto.img}" alt="Foto Prod">
                                    <h2 id="${producto.id}">${producto.nombre}</h2>
                                    <p>$${producto.precio}</p>
                                    <button id="btnEliminar">Eliminar</button>
                                </div>
                                
                                
            
            `
            prodEnCarrito.appendChild(div);
        })
    }else{ //Si el array no tiene nada, lo informa.
        let div = document.createElement("div");
        div.className = "prodEnCarrito";
        div.innerHTML = `
                        <p>No hay elementos en el carrito</p>
                        `
    
    prodEnCarrito.appendChild(div);
    }
}
printearCarrito(PRODUCTOS_EN_CARRITO);

//FUNCION ELIMINAR PRODUCTOS DEL CARRITO
function eliminarProductosEnCarrito(array){
    //Boton para borrar elementos del array
    const BTN = document.getElementById("btnEliminar"); //Lo vinculo con el boton, ahora es un nodo.

    BTN.addEventListener("click", function(){

        PRODUCTOS_EN_CARRITO.pop(); //Borro un elemento del carrito
        
        console.log(PRODUCTOS_EN_CARRITO); //Verifico por consola que se borre el producto
        
        clearHTML(); //Borro el contenido viejo

        printearCarrito(PRODUCTOS_EN_CARRITO); //Muestro el carrito actualizado
    });
}
eliminarProductosEnCarrito(PRODUCTOS_EN_CARRITO);










