//declare a data type 
type Numbers ={
    a: number;
    b: number;
    c: number;
}

//Declare a var object 
let numbers1: Numbers ={
    a:2,
    b:3,
    c:4,
}

//Declare a function 
function sum (numbers: Numbers){
    return numbers.a + numbers.b + numbers.c
}

function sum2({a,b,c}: Numbers){
    return a+b+c
}

//Declare a new var object 
let numbersObject: Numbers ={
    a:2,
    b:3,
    c:4,
}

//valid console log
console.log (sum2(numbers1))
console.log (sum2(numbersObject))
//invalid console log 
console.log(sum2({a:3, b:3, c:"string"}))


