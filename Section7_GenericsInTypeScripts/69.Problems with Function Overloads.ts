
//in previous 68 
const filter12 = (array: any[], predicate:() => boolean) => {
    let result: any[] = [];
    for (let i =0; i < array.length; i++ ){
        if (predicate(array[i])){
            result.push(array[i]);
        }
    }
    return result;
};

// solution 

type Filter ={
    (array: number[], predicate: (item:number) => boolean): number[]; 
    (array: string[], predicate: (item:string) => boolean): string[];
    (array: object[], predicate: (item:object) => boolean): object[];
};
const filter123 = (array: any[], predicate:(item:any) => boolean) => {
    let result: any[] = [];
    for (let i =0; i < array.length; i++ ){
        if (predicate(array[i])){
                result.push(array[i]);
        }
    }
    return result;
};


