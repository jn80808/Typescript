//Annotation" is manual type that has been manually assigned to the declaration 




//declaration 
//declaration of type 
type CustomString = string; 
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;


//annotation : manually declaring the type 
let firtsName : CustomString = "Mark";
let age11 : CustomNumber = 32;
let today : CustomDate = new Date();
let unique1: CustomSymbol = Symbol();


//inference is allowing typescript assigneed data type 

function addNumbers(a: number, b:number){
    return a + b
}

let finalResult = addNumbers(10, 15);




