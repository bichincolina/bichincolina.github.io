var users = [];
var listamascot = [];
// Funcion validar correo
function valCorreo(){
    let correo = document.getElementById("correo").value;
    var domCorreo = "@duocuc.cl";
    if (!correo.endsWith(domCorreo)){
        alert("El correo debe terminar en @duocuc.cl");
        return null;
    }else{
        return correo;
    } 
}
// Funcion validar contraseña 
function valPass(){
    const regex = /[!"#$%&/()=?¡°_\-]/;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    if (pass1 != pass2){
        alert("Las contraseñas no coinciden");
        return null;
    }
    if (!regex.test(pass2)){
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial");    
        return null;
    }else{
        return pass2;
    }
}
// Funcion guardar usuario **FALTA TERMINAR**
function guardarUsuario(){
    if (valCorreo() && valPass() != null){
    let user = {
        "correo": valCorreo(),
        "contrasena": valPass()
    }
    users.push(user);
}
}
// Funcion guardar mascota **CAMBIAR ID**
function guardar_mascot(nom, tipo){
    lista_mascot.push({"nombre":nom,"tipo":tipo});
}
// Listener datos guardados (prueba)
document.getElementById("Registro").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log(e);
    if (valCorreo() && valPass()){
        alert("Registro exitoso");

    }else{
        alert("Error en el registro");
    }
    console.log(Object.fromEntries(formData)["nombre"]);
    console.log(Object.fromEntries(formData)["correo"]);
    console.log(Object.fromEntries(formData)["pass1"]);
    console.log(Object.fromEntries(formData)["pass2"]);
    console.log(Object.fromEntries(formData)["telefono"]);
    
});
// Listener datos mascota **RECTIFICAR ID**
document.getElementById("guardarmascot").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log(e);
    console.log(Object.fromEntries(formData)["nomascot"]);
    console.log(Object.fromEntries(formData)["nomtip"]);
    guardar(Object.fromEntries(formData)["nomascot"], Object.fromEntries(formData)["nomtip"])
    document.writeln(listamascot)
    
});


