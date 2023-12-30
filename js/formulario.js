
const formulario = document.getElementById('formulario');

const formDatosArray = [];


// Funcion para extraer todos los datos del formulario y convertirlos en formato JSON 

const procesaTodo = (event) => {
 // Para una accion predeterminada del evento
 event.preventDefault();
 // constructor que crea un objeto de tipo FormData 
const datos = new FormData(event.target);

 // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
const datosCompletos = Object.fromEntries(datos.entries());

formDatosArray.push(datosCompletos);

localStorage.setItem("formDatosArray", JSON.stringify(formDatosArray));

    swal({
        title: "Formulario enviado correctamente",
        icon: "success",
      });
    
    }


formulario.addEventListener('submit', procesaTodo);