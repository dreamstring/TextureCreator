import isArrayLikeObject from "../#isArrayLikeObject";
function castArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : [];
}
export default castArrayLikeObject;
