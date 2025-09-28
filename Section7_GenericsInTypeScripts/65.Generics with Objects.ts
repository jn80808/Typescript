//static 
let stringNumberPair ={
    key: "age",
    value: 30
}


let NumberArrayPair ={
    key: 123,
    value: ["a"]
}

//type generic key: value pair 
type KeyValuePair<K,V> = {
    key: K;
    value: V;
}

//application of the generic type 

let stringNumberPair1: KeyValuePair<string,number> ={
    key: "age",
    value: 30
}


let NumberArrayPair1 :KeyValuePair<number,string[]> ={
    key: 123,
    value: ["a"]
}


type HasId ={
    id: number;
}

function printId<T extends HasId>(obj:T){
    console.log(obj.id);
}


const user = {
    id: 1234,
    name:"Alice"

}


printId(user);

const product = {
    name: "Laptop"
}


printId(product)



