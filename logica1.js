let contagem1 = 10
for(let i = 0;i<=10;i++){


 console.log(contagem1 --,i)


}

function regresi(num){

setInterval(() => {

    for(let i=0;i<=num;i++){
        
        console.log(num--)
        if(num === -0){
            console.log("congratulatios !!!")
        }


    }

    
}, 1000);



}

regresi(10)