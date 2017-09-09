// ==ORIGINAL==
function foo() {
    let x = 10;
    x++;
    return;
}
// ==SCOPE::inner function in function 'foo'==
function foo() {
    let x = 10;
    return newFunction();

    function newFunction() {
        x++;
        return;
    }
}
// ==SCOPE::function in global scope==
function foo() {
    let x = 10;
    x = newFunction(x);
    return;
}
function newFunction(x: number) {
    x++;
    return x;
}
