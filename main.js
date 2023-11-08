'use strict'
const elementMain = document.querySelector('main.container');



// ciclo for da 1 a 100
for( let i= 1; i<100; i++){
    
    // numeri divisibili per 3 e 5
    if (i % 15 === 0){
        console.log('FizzBuzz');
    }
    // numeri divisibili per 3
    else if(i % 3 === 0){
        console.log('Fizz');
    }
    // numeri divisibili per 5
    else if (i % 5 === 0){
        console.log('Buzz');
    }
    //tutti gli altri numeri
    else{
        console.log(i);
    }

    const ElementBox = document.createElement('div');    
    elementMain.append(div);

}