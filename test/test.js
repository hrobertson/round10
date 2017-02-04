var should = require('should');
var round10 = require('../round10');

describe('round10.polyfill', function() {

    before(function() {
        round10.polyfill()
    });

    it('should add #round10 to Math', function() {
        // Round
        Math.round10.should.be.a.Function();
    });
    it('should add #floor10 to Math', function() {
        // Floor
        Math.floor10.should.be.a.Function();
    });
    it('should add #ceil10 to Math', function() {
        // Ceil
        Math.ceil10.should.be.a.Function();
    });

});

describe('round10', function() {

    it('should have #round10', function() {
        // Round
        round10.round10(55.55, -1).should.equal(55.6);
        round10.round10(55.549, -1).should.equal(55.5);
        round10.round10(55, 1).should.equal(60);
        round10.round10(54.9, 1).should.equal(50);
        round10.round10(-55.55, -1).should.equal(-55.5);
        round10.round10(-55.551, -1).should.equal(-55.6);
        round10.round10(-55, 1).should.equal(-50);
        round10.round10(-55.1, 1).should.equal(-60);
        round10.round10(1.005, -2).should.equal(1.01);
    });
    it('should have #round10 to halves', function() {
        round10.round10(55.55, -1.5).should.equal(55.55);
        round10.round10(55.525, -1.5).should.equal(55.55);
        round10.round10(55.524, -1.5).should.equal(55.5);
        round10.round10(55.575, -1.5).should.equal(55.6);
        round10.round10(55.574, -1.5).should.equal(55.55);
        round10.round10(-55.55, -1.5).should.equal(-55.55);
        round10.round10(-55.525, -1.5).should.equal(-55.5);
        round10.round10(-55.526, -1.5).should.equal(-55.55);
        round10.round10(-55.575, -1.5).should.equal(-55.55);
        round10.round10(-55.576, -1.5).should.equal(-55.6);
    });
    it('should have #floor10', function() {
        // Floor
        round10.floor10(55.59, -1).should.equal(55.5);
        round10.floor10(59, 1).should.equal(50);
        round10.floor10(-55.51, -1).should.equal(-55.6);
        round10.floor10(-51, 1).should.equal(-60);
    });
    it('should have #floor10 to halves', function() {
        round10.floor10(55.55, -1.5).should.equal(55.55);
        round10.floor10(55.525, -1.5).should.equal(55.5);
        round10.floor10(55.575, -1.5).should.equal(55.55);
        round10.floor10(-55.55, -1.5).should.equal(-55.55);
        round10.floor10(-55.525, -1.5).should.equal(-55.55);
        round10.floor10(-55.575, -1.5).should.equal(-55.6);
    });
    it('should have #ceil10', function() {
        // Ceil
        round10.ceil10(55.51, -1).should.equal(55.6);
        round10.ceil10(51, 1).should.equal(60);
        round10.ceil10(-55.59, -1).should.equal(-55.5);
        round10.ceil10(-59, 1).should.equal(-50);
    });
    it('should have #ceil10 to halves', function() {
        round10.ceil10(55.55, -1.5).should.equal(55.55);
        round10.ceil10(55.525, -1.5).should.equal(55.55);
        round10.ceil10(55.575, -1.5).should.equal(55.6);
        round10.ceil10(-55.55, -1.5).should.equal(-55.55);
        round10.ceil10(-55.525, -1.5).should.equal(-55.5);
        round10.ceil10(-55.575, -1.5).should.equal(-55.55);
    });
});