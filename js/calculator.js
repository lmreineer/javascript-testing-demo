const calculator = {
    add: function (a, b) {
        if (typeof a === 'string' || typeof b === 'string' || typeof a === 'object') {
            return null;
        }
        return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    },

    multiply: function (a, b) {
        return a * b;
    },

    divide: function (a, b) {
        return a / b;
    },
}

module.exports = calculator
