const caesar = require('../caesar-cipher');

test('put the shift level to one', () => {
    expect(caesar('abcde', 1)).toBe('bcdef');
});

test('put the shift level to one in capital letter', () => {
    expect(caesar('WXYZ', 1)).toBe('XYZA');
});

test('put the shift level to one in capital with punctuation mark', () => {
    expect(caesar('WX!YZ', 1)).toBe('XY!ZA');
});