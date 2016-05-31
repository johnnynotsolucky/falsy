var assert = require('chai').assert;
var falsy = require('../');

describe('falsy', function() {
  it('is falsy if object is null', function() {
    assert.equal(falsy(null), true);
  });

  it('is falsy if object is undefined', function() {
    assert.equal(falsy(), true);
  });
  
  it('is falsy if object is is a number and zero', function() {
    assert.equal(falsy(0), true);
  });
  
  it('is falsy if object is an empty string', function() {
    assert.equal(falsy(''), true);
  });
  
  it('is not falsy if object is number other than zero', function() {
    assert.equal(falsy(1), false);
    assert.equal(falsy(-1), false);
  });
  
  it('is not falsy if object is defined', function() {
    assert.equal(falsy({}), false);
  });
  
  it('is not falsy if object is not an empty string', function() {
    assert.equal(falsy(' '), false);
  });
  
  it('is falsy if object is string of whitespace', function() {
    assert.equal(falsy(' ', { ws: true }), true);
    assert.equal(falsy('     ', { ws: true }), true);
  });
});
