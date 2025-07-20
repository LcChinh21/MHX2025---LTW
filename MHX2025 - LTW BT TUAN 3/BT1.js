let x = 5;

function checkSNT(x){
    for(let i = 0; i < Math.sqrt(x); i++){
        if(x % i === 0){
            return false;
        }
        return true;
    }
}

console.log(checkSNT(x));