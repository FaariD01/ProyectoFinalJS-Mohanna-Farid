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
