
type Reservation1 = {
    departureDate: Date;
    returnDate: Date;
    depatingFrom: string;
    destination:string; 
}

type Reserve1 = {
    ( /*1st case */
        departureDate: Date,
        returnDate: Date,
        depatingFrom: string,
        destination:string
): Reservation1 | never;
    ( /*2nd case */
        departureDate: Date,
        depatingFrom: string,
        destination:string
): Reservation1 | never;
};

const reserve : Reserve1 = ( /*Declare Parameter */
    departureDate: Date,
    returnDateOrDepartinFrom: Date | string,
    departingFromOrDestination: string,
    destination?: string

)=>{
    if (returnDateOrDepartinFrom instanceof Date && destination){
        return { /*1st case */
            departureDate: departureDate,
            returnDateOrDeparting: returnDateOrDepartinFrom,
            depatingFrom: departingFromOrDestination,
            destination: destination
        }
    } else if (typeof returnDateOrDepartinFrom === "string"){
        return {
            departureDate: departureDate,
            depatingFrom: returnDateOrDepartinFrom,
            destination: departingFromOrDestination
        };
    }
    throw new Error("Please Provide valid details to reserve a ticket")
}; 

console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));

