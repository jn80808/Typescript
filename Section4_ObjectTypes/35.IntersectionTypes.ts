type Cat808 ={
    name: string;
    purs: boolean;
    color: string;
}


type Dog808 = {
    name: string;
    barks: boolean;
    color: string;
}


//intersection Application 

type HybridAnimal808 = Dog808 & Cat808;

let HybridAnimal :  HybridAnimal808 ={
    name: "Max",
    color: "yellow",
    purs: true,
    barks: false
}

