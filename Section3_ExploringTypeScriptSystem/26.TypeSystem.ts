let city1 = "New York"; //string 
let population = 840000; //number
const age32 = 32; //32
let oldAge = 79 as const; //79
let newAge = oldAge; //79
let data = new Map(); //Map<any,any>
let score = [90,60,190]; //array of number[]
type Primitive = string | number | boolean ; // string | number | boolean
type CustomName = "Jhon" extends string ?  string : "Jhon"; // string
type CustomAge = typeof newAge extends number ? 79 : number; //79
type CheckData = typeof data extends Object ? true : false; //true
type CheckScore = typeof score extends never ? {} : []; //[]

/**
 * Are the Following statements valid 
 * check if below lines of code are valid as per TypeScript or not without uncommenting them 
 */

age32 = 85;
score.push(10);
score.push("NewScore");
let CustomAge: CustomAge = 50; 
let Primitive: Primitive = new Date();
let years: CheckScore = []; 







