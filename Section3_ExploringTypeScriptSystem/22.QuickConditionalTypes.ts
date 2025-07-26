type CustomDate1 = Date;
type CustoString = string; 



type TrueString = CustomString extends string ? true : false ; 
type ConditionalNumber = CustomDate1 extends Date ? number : string; 
type DateAssignment = CustomDate extends  Date ? Date : undefined;

//if customdate is date then date if not undefined 




