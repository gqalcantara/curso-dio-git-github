let arr = [4,3,1,2]
let arrPar = ""; 
let arrImpar = ""; 

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede

for(let i = 0; i < arr.length; i++){
    
    if(arr[i]%2 == 0){
    arrPar = arrPar.concat(arr[i])
    if(arrPar.length > 0) arrPar = arrPar.concat(", ")
    }else{
    arrImpar = arrImpar.concat(arr[i])
    if(arrImpar.length < arr.length) arrImpar = arrImpar.concat(", ")
  }
}

let result = arrPar.concat(arrImpar)

console.log(result)