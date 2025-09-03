var listamascot = [];


// function getNom(){

// }

function guardar(nom, tip){
    listamascot.push({"nombre":nom, "tipo":tip})
    
}

document.getElementById("guardarmascot").addEventListener("submit", function(e){
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log(e);
    console.log(Object.fromEntries(formData)["nomascot"]);
    console.log(Object.fromEntries(formData)["nomtip"]);
    guardar(Object.fromEntries(formData)["nomascot"], Object.fromEntries(formData)["nomtip"])
    document.writeln(listamascot)
    
});

