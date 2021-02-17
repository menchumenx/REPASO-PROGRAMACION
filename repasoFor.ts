
/*
----------- FUNCIONES FOR 
*/

// determinar color
function rainbow(arrayColors:string[]){
    for(let i = 0; i<arrayColors.length; i++){
        if(arrayColors[i].includes("rojo")){
            console.log("Este color esta en el arcoiris")
        }else if(arrayColors[i].includes("naranja")){
            console.log("Este color esta en el arcoiris")
        }else if(arrayColors[i].includes("amarillo")){
            console.log("Este color esta en el arcoiris")
        }else if(arrayColors[i].includes("verde")){
            console.log("Este color esta en el arcoiris")
        }else if(arrayColors[i].includes("indigo")){
            console.log("Este color esta en el arcoiris")
        }else if(arrayColors[i].includes("violeta")){
            console.log("Este color esta en el arcoiris")
        }else{
            console.log("¡este no!")
        }
    }
}


//invertir array
function revertArray(array1:number[]) {
    let tempInvertido:number[]:

    for (let i = array1.length - 1; i >= 0; i--){
        tempInvertido.push(array1[i])
    } 
   return tempInvertido;
}

//contador letras
function sumCaracteres(arrString :string[]):number {
    for (let i:number = 0; i < arrString.length; i++ ){
        suma = arrString[i].length + suma;
    }
    return suma;
}

//  suma de contador de letras -- par o impar
function sum (arrString :string[]){
    for (let i:number = 0; i < arrString.length; i++ ){
        suma = arrString[i].length + suma;
           
    }
    if(suma % 2 == 0){
        console.log("el numero es par");
    }else if (suma % 2 !=0){
        console.log("el numero es impar")
        }
}

//imprime impar
function printImpares(numero:number){
    for (let i = 0; i < numero; i++){
        if(i % 2 != 0) {
        console.log (i);
        }
    }
}