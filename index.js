// Variables sin valor

let variableSinValor;

let booleano1 = true;
let booleano2 = false;

const PI = 3.14;

let TAU = PI * 2;

// Booleanos

let booleanoAnd = booleano1 == booleano2;
let booleanoNot = booleano1 === booleano2;

let booleanoMix0 = booleano1 + booleano2 === booleano1 != booleano2;

// operadores

let incrementarDesp = 2;

let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes = incrementarAntes--;

//Bucles


let contarHasta10_2 = 0;
for (let i = 0; i <= 10; i++) {
    console.log(i);
    
};


let postI = 0;
let postJ = 0;

for (let i = 0; i <= 11; i++) {
    postJ = postI + i;
    console.log(postJ);
    
};

let sumaPares = 0;
for (let i = 0; i <= 10; i++) {
    sumaPares = sumaPares + i++;
    console.log(i);
};


//Variables


let variableValorNumerico = 56;

const MiNombre = 'Marcos';

const MiNumeroFav = 7;


//Booleanos



let booleanoOr = booleano1 == booleano2;

let booleanoMix1 = booleano1 == TAU / 2;

let seisNoEsNueve = 6 != 9;

let booleanoMix2 = variableValorNumerico < MiNumeroFav * TAU;


//Operadores



let valorSuma = MiNumeroFav + variableValorNumerico;
let valorResta = MiNumeroFav - variableValorNumerico;

let valorMultiplicación = MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;

//Bucles

/*
### Bucles ###

- [ ] 24.- Crear variable **contarHasta10** con valor **0** e incrementar su valor con un **bucle while hasta que se verifique que contarHasta10 === 10**

- [ ] 25.- Crear las variables **preI** y **preJ** con valor **0** a continuación cree **un bucle que itere 11 veces**. En cada iteración se deberá **sumar al valor de preI el valor de ++preJ**

- [ ] 26.- Crear la variable **sumaImpares** con valor **0** a continuación crea un bucle que **itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)**
*/

let contarHasta10 = 0;
while (contarHasta10 <= 10) {
    console.log(contarHasta10);
    contarHasta10++;
};

preI = 0;
preJ = 0;

for (let i = 0; i <= 10; i++) {
    preJ = i + preI++;
    console.log(i);
    
};


let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    sumaImpares = i++ + sumaImpares;
    console.log(i);
    
};

