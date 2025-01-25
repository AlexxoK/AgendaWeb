const credenciales = {
    correoValido: "alexxo@gmail.com",
    contraValida: "0000"
};

const boton = document.getElementById("boton");
const error = document.getElementById("error");

boton.addEventListener("click", () => {
    const correo = document.getElementById("email").value.trim();
    const contra = document.getElementById("contra").value.trim();
    const contraInput = document.getElementById("contra");

    (correo === credenciales.correoValido && contra === credenciales.contraValida)
        ? window.location.href = "./todas/contacto.html"
        : error.textContent = "Correo o contraseña incorrecta!";
    contraInput.value = "";

});