//Typescript tells you that this is implicit any this parameter 
function returnParams(param){
    return param;
}

//declarig type in parameter any , with this the output type will be any too
function returnParam1 (param: any) {
    return param;
}
