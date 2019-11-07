const assert = require('assert');
const output = require('../output');

describe('outputs as comma-delimited string', () => {
    it('has 100 elements', () => {
        assert.equal(output().split(',').length, 100);
    })
})