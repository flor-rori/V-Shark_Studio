
//Solicitar que se logeen con su usuario
const form = document.getElementById("cuenta");
const usuarios = ["usuario1", "usuario2", "usuario3"];
const psw = ["psw1", "psw2", "psw3"];


const inputCuenta = document.getElementById("cuenta");
const inputContraseña = document.getElementById("contraseña");
const btnIngresar = document.getElementById("ingresar");
const usuarioActual = document.getElementById("usuarioActual");
const btnSesion = document.getElementById("sesion");

if(localStorage.getItem("user") != null){
    btnSesion.innerText="Ingresar";
}
else{
    btnSesion.innerText="Cerrar sesión";
}

inputCuenta.addEventListener("change", () => {
    const valor = inputCuenta.value;

    console.log(valor);
})

inputContraseña.addEventListener("change", () => {
    const valor = inputContraseña.value

    if (valor.length < 3) {
        alert("datos invalidos")
        return
    }
    console.log(valor)
})

btnIngresar.addEventListener("click",()=>{
    let inputUser = inputCuenta.value;
    let inputPsw = inputContraseña.value;
    let index = usuarios.indexOf(inputUser);
    if(index>-1 && psw[index]==inputPsw){
        usuarioActual.innerText="Hola "+inputUser+"!";
        localStorage.setItem("user",inputUser);
        btnSesion.innerText="Cerrar sesión";
    }
    else{
        alert("Usuario inválido");
    }
});

btnSesion.addEventListener("click",()=>{
    if(btnSesion.innerText=="Cerrar sesión"){
        usuarioActual.innerText="";
        localStorage.setItem("user",null);
        btnSesion.innerText="Ingresar";
    }
});



//MODAL CREAR USUARIO

const modalAbrir = document.getElementById("modal-abrir")
const modalCerrar = document.getElementById("modal-cerrar")
const modalConteiner = document.getElementById("modal-container")


modalAbrir.addEventListener("click", () => {
    modalConteiner.classList.toggle("modal-active")
})

modalCerrar.addEventListener("click", () => {
    modalConteiner.classList.toggle("modal-active")
})






