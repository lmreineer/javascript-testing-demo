const average = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0);
    return sum;
}

const minimum = (arr) => {
    const smallestValue = Math.min(...arr);
    return smallestValue;
}

const maximum = (arr) => {
    const largestValue = Math.max(...arr);
    return largestValue;
}

const length = (arr) => {
    const totalNumber = arr.length;
    return totalNumber;
}

const object = (arr) => {
    return {
        average: average(arr),
        min: minimum(arr),
        max: maximum(arr),
        length: length(arr),
    }
}

module.exports = object

