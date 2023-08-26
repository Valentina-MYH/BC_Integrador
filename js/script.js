
function openMenu(){
    let link = document.getElementById("links");
    if(link.style.display == 'flex'){
        link.style.display = "none";
    }else{
        link.style.display = 'flex';
    }
}
/*

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = e.target[0].value;
    nombre = sanitize();
    let apellido = e.target[1].value;
    apellido = sanitize();

    let mail = e.target[2].value;
    validateEmail(mail);
});

const regExp = /^[A-Z]\D*$/;
function sanitize(inputValue){
let sanitizedValue = inputValue.trim();
//Se fije si la primera letra es mayuscula
    if(sanitizedValue.match(regExp)){
        return sanitizedValue;  
    }else{
        sanitizedValue = sanitizedValue.charAt(0).toUpperCase() + sanitizedValue.slice(1);
        return sanitizedValue;
    }
}

const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail(mail) {
    if(validateEmail.mail(mailRegex)){
        console.log("Mail Valido")
    }else{
        console.log("Email no valido")
    }
}


//Si se escribe algo en el input, la informacion del label no vuelve a bajar a su posicion original
var inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  const label = document.querySelector(`label[for='${inputs[i].id}']`);
  console.log(`Input ID: ${inputs[i].id}, Label: ${label}`);
  
  inputs[i].addEventListener('keyup', function() {
    if (this.value.length >= 1) {
      label.style.marginTop = '-12%';
    } else {
      label.style.marginTop = '0';
    }  
  });
}
*/