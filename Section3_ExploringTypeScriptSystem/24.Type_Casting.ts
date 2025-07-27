let fistName1 = "Mark";

let fistName2 = <any> "Mark";

let fistName3 =  "Mark" as any;


//User Value Get from API 

let user11 ={
    name: "Mark",
    email: "mark@email.com",
};


//declare dataTypes of Object 
type User = {
    name: string;
    email: string;
};



//declare function 
function fetchUser0 (){
    return user1 ; 
}


function fetchUser1 (){
    return user1 as User ; 
}

//declare constant var 

const ffetchUser0 = fetchUser0();

const ffetchUser1 = fetchUser1();










