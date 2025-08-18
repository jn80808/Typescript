const STATUS_LOADING ="loading";

const STATUS_STOPPED ="stopped";


//cannot reassigned new value 
STATUS_LOADING ="stopped"; 

//Declaring ENUMS 
// SYTAX :

enum Direction {
    Up,   //0
    Down, //1
    Left, //2
    Right //3
}

console.log(Direction.Up);

//cannot be reassigned 
Direction.Left= 5;

// adding a value 
enum Direction2 {
    Up = 1,
    Down, //2
    Left, //3
    Right //4
}

console.log(Direction.Right);


// adding a string value 
enum Direction3 {
    Up = "Up",
    Down, //2
    Left, //3
    Right //4
}

//ENUMS Practical Examples 

enum Roles {
    ADMIN ="admin",
    AUTHOR ="author",
    EDITOR ="editor",
}


type Person = {
    name: string;
    email: string;
    password:string;
    role:Roles;
}


const person123 : Person ={
    name:"John",
    email:"jj@gmail.com",
    password:"asdas",
    role:Roles.ADMIN,
};

console.log(person);


//ENUMS can be Heterogenous combine of string and numbers 



enum Direction4 {
    Up = 1,
    Down= "down",
    Left= 3
    
}
