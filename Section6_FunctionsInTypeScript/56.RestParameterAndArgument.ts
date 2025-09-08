
function multiplyBy(by:number){}

function multiplyBy12(by:number, num1: number, num2: number){}

function multiplyBy13(by:number, ... number: number[]){}

function multiplyBy14(by:number, ... numbers: number[]){
    return numbers
}

function multiplyBy15(by:number, ... numbers: number[]){
    return numbers.map((numbers=>by * numbers))
}

console.log(multiplyBy15(2,3,4,5,6));

const args = [8, 5];

const args1 = [8, 5] as const;

const args12 = Math.atan2(...args1);

const angle2 = Math.atan2(...args12)



