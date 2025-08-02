
//Type of dog
type Dog ={
    name : string;
    barks: boolean;
    wags: boolean; 
};


//Type of Cat 
type Cat ={
    name: string;
    purrs: boolean;
};


//Union Type 
type DogAndCatUnion = Dog | Cat; 


//1st Application Union Type using the Dog Properties 

let dog12 : DogAndCatUnion ={
    name: "Buddy",
    barks: true,
    wags: true

};


//2nd Application Union Type using the Cat Properties 

let Cat : DogAndCatUnion ={
    name: "Meow",
    purrs: true
};


//3rd Application Union Type using the Dog&Cat Properties 
let hybridAnimal : DogAndCatUnion= {
    name: "Mdeow",
    purrs: true,
    barks: true,
}


//what not allowed partial property 


let dog123 : DogAndCatUnion ={
    name: "Buddy",
    barks: true,

};




