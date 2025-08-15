//Regular Array 
let number : number[] =  [1,2,3];

//ReadOnlyArray 

let number1 : readonly number[] =  [1,2,3];



//Regular Tuple 

type RegularTuple = [string, string, number];

// Tuple with ReadOnly 

type ReadOnlyTuple = readonly [string, string, number];


let person8 : ReadOnlyTuple = ["Joy", "Ng", 27];

person8[0] = "dd"


//alternative way to declare a readonly array 

type a = Readonly<string[]>;


//Array ReadOnly 
type a1 = Readonly<string[]>;
type b = ReadonlyArray<(string)>; //alternative to declare readonly 


//ArrayUnion ReadOnly 
type a3 = Readonly<(string| number)[]>;
type b2= ReadonlyArray<(string | number)>;










