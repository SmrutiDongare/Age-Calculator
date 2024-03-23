const add = require('./add');

// Test cases for the add function
describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

//   test('adds -1 + 2 to equal 1', () => {
//     expect(add(-1, 2)).toBe(1);
//   });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds 5 + (-5) to equal 0', () => {
    expect(add(5, -5)).toBe(0);
  });

//   test('adds floating point numbers correctly', () => {
//     expect(add(0.1, 0.2)).toBeCloseTo(0.3);
//   });
});
