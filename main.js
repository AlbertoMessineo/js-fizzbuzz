'use strict'




// ciclo for da 1 a 100
for( let i= 1; i<100; i++){
    
    // numeri divisibili per 3
    if(i % 3 === 0){
        console.log('Fizz');
    }
    // numeri divisibili per 5
    else if (i % 5 === 0){
        console.log('Buzz');
    }
    // numeri divisibili per 3 e 5
    else if (i % 15 === 0){
        console.log('FizzBuzz');
    }
    //tutti gli altri numeri
    else{
        console.log(i);
    }

}