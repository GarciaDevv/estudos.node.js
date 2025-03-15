
// uso de  THIS e setTimeout :)

function aluno(nome,matricula,serie){

    this.nome=nome
    this.matricula=matricula
    this.serie=serie

    this.anonimos_ = function(){
        setTimeout(()=>{
            console.log(nome,matricula,serie)



        },5000)





    }//what are you doing ?

    

}

let a = new aluno("Lucas Garci  Mousinho Pereira",20232243310,5)
a.anonimos_()

