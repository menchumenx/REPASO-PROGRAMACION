
/*
----------- FUNCIONES CONDICIONALES 
*/


// retorna continente
function continente (pais:string){
    if (pais == "china" || pais =="japon" || pais =="corea del sur" || pais =="filipinas" || pais =="tailandia"){
        console.log(" Estas en : ASIA ");
    }
    else if(pais == "españa" || pais =="francia" || pais =="alemania" || pais =="inglaterra" || pais =="rusia"){
        console.log(" Estas en : EUROPA");
    }
    else if(pais == "marruecos" || pais =="egipto" || pais =="kenia" || pais =="mozambique" || pais =="tanzania"){
        console.log(" Estas en : AFRICA");
    }
    else if(pais == "peru" || pais =="estados unidos" || pais =="brasil" || pais =="alaska" || pais =="canada"){
        console.log(" Estas en : AMERICA");
    }
    else if(pais == "australia" || pais == "nueva zelanda" || pais =="papua nueva guinea" || pais =="fiyi" || pais =="samoa"){
        console.log(" Estas en : OCEANIA");
    }else{
        console.log("no esta contemplado este pais");
    }
}

//par o impar
function parOimpar(num:number){
    if(num % 2 == 0){
    console.log("el numero es par");
    }else if (num % 2 !=0){
        console.log("el numero es impar")
    }
}

// determina el signo zodiacal
function signoZodiacal (dia:number, mes:string){
    if (dia >= 21 && mes == "marzo" || dia <= 19 && mes == "abril" ){
        console.log("Tu signo zodiacal es: Aries");
    }
    else if(dia >= 20 && mes == "abril" || dia <= 21 && mes == "mayo"){
        console.log ("Tu signo zodiacal es: Tauro");
    }
    else if(dia >= 21 && mes == "mayo" || dia <= 20 && mes == "junio"){
        console.log ("Tu signo zodiacal es: Geminis");
    }
    else if(dia >= 21 && mes == "junio" || dia <= 22 && mes == "julio"){
        console.log ("Tu signo zodiacal es: Cancer");
    }
    else if(dia >= 23 && mes == "julio" || dia <= 22 && mes == "agosto"){
        console.log ("Tu signo zodiacal es: Leo");
    }
    else if(dia >= 23 && mes == "agosto" || dia <= 22 && mes == "septiembre"){
        console.log ("Tu signo zodiacal es: Virgo");
    }
    else if(dia >= 23 && mes == "septiembre" || dia <= 22 && mes == "octubre"){
        console.log ("Tu signo zodiacal es: Libra");
    }
    else if(dia >= 23 && mes == "octubre" || dia <= 21 && mes == "noviembre"){
        console.log ("Tu signo zodiacal es: Escorpio");
    }
    else if(dia >= 22 && mes == "noviembre" || dia <= 21 && mes == "diciembre"){
        console.log ("Tu signo zodiacal es: Sagitario");
    }
    else if(dia >= 22 && mes == "diciembre" || dia <= 19 && mes == "enero"){
        console.log ("Tu signo zodiacal es: Capricornio");
    }
    else if(dia >= 20 && mes == "enero" || dia <= 18 && mes == "febrero"){
        console.log ("Tu signo zodiacal es: Acuario");
    }
    else if(dia >= 19 && mes == "febrero" || dia <= 20 && mes == "marzo"){
        console.log ("Tu signo zodiacal es: Piscis");
    }
}

