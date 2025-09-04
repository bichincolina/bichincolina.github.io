function valCorreo(){
    let correo = document.getElementById("correo").value;
    var domCorreo = "@duocuc.cl";
    if (!correo.endsWith(domCorreo)){
        alert("El correo debe terminar en @duocuc.cl");
        return false;
    }else{
        return true;
    }
}
function valPass(){
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regex = /[!"#$%&/()=?¡°_\-]/;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    if (pass1 != pass2){
        alert("Las contraseñas no coinciden");
        return false;
    }if (!regex.test(document.getElementById("pass1").value)){
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial");    
        return false;
    }else{
        return true;
    }
}
function guardar_mascot(nom, tipo){
    lista_mascot
}
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
document.getElementById("Registro").addEventListener("submit", function(e){
    
});
var lista_mascot=[];

