'use strict';

var expect = require('chai').expect;
var twoNosSummary = require('../index');

describe('test add filter', function () {
    it('should return a summary of two numbers', function () {
        expect(twoNosSummary(1, 2)).to.equal(3)
    })
})