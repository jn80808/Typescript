
// you can use void that does not return anything from within the function

function writeToDatabase(value: string): void {
    console.log("Writing to a database", value);
}


// Only use never When you are sure that your function execution will never complete

function throwError1(error: string): never {
    throw new Error (error);
}

// check 
type check1 = never extends void ? true : false;
type check22 = void extends never ? true : false;



