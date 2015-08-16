
    console.log("Hey, this works!");

function mathA(x) {
    return x*x;
}
function mathB(x) {
    return x+2;
}
function mathC(x) {
    return x*2
}

console.log(mathA(mathB(mathC(3))));