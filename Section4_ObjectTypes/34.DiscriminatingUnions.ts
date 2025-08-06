type NetworkLoadingState = {
    state : "Loading";
};


type NetworkFieldLoadState = {
    state : "Failed";
    code: number; 
};


type NetworkSuccessSate = {
    state : "Success";
    response :{
        title : string;
        duration: number;
        summary: string; 
    }
}; 

//Union of NetworkState 
type NetworkState = NetworkLoadingState | NetworkFieldLoadState | NetworkSuccessSate ; 

//return base on state application 
function logger(state:NetworkState){

    switch (state.state){
        case "Loading":
            return "Loading..";
        case "Failed":
            return `Error ${state.code}`
        case "Success":
            return `Downloading ${state.response.title}`;
    }

    
}


