// default parameter name function 
function intro (name: string, age: number): string {
     return `My name is ${name} and Im ${age} years old`;
}

intro ("Joy",27);
intro ("Joy");


// optional function country? by using ?
function intro1 (name: string, age: number, country?: string): string {
    return `My name is ${name} and Im ${age} years old`;
}
//calling function without country 
intro1 ("Joy",27);

function intro123 (name: string, age: number, country?: string): string {
    if (country) {
       return `My name is ${name} and Im ${age} years old. I Live in ${country}`; 
    }

    return `My name is ${name} and Im ${age} years old`;
}
intro123 ("Joy",27);
intro123 ("Joy",27,"USA");


