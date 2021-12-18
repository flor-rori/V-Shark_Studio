const btnSesion = document.getElementById("sesion");

if(localStorage.getItem("user") != null){
    btnSesion.innerText="Ingresar";
}
else{
    btnSesion.innerText="Cerrar sesión";
    usuarioActual.innerText="Hola "+localStorage.getItem("user")+"!";
}

btnSesion.addEventListener("click",()=>{
    if(btnSesion.innerText=="Cerrar sesión"){
        usuarioActual.innerText="";
        localStorage.setItem("user",null);
        btnSesion.innerText="Ingresar";
    }
});