//getElementbyClassName

const cursos = [...document.getElementsByClassName("curso")]
const cursosc1 = [...document.getElementsByClassName("c1")]

const cursosc2 = [...document.getElementsByClassName("c2")]


cursosc1.map((e)=>{
  e.classList.add("destaque")






})

console.log(cursos[4].innerHTML)


























/* cursos.forEach(e => {

    e.style.display = "none"



})

 cursos.forEach((e,id)=>{
   setInterval(()=>{
     e.style.display ="block"



   },id * 1000)

 }) */
