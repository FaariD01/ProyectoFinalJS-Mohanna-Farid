const NOMBRE_PRODUCTO1 = "Cemento Avellaneda x 50Kg";
let precio_incial_producto = 3500;
let envio = 1000;
let precio_final_producto;
let retiraEnSucursal;
let pago;
let seguirComprando;

function comprar_producto(){
    
    do{
        precio_final_producto = precio_incial_producto;
        retiraEnSucursal = prompt("Quieres retirar el producto por la sucursal? (SI / NO)").toLowerCase();
        pago = prompt("Como vas a abonar? (EFECTIVO / TRANSFERENCIA)").toLowerCase();

        if(retiraEnSucursal === "no"){
            precio_final_producto = precio_incial_producto + envio;
        }
        if(pago === "transferencia"){
            precio_final_producto = (precio_final_producto * 0.10) + precio_final_producto;
        }
        

        seguirComprando = prompt("Quiere comprar algo mas?").toLowerCase();

        

    }while(seguirComprando === 'si');


//PRINTEO EN CONSOLA NOMBRE DEL PRODUCTO + PRECIO INICIAL
    console.log("Felicidades, compraste " + NOMBRE_PRODUCTO1 + " " + "el precio inicial es $" + precio_incial_producto);

    //PRINTEO EN CONSOLA MODO DE PAGO
    if(pago === "transferencia"){
        console.log("Pagaste con transferencia bancaria por este motivo tenes un recargo del 10% en tu compra");
    }
    else{
        console.log("Pagaste en efectivo, no hay recargo");
    }

    //PRINTEO EN CONSOLA ENVIO
    if(retiraEnSucursal === "no"){
        console.log("Decidiste que te lo llevemos a traves de envio, el costo del servicio es de $" + envio);
    }
    else{
        console.log("Decidiste pasar a retirarlo por la sucursal, no hay recargo por envio");
    }

    //PRINTEO EN CONSOLA PRECIO FINAL DEL PRODUCTO
    console.log("El precio final es: " + precio_final_producto);
    
}


comprar_producto();
