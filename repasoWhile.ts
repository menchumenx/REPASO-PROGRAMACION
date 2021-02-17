

/*
----------- FUNCIONES WHILE 
*/

// existe par
function findPar2(arr1 : number []){
    let i : number = 0;

    while(!find && i<arr1.length){
    find = (arr[i] % 2 == 0)
        if(find){
            console.log("existe un numero par");
        }
    }
}

//nombres por m
function mNames(arrNames : string[]):Boolean
{
    let i : number = 0;

    while(i < arrNames.length && noM == true){
        if(arrNames[i][0] === "m"){
          noM = true  
        }else{
            noM = false
        }
        i++
    } return noM
}
