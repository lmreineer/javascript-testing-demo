const object = require('../analyze-array');

test('return correct calculations based on given array', () => {
    expect(object([1, 8, 3, 4, 2, 6])).toEqual({ average: 24, min: 1, max: 8, length: 6});
});