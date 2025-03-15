
// obtendo um lemento especifico  idicando o ID com getElementById

const elementos1 = document.getElementById("c1")
const elementos2 = document.getElementById("c2")
const elementos3 = document.getElementById("c3")
const elementos4 = document.getElementById("c4")
const elementos5 = document.getElementById("c5")
const elementos6 = document.getElementById("c6")


let arrayElementos =[elementos1,elementos2,elementos3,elementos4,elementos5,elementos6]


arrayElementos.map((a)=>{



console.log(a.id," é o id")
console.log(a,"é o elemento")
console.log(a.innerHTML,"innerHTML do elemento")




}) 