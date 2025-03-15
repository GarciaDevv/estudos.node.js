// CALCULO DE ATRASOS E HORAS TRABALHADAS

let entradaManha,saidaManha,entradaTarde,saidaTarde

let totalHtrabalhadas,totalAtrasos,mediaHtrabalhadas,mediaAtrasos

let pergunta = document.getElementsByClassName("caixa")


totalHtrabalhadas = 0;
totalAtrasos = 0;
dias = 0;

function whatDays(dias){
    for(let i =0; i <= dias;i++)
    {console.log("Dia",i)}
}
whatDays(30)

function whatHoras(Hentrada){
entradaManha = parseInt(prompt("Digite a Hora de entrada  (HH:MM):"),Hentrada)


}


whatHoras("10:00")



console.log(entradaManha)