import createMathOperation from "./_internal/_createMathOperation";
var divide = createMathOperation(function (dividend, divisor) { return dividend / divisor; }, 1);
export default divide;
