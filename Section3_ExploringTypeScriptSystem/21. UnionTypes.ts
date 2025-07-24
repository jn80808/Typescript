// string and number is a primitive type.
// UNION :  of two types which are primitive types.


//declaring a union type need to declare our own types 
// syntax 
// type customNameforthetype = DataType1 | DataType2; 

type StringOrNumber1 = string | number;

// then let decalre a variable and use this cuustomDataType 

let VarStringOrNum : StringOrNumber1= "1234";
let VarStringOrNum1 : StringOrNumber1= 123;


// Another Example 

type NumberOrUndefined = number | undefined;
type NumberStringUndefined  = number | string |undefined;
type DateOrUndefined = Date | undefined; 



function print (input: string | undefined){
    if (input) {
        console.log(input);
    }
    else{
    console.log("Please input something to print")
    }

}

print();
print("Hello ");

