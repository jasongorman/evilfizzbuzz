const assert = require('assert');

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

describe('outputs as comma-delimited string', () => {
    it('has 100 elements', () => {
        assert.equal(output().split(',').length, 100);
    })
})