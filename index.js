function receivesAFunction(name){
    name();
}

function returnsANamedFunction(greet){
    return function greet(){
        console.log("Hi there!")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymus Function")
    }
}


