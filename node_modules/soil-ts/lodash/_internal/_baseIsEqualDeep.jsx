import isArray from "../basic/isArray";
import equalArrays from "./_equalArrays";
import equalByTag from "./_equalByTag";
import equalObjects from "./_equalObjects";
import getTag from "./_getTag";
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var objectTag = "[object Object]";
var hasOwnProperty = Object.prototype.hasOwnProperty;
function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
    if (!objIsArr) {
        objTag = getTag(object);
        if (objTag == argsTag) {
            objTag = objectTag;
        }
    }
    if (!othIsArr) {
        othTag = getTag(other);
        if (othTag == argsTag) {
            othTag = objectTag;
        }
    }
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && !(objIsArr || objIsObj)) {
        return equalByTag(object, other, objTag);
    }
    if (!isLoose) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
        }
    }
    if (!isSameTag) {
        return false;
    }
    stackA || (stackA = []);
    stackB || (stackB = []);
    var length = stackA.length;
    while (length--) {
        if (stackA[length] == object) {
            return stackB[length] == other;
        }
    }
    stackA.push(object);
    stackB.push(other);
    var result;
    if (objIsArr) {
        result = equalArrays(object, other, equalFunc, customizer, isLoose, stackA, stackB);
    }
    else {
        result = equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB);
    }
    stackA.pop();
    stackB.pop();
    return result;
}
export default baseIsEqualDeep;
