import createMathOperation from "./_internal/_createMathOperation";
var add = createMathOperation(function (augend, addend) { return augend + addend; }, 0);
export default add;
