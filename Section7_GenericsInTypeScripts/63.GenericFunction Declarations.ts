type GetFirstElement = <T> (arr: T[]) => T;

//Normal
const getFirstElement = (arr) =>{
    return arr[0]
}

//Applying the Generic Type GetFirstElement
const getFirstElement1: GetFirstElement = (arr) => {
    return arr[0]
}

const numbersArray = [1,223,22,3,,4,,]

const stringArray = ["s","d","r","f"]

let numberOutput = getFirstElement<number>(numbersArray);






