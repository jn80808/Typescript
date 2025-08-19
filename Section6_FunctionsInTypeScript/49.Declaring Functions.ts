// named function 
function intro(name: string, age:number):string {
    return `My name is ${name} and Im ${age} years old`;
}


//Function expression 
const intro2 = function (name: string, age: number): string { 
    return `My name is ${name} and Im ${age} years old`;
}

//Arrow Functions 

const intro3 =  (name: string, age: number): string |number => { 
    return `My name is ${name} and Im ${age} years old`;
}



