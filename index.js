function callback() {}
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction () {
    const namedFunction = function () {
        console.log("name")
    }
    return namedFunction;
}

function returnsAnAnoymousFunction() {
    return function () {
        console.log("give me name")
    }
}