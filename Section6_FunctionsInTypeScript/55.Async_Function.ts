// We use the async keyword when defining asynchronous functions in JavaScript.
/*
async:  lets you use await and makes the function return a Promise.
Promise<any>:  tells TypeScript that the result of the function is asynchronous and will eventually hold a value.

A Promise is basically a "contract" that says:
“I don’t have the result yet, but I promise I will either give you the result (resolve) or tell you what went wrong (reject) later.”

Three states of a Promise
Pending – still waiting, not finished yet.
Fulfilled (Resolved) – success, you got the value.
Rejected – something went wrong, you got an error instead.

syntax:
Promise<datatype>

*/

//Ex.1
function getNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // simulate success
      if (success) {
        resolve(42); // promise fulfilled with value 42
      } else {
        reject("Something went wrong"); // promise rejected with error
      }
    }, 1000);
  });
}

//Ex.2 Usage:
getNumber().then(num => {
  console.log("Got:", num); // after 1s -> Got: 42
}).catch(err => {
  console.error("Error:", err);
});


//Ex.3 with Async/Await
async function main() {
  try {
    const num = await getNumber(); 
    console.log("Got:", num);
  } catch (err) {
    console.error("Error:", err);
  }
}



//functionn syntax using async and Promise<datatype>: any
async function fetchFromDataBase(id:number): Promise<any> {};

//arrow function syntax using async and Promise 
const anotherAsyncFunction = async () : Promise<any> => {};


//functionn syntax using async and Promise <datatype> : string which need a return of string thats why getting error 
async function fetchFromDataBase1(id:number): Promise<string> {};

//functionn syntax using async and Promise <datatype> : string adding return of string 
async function fetchFromDataBase2(id:number): Promise<string> {
    return Promise.resolve("string")
};


// Using specific type for Promise<customDataType>
//declare CustomType 

type User123 ={
    name: string;
    age: number;
}


async function returnUser(id: number){
    return Promise.resolve({name: "Jhon", age:20})
};

//apply the async and Promise 
async function returnUser123(id: number): Promise<User123>{
    return Promise.resolve({name: "Jhon", age:20})
};





