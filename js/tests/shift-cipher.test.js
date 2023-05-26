const shiftCipher = require('../shift-cipher');

test('put the shift level to four', () => {
    expect(shiftCipher('yzabc', 4)).toBe('cdefg');
});

test('put the shift level to one in capital letter', () => {
    expect(shiftCipher('WXYZ', 1)).toBe('XYZA');
});

test('put the shift level to one in capital with punctuation mark', () => {
    expect(shiftCipher('WX!YZ', 1)).toBe('XY!ZA');
});