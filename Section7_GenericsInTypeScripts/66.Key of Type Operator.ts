type Events = {
    id: number;
    date: Date;
    type: "indoor"| "outdoor";
}

type UnionOfKeysOfEvents = keyof Events; //id | date | type

let idOfEvent: UnionOfKeysOfEvents = "id";

//will get an error is UnionOfKeysOfEvents is not in Events 
let idOfEvent1: UnionOfKeysOfEvents = "some";


//Index Signature 
type Numeric ={
    [key: number]: string;
}


type NumerickeyOf = keyof Numeric;

type NumberAndString ={
    [key: string]: string;
}


type NumberAndStringkeyof = keyof NumberAndString;


let stringObject: NumberAndString ={
    0: "Firts",
    second:"second",
}

console.log(stringObject["0"]);








