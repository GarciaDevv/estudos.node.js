



//  SOMANDO O ARRAY E CRIANDO UM NOVO COM O MAP USANDO ARROW FUNCTION

/* let array = [10,10,10,10,10]

let novoarray = array.map(elemento => elemento *2)


console. log(novoarray)
console.log(array) */


// com o metodo reduce somando cada elemento do array um por um


let array2 =[1,2,3,4,5,6,7,8,9,10]

let soma2 = array2.reduce((acumulador,itemAtual) => acumulador + itemAtual,0)


 //  filtrando um array para encontrar os valores do tipo string usando FILTER e typof


let array3 =[1,2,3,4,5,6,7,8,9,10,"lucas","garcia"]

let soma3 =  array3.filter(valor => typeof valor === "string")

//



 //  filtrando um array para encontrar os valores do tipo booleano usando FILTER e typof



let array4 =[1,2,3,4,5,6,7,8,9,10,"lucas","garcia",true,false]

let soma4 = array4.filter(item => typeof item === "boolean")

console.log(soma4)