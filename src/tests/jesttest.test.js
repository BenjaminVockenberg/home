const jesttest = require('../js/jesttest');

test('adds 1 + 2 to equal 3', () => {
    expect(jesttest(1, 2)).toBe(3);
});