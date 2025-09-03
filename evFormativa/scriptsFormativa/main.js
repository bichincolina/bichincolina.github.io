var listanom = [];
var listatip = [];

// function getNom(){

// }

function guardar(nom, tip){
    listanom.push(nom)
    listatip.push(tip)
    
}


document.getElementById("guardarmascot").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log(e);
    console.log(Object.fromEntries(formData)["nomascot"]);
    console.log(Object.fromEntries(formData)["nomtip"]);
    guardar(Object.fromEntries(formData)["nomascot"], Object.fromEntries(formData)["nomtip"])
    
});