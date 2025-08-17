enum Direction5 {
    Up,   //0
    Down, //1
    Left, //2
    Right //3
}


//enums with const not compiled in javascript
const enum EDirection {
    Up,   //0
    Down, //1
    Left, //2
    Right //3
}

let eDirection = EDirection.Up;
let direction = Direction5.Right;


//Object 
const ODirection = {
    Up:  0,
    Down: 1,
    Left: 2,
    Right:3,

}

ODirection.Up ="newValue";

