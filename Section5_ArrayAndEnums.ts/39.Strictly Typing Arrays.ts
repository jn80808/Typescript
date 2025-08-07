//Array Type Number 
let a: number [] = [1,2,3]


let b: [number] = [1,2,3]

//Another way to declare a Array 
let a1: Array<string> =["a","b","c"]

let a2 : Array<number> = [1,2,3,4,]

//Array contained a string and number : will use a UNION 
let c: (string | number)[] = ["a",1]


let c2: (string | number | boolean)[] = ["a", 1 , true]


//Array of Objects 
type Caterer1 = {
    name: string;
    address: string;
    phone: string; // changed to string to handle large numbers
};

type Seats1 = {
    [key: string]: string;
};

type Airplane1 = {
    model: string;
    flightNumber: string; // fixed spelling
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: Caterer1;
    seats: Seats1;
};

//---type ARRAY Object 
type Airplanes = Airplane1[];

let airplane12w: Airplanes = [
    {
        model: "Airbus A380",
        flightNumber: "A2201",
        timeOfDeparture: new Date(),
        timeOfArrival: new Date(),
        caterer: {
            name: "Special Food Ltd",
            address: "482, Some Street, New York",
            phone: "762389463298", // use string here
        },
        seats: {
            A1: "Mark",
            A2: "Nathan",
            A3: "Joe",
            A4: "Nicole"
        },
    },
];







