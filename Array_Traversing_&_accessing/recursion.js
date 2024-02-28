// factorial using recurrsion

function fact(val){

    if(val==0){
        return 1
    }

    return val*fact(val-1)
    // 5*fact(5-1)*4*fact(4-1)
}
console.log(fact(5))