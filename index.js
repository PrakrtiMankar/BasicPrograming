function checkPrime(num) {
    // if num is prime?
    let prime = 0;

    for(let i = 2; i<=num; i++){
        
        if (num%i == 0){
            prime++;
        }
    }

    if(prime > 1){
        console.log('false');
    }
    else if(num===1){
        console.log('unique number');
    }
    else if(num===0){
        console.log('enter number greater than zero');
    }
    else {
        console.log('true');
    }
}
checkPrime(9);