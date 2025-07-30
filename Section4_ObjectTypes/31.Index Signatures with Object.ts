//Ex.1
type Author1 ={
    name:string;
    age:number;
    email:string;
    
}


type Post3 ={
    title: string;
    content: string;
    date: Date;
    author: Author;
    awards:{
        [Key: string]:{
            name : string;
            date : Date;
        }
    };

}

let post6 : Post3 ={
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



//Ex.2 : using encapsulation of the awards types 


type Awards ={
            [Key: string]:{
            name : string;
            date : Date;
        }
}

type Post4 ={
    title: string;
    content: string;
    date: Date;
    author: Author;
    awards:Awards;
}

let post7 : Post4 ={
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


//ex.3 encapsulate the Awards1 types properties 

type AwardsDetails={
            name : string;
            date : Date;
}


type Awards1 ={
        [Key: string]: AwardsDetails
}

type Post5 ={
    title: string;
    content: string;
    date: Date;
    author: Author;
    awards:Awards;
}

let post8 : Post4 ={
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





