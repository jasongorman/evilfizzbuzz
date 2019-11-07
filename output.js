function list() {
    return [...Array(100)];
}

function fizz(input) {
    return undefined;
}

function buzz(input) {
    return undefined;
}

function fizzbuzz(number) {
    return undefined;
}

function output() {
    return (list().map((number) => fizz(buzz(fizzbuzz(number))))).toString();
}

module.exports = output;