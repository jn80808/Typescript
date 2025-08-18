enum ShapeKind {
    Circle = "circle",
    Square = "square"
}



type Circle = {
    kind: ShapeKind.Circle;
    radius: number; 
}


type Square = {
    kind: ShapeKind.Square;
    sideLength: number;
}

let circle: Circle ={
    radius: 100,
    kind: ShapeKind.Square,
};


function printShape(shape:ShapeKind /** circle/ square */){
    console.log(shape);
}

printShape(ShapeKind.Square);


