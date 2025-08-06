type Caterer = {
        name: string;
        address:string;
        phone:number;
}

type Seats ={
    [keyof:string]:string;
}



type Airplane = {
    model: string;
    flighNumber :  string;
    timeOfDeparture: Date;
    timeOfArrival : Date;
    caterer :Caterer,
    seats:Seats
}


let airplane = {
    model: "Airbus A380",
    flighNumber : "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival : new Date(),
    caterer :{
        name: "Special Food Ltd",
        address:"482, Some Street, New York",
        phone: 762389463298,
    },
    seats:{
        A1: "Mark",
        A2: "Nathan",
        A3: "Joe",
        A4: "Nicole"
    }
};



