enum AgeUnit1 {
    Years = "years",
    Months = "months"
}

 //Signature function
type Person123 ={
    name: string;
    age: number;
    ageUnit: AgeUnit1;
    //greet: Function;
    greet: (greeting: string /*add:string */) => string; // so declaring it here we can create a type as shown below 
}

//declaring type for signature function 
type GreetingFunction = (greeting: string /*add:string */) => string; 

type Person1234 ={
    name: string;
    age: number;
    ageUnit: AgeUnit1;
    //greet: Function;
    greet: GreetingFunction // using type declare 
}



const persons123: Person123 ={
    name: "Scott",
    age: 30,
    ageUnit: AgeUnit1.Years,
    greet: (greeting) => { 
            return  `${greeting} ${persons123.name}`
        },
}; 



console.log(persons123.greet("hello"))







