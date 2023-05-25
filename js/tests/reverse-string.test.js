const reverseString = require('../reverse-string');

test('return the word reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
});

