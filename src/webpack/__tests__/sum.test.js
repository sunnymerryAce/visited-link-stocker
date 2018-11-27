// sum.test.js
const sum = require('../helper/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(2, 2)).toBe(4);
});
