const formulario = document.getElementById("formulario");

const procesaTodo = (event) => {
    /*Para una accion predeterminada del evento*/
    event.preventDefault();
    /*constructor que crea un objeto de tipo FormData */
   const datos = new FormData(event.target);
   
    /* El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.*/
   const datosCompletos = Object.fromEntries(datos.entries());
   console.log(JSON.stringify(datosCompletos));
   
   localStorage.setItem("datosFormulario",JSON.stringify([datosCompletos]));

   }

   const procesaDatos = (event) => {
    /*Para una accion predeterminada del evento*/
    event.preventDefault();

    /*constructor que crea un objeto de tipo FormData */
    const datos = new FormData(event.target);

    /*El metodo get retorna el valor associado con la clave del objeto FormData */
    const correo = datos.get('email');   
    console.log({correo});

}


formulario.addEventListener('submit', procesaTodo());