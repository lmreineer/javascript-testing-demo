const calculate = require('../calculator');

test('should calculate numbers', () => {
    expect(calculate.add(5, 5)).toBe(10);
    expect(calculate.add(-2, -2)).toBe(-4);

    expect(calculate.subtract(5, 5)).toBe(0);
    expect(calculate.subtract(-2, -2)).toBe(0);

    expect(calculate.multiply(5, 5)).toBe(25);
    expect(calculate.multiply(-2, -2)).toBe(4);

    expect(calculate.divide(5, 5)).toBe(1);
    expect(calculate.divide(-2, -2)).toBe(1);
});

test('numbers should not add to strings', () => {
    expect(calculate.add('5', 5)).toBe(null);
});

test('numbers should not add to arrays', () => {
    expect(calculate.add([], 5)).toBe(null);
});

test('numbers should not add to objects', () => {
    expect(calculate.add({}, 5)).toBe(null);
});

