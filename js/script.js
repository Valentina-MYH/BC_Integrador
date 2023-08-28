
function openMenu(){
    let link = document.getElementById("links");
    if(link.style.display == 'flex'){
        link.style.display = "none";
    }else{
        link.style.display = 'flex';
    }
}

const form = document.querySelector("form");
const regExp = /^[A-Z]\D*$/;
const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const msjRegex = /^.{1,70}$/;

const campos = {
    nombre:false,
    apellido:false,
    mail:false,
    mensaje: false

}

const validarForm = (e) => {
    switch(e.target.name){
        case 'nombre':
            sanitize('nombre');

        break;
        case 'apellido':
            sanitize('apellido');

        break;

        case 'mail':
            validateEmail('mail')

        break;
        case 'mensaje':
            if(mensaje.match(msjRegex)){
                campos.mensaje = true;
            }else{
                campos.mensaje = false;
            }

        break;
    }
}


function sanitize(inputValue){
    let sanitizedValue = inputValue.trim();
    
    if(sanitizedValue.match(regExp)){
        campos.inputValue = true;
        return sanitizedValue;  
    }else{
        sanitizedValue = sanitizedValue.charAt(0).toUpperCase() + sanitizedValue.slice(1);
        return sanitizedValue;
    }
}
function validateEmail(mail) {
    if(validateEmail.mail(mailRegex)){
        console.log("Mail Valido")
        campos.mail = true;
    }else{
        console.log("Email no valido")
    }
}
form-addEventListener ('submit', (e) =>{
    if(campos.nombre && campos.apellido && campos.mail ){
        console.log("formulario enviado");
        
    }else{document.getElementById('msj').classList.add('msj-activo');

    }
})



document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.formFields');

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
});






