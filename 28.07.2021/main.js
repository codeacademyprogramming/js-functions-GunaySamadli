// Implement findEven function(it can accept unlimited parameters)

const isEven =(...numbers) =>{
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]%2==0){
            console.log(numbers[i]); 
        }
    }
}
isEven(10,23,6,8,2,7);

function isEven2 () {
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i]%2==0) {
            console.log(arguments[i]);
        }    
    }
}

isEven2(3, 1, 100, 50, 10);



// Implement findOdd function(it can accept unlimited parameters)


const isOdd =(...numbers) =>{
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]%2==1){
            console.log(numbers[i]); 
        }
    }
}
isOdd(10,23,6,8,2,7);

function isOdd2 () {
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i]%2==1) {
            console.log(arguments[i]);
        }    
    }
}

isOdd2(3, 1, 100, 50, 10);


/* Write a JavaScript function that accepts a number as a parameter and
 check the number is prime or not. Go to the editor Note : A prime number 
 (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself

*/

function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
}

console.log(isPrime(31));



