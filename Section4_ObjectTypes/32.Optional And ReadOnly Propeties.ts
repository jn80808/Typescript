
//ex.3 encapsulate the Awards1 types properties 

type AwardsDetails1={
            name : string;
            date : Date;
}


type Awards2 ={
        [Key: string]: AwardsDetails
}

type Post6 ={
    title: string;
    content: string;
    date: Date;
    author: Author;
    awards:Awards;
    category?:Awards;
}

let post9 : Post6 ={
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    author:{
        name:"JN",
        age: 28,
        email:"jn@gmail.com"
    },
    awards:{
        web:{
            name:"Web Awards",
            date: new Date()
        },
        web3:{
            name:"Web Awards2",
            date: new Date()
        }

    }
};

