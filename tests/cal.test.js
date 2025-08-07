// tests/calculator.test.js

const { add, multiply } = require('../src/cal');

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiplies 4 * 5 = 20', () => {
  expect(multiply(4, 5)).toBe(20);
});
