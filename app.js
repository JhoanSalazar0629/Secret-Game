//variables

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//funcion para tomar un elemento y asignarle un valor
function asignarTextoElemento(elemento,texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}
//esta funcion almacena, lo que ingresa en el input y lo guarda en la variable
//numeroDeUsuario para poder hacer la verificacion con el if
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroDeUsuario === numeroSecreto){
        //uso de if y else abreviado ? :
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        //el boton nuevoJuego esta deshabilitado, esto me permite habilitarlo
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","el numero secreto es menor");
        }else{
            asignarTextoElemento("p","el numero secreto es mayor");
        }
        intentos++;
        limpiar();
    }

    return;
}
//esta funcion se ejecuta al iniciar un juego nuevo asignando un nuevo numero secreto
//y reiniciando el contador de intentos a 1
function condicionesIniciales(){
    asignarTextoElemento("h1","secret number game");
    asignarTextoElemento("p",`Indica un numero entre 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//limpia la caja de texto donde el usuario ingresa el numero para adivinar
function limpiar(){
    document.querySelector("#valorUsuario").value="";
    return;
}

//genera un numero aleatorio entre 1 a 10
function generarNumeroSecreto(){  
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //verificamos con un if la cantidad de datos vs el numero maximo de opciones
    //con el fin de dar terminacion al juego cuando estos valores sean iguales
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","HAZ LLEGADO AL LIMITE DE OPCIONES DISPONIBLES");
        } else{   
    //con .includes comparo el contenido de la lista y el contenido de la variable
    //si son iguales me devuelve true y da paso aque me genere un nuevo numero
    if (listaNumerosSorteados.includes(numeroGenerado)){
        //retorna la funcion para generar un nuevo numero y haga la verificacion
        return generarNumeroSecreto();
    }else {
        //aqui el numero generado no esta en el array, asi que lo vamos a ingresar en el para que no se use en otro juego
        listaNumerosSorteados.push(numeroGenerado);
        //aqui me retorna el numero genrado para el juego
        return numeroGenerado;
    }
    
}
}

//llama a la funcion limpiar y a las condiciones iniciales, ademas toma al boton
//nuevoJuego y le habilita nuevamente el atributo disabled
function reiniciarJuego(){
    //limpiar caja
    limpiar();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //reiniciar intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    

}
//llamada a la funcion para inicio del juego
condicionesIniciales();



/*
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby' , 'GoLang');
function mostar(){
    console.log(lenguajesDeProgramacion);
}
mostar();
function mostarInverso(){
    console.log(lenguajesDeProgramacion.reverse());
}
mostarInverso();
let notas = [4,3,5];
function promedio(){
    console.log((notas[0]+notas[1]+notas[2])/notas.length);
}
promedio();


    let suma = notas.reduce((acumulador, valorActual)=>
        { return acumulador + valorActual; } , 0);

    console.log("el promedio es " + suma);

   let numeros = [2,9,4,6,1,3];
function encontrarExtremos(numeros) {
    if (numeros.length === 0) {
         return null; // O puedes devolver un mensaje de error si prefieres
    }
            
     const max = Math.max(...numeros);
     const min = Math.min(...numeros);
            
            return { max, min };
          }
let lista1 = [1,2,3,4,5];
let lista2 = [,6,7,8,9,10];
let listas = lista1 + lista2;
console.log(listas);

//Crea una función que reciba una lista de números y devuelva una nueva lista
// con el cuadrado de cada número.
function cuadradoDeNumeros(array) {
    return array.map(numero => numero * numero);
  }
  
  // Ejemplo de uso
  const numero = [1, 2, 3, 4, 5];
  const cuadrados = cuadradoDeNumeros(numero);
  
  console.log(cuadrados); // Salida: [1, 4, 9, 16, 25]
 */ 
/*
function hola(){
    console.log("hola mundo");
    return;
}
hola();

function nombre(name){
    console.log("Hola, " + name);
    return;
}
nombre("David");

function doble(numero){
    //return numero * 2;
    //let resultadoDoble = calcularDoble(5);
    //console.log(resultadoDoble);
    console.log(numero * 2);
    return;
}
doble(2);

function promedio(nota1,nota2,nota3){
    let total =nota1 + nota2 + nota3;
    //return (a + b + c) / 3;
    //let promedio = calcularPromedio(4, 7, 10);
    //console.log(promedio);
    console.log(total / 3);
    return;
}
promedio(3,4,2);

function mayor(num1,num2){
    //return a > b ? a : b;
    if(num1 > num2){
        console.log(num1 + " es mayor");
    }else{
        console.log(num2 + " es mayor");
    }
    return;
}
mayor(9,7);

function multi(number){
    console.log(number * number);
    return;
}
multi(5);
*/