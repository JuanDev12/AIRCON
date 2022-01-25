const formulario = document.getElementById('formulario1')
const inputs =document.querySelectorAll('#formulario1 input')
const usuario = document.getElementById('usuario')
const vuelo = document.getElementById('vuelo')
const correo = document.getElementById('correo')
var califiVal = document.getElementById('califi').value = 0

formulario.addEventListener('submit', (e) => {
    //previene los valores en blanco
    e.preventDefault()
    mensage()
    
}) 
inputs.forEach(input => {
    input.addEventListener('keyup', checkInputs)
    input.addEventListener('blur', checkInputs)
    
});
function checkInputs(){
    // esta funcion verifica los inputs
    const userVal = usuario.value.trim()
    const emailVal = correo.value.trim()
    const vueloVal = vuelo.value.trim()

    if(userVal == ''){
        setErrorPor(usuario, 'No puede dejar el usuario en blanco')
    } else if(!isuser(userVal)) {
        setErrorPor(usuario, 'El usuario solo puede incluir letras y/o nuemeros, entre 4 y 16 caracteres')
    }else{
        setSuccesspor(usuario)
    }

    if(emailVal == ''){
        setErrorPor(correo, 'No puede dejar este expacio en blanco')
    }/* else if(isEmail(emailVal)){
        setErrorPor(email, 'No es un email valido')
    } */ else{
        setSuccesspor(correo)
    }

    if(vueloVal == ''){
        setErrorPor(vuelo, 'No puede dejar el usuario en blanco')
    }else{
        setSuccesspor(vuelo)
    }
}
var contador;

function calificar(item){

    contador = item.id[0]//5estrella solo capturaria el primer digito
    let nombre = item.id.substring(1);//4estrella captura todo menos el primer caracter
    for(let i=0;i<5;i++){
        /* 
        i=0
        i=1
        i=2
        i=3
        i=4
        if(4<4)
        */
        if(i<contador){
            /* 
            primera vez 0+1 = 1estrella;
            segunda vez 1+1 = 2estrella;
            tercera vez 2+1 = 3estrella;
            cuarta vez 3+1 = 4estrella;
            primera vez 0+1 = 1estrella;
            */
            document.getElementById((i+1)+nombre).style.color="orange";
            document.getElementById('califi').value = contador
            califiVal = contador
        }else{
            document.getElementById((i+1)+nombre).style.color="black";
            document.getElementById('califi').value = contador
            califiVal = contador
        }
    }
}
function mensage(){
    swal("Gracias por calificarnos " , usuario.value.trim() +" usted nos dio "+califiVal+" estrellas", 'success')
}


function setSuccesspor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
function setErrorPor(input,mensage){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = mensage
}
function isuser(user) {
    return /^[a-zA-Z0-9\_\-]{4,16}$/.test(user)
}