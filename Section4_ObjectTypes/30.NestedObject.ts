
//Ex.1
type Post1 ={
    title: string;
    content: string;
    date: Date;
    author:{
        name:string;
        age:number;
        email:string;
    }
}



let post4 : Post1 ={
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    author:{
        name:"JN",
        age: 28,
        email:"jn@gmail.com"
    }
    
};



//Ex.2

type Author ={
    name:string;
    age:number;
    email:string;
    
}

type Post2 ={
    title: string;
    content: string;
    date: Date;
    author: Author;

}

let post5 : Post2 ={
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    author:{
        name:"JN",
        age: 28,
        email:"jn@gmail.com"
    }
    
};
