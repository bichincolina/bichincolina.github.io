let message = "hola desde js";
document.writeln("<h3>"+ message + "</h3>");

// function suma(a, b) {
//     a = 10;
//     b = 20;
//     return a + b;
// }
// function resta(a, b) {
//     return a - b;
// }
// function nombreCompleto(nombre, apellido) {
//     return nombre + " " + apellido;
// }

// Generic
// function getAge(edad) {
//     var formData = new FormData(edad);
//     let age = Object.fromEntries(formData)["edad1"];
//     // console.log(Object.fromEntries(formData));
//     // console.log(JSON.stringify(Object.fromEntries(formData), null, 1));
//     let msg;
//     switch (true) {
//         case age < 18:
//             msg = "You are underaged! Get out...";
//             break;
//         case age < 65:
//             msg = "You are an Adult!";
//             break;
//         case age < 85:
//             msg = "You are a Senior!";
//             break;
//         default:
//             msg = "You are in your Golden Years! :>"
//             break;
//     }
//     document.getElementById("edad").innerHTML += msg;
// }

 
// document.getElementById("edad").addEventListener("submit", function (e) {
//     e.preventDefault();
//     getAge(e.target);
// });

function getAge(edad) {
    var formData = new FormData(edad);
    let age = Object.fromEntries(formData)["edad1"];
}
function mayorDeEdad(e) {
    if ( e>=18) {
        alert("eres mayor de edad");
        return true;
    } else {
        alert("eres menor de edad");
        return false;
    }   
}
document.getElementById("edad").addEventListener("submit", function (e){
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log(e);
    console.log(Object.fromEntries(formData)["edad1"]);
    if(mayorDeEdad(Object.fromEntries(formData)["edad1"]) ){
        alert("eres mayor de edad");
        console.log("eres mayor de edad");
    } else {
        alert("eres menor de edad");
        console.log("eres menor de edad");
    }});
// const submit = document.querySelector("submit");
// const timestamp = Date.now();
// message = "hoy es timestamp: " + timestamp;
// document.writeln("<p>"+ message + "<p>");
// document.writeln("<p>la suma es: " + suma() + "</p>");
// document.writeln("<p>la resta es: " + resta(50, 20) + "</p>");
// document.writeln("<p>mi nombre es: " + nombreCompleto("bichi","colina") + "</p>");
// document.writeln("<p> edad " + mayorDeEdad("su edad es") + "</p>");

