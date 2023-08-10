import createMathOperation from "./_internal/_createMathOperation";
var multiply = createMathOperation(function (multiplier, multiplicand) { return multiplier * multiplicand; }, 1);
export default multiply;
