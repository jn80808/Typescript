const filter = (array: any[], predicate:(item:any) => boolean) => {
    let result: any[] = [];
    for (let i =0; i < array.length; i++ ){
        if (predicate(array[i])){
            result.push(array[i]);
        }
    }
    return result;
};

let numbera = [1, 2, 3, 4, 5,6,7,8,9];
function predicatea(item: number){
    return item > 7;
}

let animalsa = ["cat", "dog", "bird"];
function filtercat(item: string){
    return item ==="cat";
}



console.log(filter(numbera, predicatea));
console.log(filter(animalsa, filtercat));







const filter1 = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  let result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

const numbers1a = [1, 2, 3, 4, 5];
const evens = filter(numbers1a , n => n % 2 === 0);

console.log(evens); // [2, 4]
