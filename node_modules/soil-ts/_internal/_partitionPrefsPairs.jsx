import partition from "../lodash/#partition";
import isEven from "./_isEven";
function partitionPrefsPairs(array) {
    array.shift();
    return partition(array, function (value, index) {
        return isEven(index);
    });
}
export default partitionPrefsPairs;
