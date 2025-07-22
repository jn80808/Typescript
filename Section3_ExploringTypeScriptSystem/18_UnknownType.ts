
// using any 
function multiplyByTwo(number: any){
    return number * 2 
}

// using unknown
function multiplyByTwo1(number: unknown){
    return number * 2 
}

// using unknown with condition 
function multiplyByTwo2(number: unknown){
    if (typeof number === "number"){
        return number * 2 
    }
    
    return "Please provide a valid number"
}


