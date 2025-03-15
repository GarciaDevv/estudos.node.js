function* numeros(){
  var a = yield "qual seu nome ?"
  var b =  yield " sua idade ?"
  var c =  yield " sua altura"

  return "seu nome é"+a+" sua idade é"+b+"sua altura é :"+c




}

const passar = numeros()


console.log(passar.next().value)
console.log(passar.next("lucas").value)
console.log(passar.next("22").value)
console.log(passar.next("1.65").value)





/*function* contador(){


    let num = 0

    while(true){
        yield num ++

        if(num >10)
            break
    }
}

const iterador = contador()

 for( i of iterador){

   console.log(i)
 } */