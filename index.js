function receivesAFunction(Spy) {
    Spy();
}

function Spy() {
    console.log('I am a callback function')
}

//receivesAFunction(Spy); // just for testing

function returnsANamedFunction() {
    return Spy;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("anonymous function");
    }
}
