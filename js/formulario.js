const formularioElement = document.getElementById("formulario");

const procesaTodo = (event) => {

    event.preventDefault();

    const datos = new FormData(event.target);
    console.log(event.target);


}
