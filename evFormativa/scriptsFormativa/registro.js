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
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass2").value;
    if (pass != pass2){
        alert("Las contraseñas no coinciden");
        return false;
    }else{
        return true;
    }
    if (!regex.test(document.getElementById("pass1").value)){
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial");
        return false;
    }
}