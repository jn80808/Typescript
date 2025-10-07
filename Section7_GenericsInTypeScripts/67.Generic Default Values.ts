async function fetchData(url: string){
    const response = await fetch(url);
    const data = await response.json()
    return data;

}

//make strictly type 


async function fetchData1<T>(url: string):Promise<T>{
    const response = await fetch(url);
    const data = await response.json()
    return data;

}

//default value any type 
async function fetchData2<T=any>(url: string):Promise<T>{
    const response = await fetch(url);
    const data = await response.json()
    return data;

}

async function fetchDefault() {
    const data = await fetchData1("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
    
}


fetchDefault();


//declare a type that return data type base on the return in the https

type PostA ={
    userId: number;
    id: number;
    title:string;
    body: string;
}

async function fetchPost() {
    const post = await fetchData1<PostA>("https://jsonplaceholder.typicode.com/posts/1");
    console.log(post);
    
}

fetchPost();



