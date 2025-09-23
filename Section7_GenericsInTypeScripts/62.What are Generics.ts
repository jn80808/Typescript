//Typescript tells you that this is implicit any this parameter 
function returnParams(param){
    return param;
}

//declarig type in parameter any , with this the output type will be any too
function returnParam1 (param: any) {
    return param;
}

//make it generic by using <> 
function returnParam2<Type> (param: Type): Type {
    return param;
}

// -- call this function 
//using correct passing value 
returnParam2<string>("123"); 

//using not correct passing value 
returnParam2<string>(123); 

