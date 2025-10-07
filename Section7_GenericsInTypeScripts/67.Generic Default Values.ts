async function fetchData(url: string){
    const response = await fetch(url);
    const data = await response.json()
    return data;

}

//make strictly type 


async function fetchData1<T>(url: string){
    const response = await fetch(url);
    const data = await response.json()
    return data;

}





