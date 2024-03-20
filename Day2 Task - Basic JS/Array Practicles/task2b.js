var input = [0, 23, 0, 0, 0, 4, 6, 0, 8, 10, 0, 0, 0, 12];

var nonZeroArr = input.filter(element => element !== 0);
var zeroArr = input.filter(element => element == 0);

var zeroCount = input.length - nonZeroElements.length;

var expectedOutput = nonZeroArr.concat(Array(zeroCount).concate(zeroArr));

console.log(expectedOutput);
