let post ={
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),

};

//added strict line annotation 
let post11: {
    title: string;
    content: string;
    date: Date;
} = {
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
};


// Different Approach 

type Post ={
    title: string;
    content: string;
    date: Date;
}


let post2 : Post ={
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    
};

//adding new properties that not include in the type Post 
let post3 : Post ={
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    category
};


