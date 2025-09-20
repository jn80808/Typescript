const str ="Hello, World";

const part1 = str.slice(7);

const part1a = str.slice(7);
const part1b = str.slice(7,10);


console.log(part1);
console.log(part1a);
console.log(part1b);


type Reservation = {
    departureDate: Date;
    returnDate: Date;
    depatingFrom: string;
    destination:string; 
}

type Reserve = (
    departureDate: Date,
    returnDate: Date,
    depatingFrom: string,
    destination:string
)=> Reservation; 
