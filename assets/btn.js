const boton1 = document.getElementById("1");
const boton2 = document.getElementById("2");
const boton3 = document.getElementById("3");

boton1.addEventListener('click', () => {
    window.location.href = "../todas/agregar.html"
})

boton2.addEventListener('click', () => {
    window.location.href = "../todas/favoritos.html"
})

boton3.addEventListener('click', () => {
    window.location.href = "../todas/listaTareas.html"
})