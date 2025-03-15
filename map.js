// map tem a funcionalidade de percorrer arrays
// uso quando vou precisar iterar o elemento por completo

/* const cursos = ["html","css","javascript","php","react"]
 cursos.map((elemento,posicao) =>{
    console.log(elemento,posicao)


 }) */

    
    
    
    
     /* let element = document.getElementsByTagName ("div")
    element = [...element]



element.map((ele,indece) =>{

console.log(ele.innerHTML)



}


)

 */



let el = document.getElementsByTagName("div")
console.log(el)
el = [...el]
el.map((el)=> {
    el.innerHTML
    console.log( el.innerHTML)


}) 


