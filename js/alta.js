
function openMenu(){
    let link = document.getElementById("links");
    if(link.style.display == 'flex'){
        link.style.display = "none";
    }else{
        link.style.display = 'flex';
    }
}


const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('form input');
const label = document.querySelectorAll('form label');

const expresiones = {
    nombre: /^[A-Za-z]\+$/,
    precio: /^.{5,20}$/,
    stock: /^.{5,20}$/,
    descripcionCorta:/^.{5,20}$/,
    descripcionLarga:/^.{20,40}$//*,
    edadDesde:,
    edadHasta: */
}
const validarFormulario = (e) => {
switch (e.target.name){
    case 'nombre' :
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById('grupo-nombre').classList.remove('formulario-correcto');
            document.getElementById('grupo-nombre').classList.add('formulario-correcto');
            
        }else{
            document.getElementById('grupo-nombre').classList.add('formulario-incorrecto');
            document.getElementById('grupo-nombre').classList.remove('formulario-incorrecto');
            document.querySelector('#grupo-nombre .input-error').classList.add('input-error-activo');
        }
        break;

    case 'precio' :
        break;

    case 'stok' :
        break;

    case 'usuario' :
        break;
    case 'descripcionCorta':
        break;
    case 'descripcionLarga':
        break;
    case 'edadDesde':
        break;
    case 'edadHasta':
        break;
};



};

//cada input pasa por esta funcion
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);//levanta la tecla
    input.addEventListener('blur', validarFormulario);//cuando completo un input y toca afuera

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();


});