//UNION OF ARRAY 

let person1 : (number | string) [] =["Jhon", "Doe", 27];



//TUPLE : has fixed shape and fixed length


let person3 : [string, string, number] =["Jhon", "Doe", 27];

//>>  TUPLE : [ DATATYPE1 , DATATYPE2], DATATYPE3
//>>  ARRAY :  (DATATYPE1 , DATATYPE2]) [ ]


//Declare a Custom Type for TUPLE  

type User1 = [string, string, number, string?]; 

let User2: User1 = ["Mark", "Doe",32]


let User3: User1 = ["Mark", "Doe",32, "mark@email.com "]


//Declare a Custom Type for TUPLE  the 1st 2 element is stric and the rest is not 

type listOfStudents = [number , boolean , ...string[]]

//Apply value 

const passingStudent: listOfStudents = [3,true, "Jhon","Stella","Mark"]; 

//another example where rest parameter is in different location 

type StringBooleanNumber =  [string, ...boolean[], number];
type BooleanStringNumber = [...boolean[], string, number ];

let StringBooleanNumber: StringBooleanNumber = ["String", true, false,true,32]
let BooleanStringNumber: BooleanStringNumber = [true, true, false, true,"string",1]






