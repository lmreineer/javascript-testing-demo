const capitalizeFirstLetter = require('../capitalize');

test('return the word with its first letter capitalized', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
});

