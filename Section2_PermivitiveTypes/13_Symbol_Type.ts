let id: symbol = Symbol();
let id2: symbol = Symbol(123);
let id3: symbol = Symbol("123");


let alphabeticId: symbol = Symbol("id");

let user1 ={
    [id]:"123",
    name: "Mark"
};

console.log(user1.name); 
console.log(user1.id); //undefined
console.log(id);


let user2 ={
    [id]:"123",
    name: "Mark",
    getId(){
        return this[id]
    }
};

console.log(user2); 
console.log(user2.getId()); 



let message: string = "Hello";
let age1 : number = 42;
let isStudent1 : boolean = true;
let fetched : null = null;
let user3 : undefined = undefined;
let largeNumber : bigint= 999988899n;
let unique: symbol = Symbol("uniqueSymbol");












