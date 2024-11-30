let formulari = document.getElementById("form");
let submit = document.getElementById("submit");

formulari.addEventListener("submit", function (event){
    validarDatos(event);
});

function validarDatos(){
    let valid = true;
    let nom = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let titol = document.getElementById("titol").value;
    let missatge = document.getElementById("missatge").value;
    let nom1 = document.getElementById("nom1");
    let email1 = document.getElementById("email1");
    let titol1 = document.getElementById("titol1");
    let msg1 = document.getElementById("msg1");
    let errors = [];
    if (nom.length < 2){
        valid = false;
        errors.push("\nIntrodueix un nom valid");
        nom1.style.color= "red";
    }else{
        nom1.style.color="blue";
    }
    if (email.length < 2){
        valid = false;
        errors.push("\nIntrodueix un correu valid");
        email1.style.color= "red";
    }else {
        email1.style.color="blue";
    }
    if (titol.length < 2){
        valid = false;
        errors.push("\nIntrodueix un titol valid");
        titol1.style.color= "red";
    }else {
        titol1.style.color="blue";
    }
    if (missatge.length < 2){
        valid = false;
        errors.push("\nIntrodueix un missatge valid");
        msg1.style.color= "red";
    }else{
        msg1.style.color="blue";
    }
    if(!valid){
        pintaErrors(errors);
        event.preventDefault();
    }
}
function pintaErrors(errors){
    let diverserrors = document.getElementById("errors");
    for (let error of errors) {
        diverserrors.append(error);
    }
}