function a(){

    let a= parseInt(Math.random()*10)+1
    return a
   
}
let resultA= a()

let counterA=0
while (resultA!==3){
    
    resultA=a()
    counterA+=1
   
}

function b(){
    let b=parseInt(Math.random()*10)+1

    return b
    

}

let resultB=b()
let counterB=0
while (resultB!==3){
    
    resultB=b()
    counterB+=1
   
}


function diff(){
    if(counterA > counterB){
        return 'B is winner'
    }else{
        return 'A is winner'
    }
}
console.log(diff())