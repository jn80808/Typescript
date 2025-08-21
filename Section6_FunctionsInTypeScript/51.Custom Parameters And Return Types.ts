enum AgeUnit {
    Years ="years",
    Months ="months",
}

type Person12 ={
    name: string;
    age: number;
    ageUnit: AgeUnit;
};



const person128: Person12 ={
    name: "Scot",
    age: 27,
    ageUnit: AgeUnit.Years,
}


function convertAgeToMonths(person: Person12): Person12 {
    if (person.ageUnit === AgeUnit.Years){
        person.age = person.age *12;
        person.ageUnit = AgeUnit.Months;
    }

    return person;
}

console.log (convertAgeToMonths(person128));
