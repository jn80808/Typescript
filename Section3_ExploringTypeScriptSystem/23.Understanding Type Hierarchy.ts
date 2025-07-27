
type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;

type check3 = null extends any ? true : false;
type check4 = undefined extends void ? true : false;

type check5 = [] extends Object?  true : false;


const throwError = (errMessage: string)=>{
    throw new Error(errMessage);
}





