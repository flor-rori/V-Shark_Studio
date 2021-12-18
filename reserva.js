
const inputHoras = document.getElementById("horas");
const btnClick = document.getElementById("btnClick");
var total;

btnEnviar.addEventListener("click", enviar_click);


inputHoras.addEventListener("change", () => {
    total = calcularTotal();
    alert("Su presupuesto del ensayo es $" + total);

});

function enviar_click(){
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let celular = document.getElementById("celular").value;
    let salas = document.getElementById("salas").value;
    let fecha = document.getElementById("fecha").value;
    let horas = document.getElementById("horas").value;
    let comment = document.getElementById("comment").value;

    console.log(usuario);
    console.log(email);
    console.log(celular);
    console.log(salas);
    console.log(fecha);
    console.log(horas);
    console.log(comment);

    console.log("El presupuesto del ensayo es $" + total);
}


function calcularTotal(){
        //Calcular presupuesto para ensayo
        const horas = inputHoras.value;
        parseInt(horas);    

        const sumar = (a, b) => {
            return a + b;
        }
    
        const multiplicar = (a, b) => {
            return a * b;
        }
    
    
    
        const calcularPresupuesto = (valorHora, horas, alquilerInstrumentos, valorGrabacion) => {
            let presupuestoDeEnsayo = multiplicar(valorHora, horas);
            let presupuestoDeGrabacion = multiplicar(valorGrabacion, horas);
            let presupuestoPorAlquiler = multiplicar(alquilerInstrumentos, horas);
    
            let resultado = sumar(presupuestoDeEnsayo, presupuestoDeGrabacion, presupuestoPorAlquiler);
    
            return resultado;
        }
    
        return calcularPresupuesto(500, horas, 0, 0);        
}




