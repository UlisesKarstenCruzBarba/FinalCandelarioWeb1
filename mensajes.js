function mandarMensaje(event){
    event.preventDefault();
    var nombre = document.getElementById("campo-nombre").value;
    var correo = document.getElementById("campo-correo").value;
    var duda = document.getElementById("campo-duda").value;
    var aviso = document.getElementById("salida-contacto");

    if (nombre == "" || correo == "" || duda == ""){
        aviso.style.color = "red";
        aviso.innerText = "Faltan datos por llenar en el formulario.";
    }else{
        aviso.style.color = "green";
        aviso.innerText = "Listo " + nombre + ", recibimos tu mensaje y te contestamos a " + correo + ".";
        document.getElementById("formulario-museo").reset();
    }
}
