const shiftCipher = (string, shift) => {
    const lowercaseCode = 97;
    const uppercaseCode = 65;
    const alphabetSize = 26;

    return string.replace(/[a-z]/gi, (char) => {
        const code = char.charCodeAt(0);
        let shiftedCode;

        if (code >= lowercaseCode && code < lowercaseCode + alphabetSize) {
            shiftedCode = ((code - lowercaseCode + shift) % alphabetSize) + lowercaseCode;
        } else if (code >= uppercaseCode && code < uppercaseCode + alphabetSize) {
            shiftedCode = ((code - uppercaseCode + shift) % alphabetSize) + uppercaseCode;
        } else {
            return char; // Character is not a letter
        }

        return String.fromCharCode(shiftedCode);
    });
}

module.exports = shiftCipher
