'use strict'
const elementMain = document.querySelector('main.container');



// ciclo for da 1 a 100
for( let i= 1; i <100; i++){

    // creo i div per l'html
    const elementBox = document.createElement('div');    
    elementMain.append(elementBox);
    elementBox.classList.add("box" , "text-center", "fw-bolder" ,"align-middle", "pt-4");

    // numeri divisibili per 3 e 5
    if (i % 15 === 0){
        console.log('FizzBuzz')
        elementBox.classList.add("fizz-buzz");
        elementBox.innerHTML= ('FizzBuzz');
;
    }
    // numeri divisibili per 3
    else if(i % 3 === 0){
        console.log('Fizz');
        elementBox.classList.add("fizz");
        elementBox.innerHTML= ('Fizz');

    }
    // numeri divisibili per 5
    else if (i % 5 === 0){
        console.log('Buzz');
        elementBox.classList.add("buzz");
        elementBox.innerHTML= ('Buzz');
    }
    //tutti gli altri numeri
    else{
        console.log(i);
        elementBox.classList.add("non-divisible");
        elementBox.innerHTML= i;
    }

    
    

}