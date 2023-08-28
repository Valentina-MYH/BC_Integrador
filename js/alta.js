
function openMenu(){
    let link = document.getElementById("links");
    if(link.style.display == 'flex'){
        link.style.display = "none";
    }else{
        link.style.display = 'flex';
    }
}
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('formFields');

const label = document.querySelectorAll('label');

const expresiones = {
    nombres: /^[A-Z][a-zA-Z]*$/,
    precio: /^\$[\d]+(\.\d{1,2})?$/,
    stock: /^\d+(\.\d{1,2})?$/,
    marca: /^[a-zA-Z0-9\s\-_.]*$/,
    categoria: /^(Nuevo|Casi nuevo|Usado)$/,
    corta:/^.{1,50}$/,
    larga:/^.{50,100}$/,
    edad : /^(1[8-9]|[2-9]\d|100)$/
}
const campos = {
    nombre:false,
    precio:false,
    stock:false,
    marca:false,
    categoria:false,
    corta:false,
    larga:false,
    desde:false,
    hasta:false
    
}

const validarFormulario = (e) => {
switch (e.target.name){
    case 'nombre': 
        validarCampo(expresiones.nombres, e.target, 'nombre');
    break;
    case 'precio':
        validarCampo(expresiones.precio, e.target, 'precio');
    break;
    case 'stock' :
        validarCampo(expresiones.stock, e.target, 'stock');
    break;
    case 'marca' : 
        validarCampo(expresiones.marca, e.target, 'marca')
    break;
    case 'categoria':
    validarCampo(expresiones.categoria, e.target, 'categoria');
    break;
    case 'descrip-corta':
        validarCampo(expresiones.corta, e.target, 'descrip-corta')
        break;
    case 'descrip-larga':
        validarCampo(expresiones.larga, e.target, 'descrip-larga')
        break;
    case 'edad-desde':
        validarCampo(expresiones.edad, e.target, 'edad-desde');
    break;
    case 'edad-hasta':
        validarCampo(expresiones.edad, e.target, 'edad-hasta');
    break;
};
}


const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`grupo-${campo}`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('grupo-correcto');
        document.querySelector(`#grupo-${campo} .input-error`).classList.remove('input-error-activo');
        
        campos[campo] = true;
    }
    else{
        document.getElementById(`grupo-${campo}`).classList.add('grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('grupo-correcto');
        document.querySelector(`#grupo-${campo} .input-error`).classList.add('input-error-activo');
        campos[campo] = false;

    }
}




document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.formFields');

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        if (
            campos.nombre &&
            campos.precio &&
            campos.stock &&
            campos.marca &&
            campos.categoria &&
            campos.larga &&
            campos.corta &&
            campos.desde &&
            campos.hasta
            ) {
                
            formulario.reset();
            document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
        } else {
            document.getElementById('mensaje').classList.add('mensaje-activo');
        }
    });
});


    
   