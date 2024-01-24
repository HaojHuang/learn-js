function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name);
    }
    return dispName; //return a function with its bindings
}

const f = makeFunc();
f(); // f contains its function and the bindings and we can execute it here