var listamascot = [];


// function getNom(){

// }
function guardar(nom, tip){
    listamascot.push({"nombre":nom, "tipo":tip})
    
}

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

document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    
})
document.getElementById("guardarmascot").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log(e);
    console.log(Object.fromEntries(formData)["nomascot"]);
    console.log(Object.fromEntries(formData)["nomtip"]);
    guardar(Object.fromEntries(formData)["nomascot"], Object.fromEntries(formData)["nomtip"])
    document.writeln(listamascot)
    
});

