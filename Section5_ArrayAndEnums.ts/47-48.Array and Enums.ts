//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let numbers: number [] = [1,2,3];
let string: string[] = ["a","b"];

//*2. Create a tuple person that holds a string (name) and number(age).
let person1235: [string, number] = ["Alice",30];


//*3. Create a readonly array colors that holds strings and readonly tuple point that holds two numbers (x, y ).
//attempt to modify their elements and observe the Typescript Errors.
const colors: readonly string[] = ["red","green","blue"];
const point: readonly [number, number] = [10,20];

//*4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending 
enum StatusEnum {
    Active = "active",
    Inactive = "inactive",
    Pending = "pending",
}


//*5. Create an Object as const called status with the same structure as StatusEnum 

const Status  ={
    Active: "active",
    Inactive: "inactive",
    Pending: "pending",
}as const;







