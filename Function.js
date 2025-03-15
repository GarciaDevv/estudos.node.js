function calc0 (){
    console.log("chamaou a função") // Sintaxe  básica de funçao ( apenas exibe no console e não armazena em lugar nenhum)
}

calc0() // chamando a função calc0


// Agora passando os parametros da funçao FUNÇÃO PARAMETRIZADA 
// que retona um resultado pra a chamar

function  calc1 (a,b){
   return a*b
    
}

let resul = calc1(60,2) // (uma funçao que armazena o valor em uma variavel)

console.log(resul)
resul+= -60
console.log(resul)






function canal (){

    var n1=10
    var n2 =5
    var res = n1*n2
    return res;
    
}

console.log(canal())

