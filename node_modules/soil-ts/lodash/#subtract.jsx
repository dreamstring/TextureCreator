import createMathOperation from "./_internal/_createMathOperation";
var subtract = createMathOperation(function (minuend, subtrahend) { return minuend - subtrahend; }, 0);
export default subtract;
