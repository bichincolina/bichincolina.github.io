

// function getNom(){

// }

// function guardar(nom, tip){
//     listanom.push(nom)
//     listatip.push(listatip)
//     document.writeln(listanom + "   " + listatip)
// }


document.getElementById("guardarmascot").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log(e);
    console.log(Object.fromEntries(formData)["nomascot"]);
    console.log(Object.fromEntries(formData)["nomtip"]);

});