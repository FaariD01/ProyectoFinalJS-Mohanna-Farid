const NOMBRE_PRODUCTO1 = "Cemento Avellaneda x 50Kg";
let precio_incial_producto = 3500;
let envio = 1000;
let precio_final_producto;
let retiraEnSucursal;
let pago;
let seguirComprando;
let facturacion;

function comprar_producto(){
    
    do{
        precio_final_producto = precio_incial_producto;

//PREGUNTO Y VALIDO RESPUESTA POR ENVIO
        
        do{
            retiraEnSucursal = prompt("Quieres retirar el producto por la sucursal? (SI / NO)").toLowerCase();
            
        }while (retiraEnSucursal !== "si" && retiraEnSucursal !== "no");
        
        if(retiraEnSucursal === "no"){
            precio_final_producto = precio_incial_producto + envio; 
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
    console.log("¡¡¡Felicidades, compraste " + NOMBRE_PRODUCTO1 + " " + "el precio inicial es $" + precio_incial_producto + "!!!");


    //PRINTEO EN CONSOLA ENVIO
    if(retiraEnSucursal === "no"){
        console.log("~Decidiste que te lo llevemos a traves de envio, el costo del servicio es de $" + envio);
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



