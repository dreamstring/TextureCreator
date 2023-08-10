import baseSum from "./_internal/_baseSum";
function sum(array) {
    return array != null && array.length ? baseSum(array, function (value) { return value; }) : 0;
}
export default sum;
