
let numerSecreto=0
let intentos=0;
let listaNumeroSorteados=[];

function asignarTextoElemento(elemento,texto){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numerSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos}  ${(intentos===1)? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el usuario no acerto 
        if(numeroDeUsuario>numerSecreto){
            asignarTextoElemento('p','El numero secreto es menor');

        }else{
            asignarTextoElemento('p','El numero secreto de mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto(){
    let numerGenerado= Math.floor(Math.random()*10)+1;
    console.log(numerGenerado);
    console.log(listaNumeroSorteados);
    //si el numero generado esta en la lista 
    if(listaNumeroSorteados.includes(numerGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteados.push(numerGenerado);
        return numerGenerado;
    }
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p','indica un numero del 1 al 10')
    numerSecreto=generarNumeroSecreto();
    console.log(numerSecreto);
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    
    //inicializar el numero intentos

    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}


condicionesIniciales();