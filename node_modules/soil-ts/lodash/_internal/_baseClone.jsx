import or from "../basic/_or";
import isArray from "../basic/isArray";
import arrayEach from "./_arrayEach";
import baseForOwn from "./_baseForOwn";
import cloneRegExp from "./_cloneRegExp";
import copyArray from "./_copyArray";
import copyObject from "./_copyObject";
import getTag from "./_getTag";
import initCloneObject from "./_initCloneObject";
import has from "../#has";
import isObject from "../#isObject";
import keys from "../#keys";
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var stringTag = "[object String]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = true;
cloneableTags[errorTag] = false;
function initCloneByTag(object, tag) {
    var Ctor = object.constructor;
    switch (tag) {
        case boolTag:
        case dateTag:
            return new Ctor(object.valueOf());
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
    }
}
function isRegExpExecArray(array) {
    return typeof array[0] === "string" && has(array, "index");
}
function initCloneArray(array) {
    var length = array.length;
    var Ctor = array.constructor;
    var result = new Ctor(length);
    if (length && isRegExpExecArray(array)) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
    var result;
    if (customizer) {
        result = object ? customizer(value, key, object) : customizer(value);
    }
    if (result !== undefined) {
        return result;
    }
    if (!isObject(value)) {
        return value;
    }
    var isArr = isArray(value);
    var tag = getTag(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
            return copyArray(value, result);
        }
    }
    else {
        var isFunc = typeof value === "function";
        if (or(tag == objectTag, tag == argsTag, isFunc && !object)) {
            result = isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
                return copyObject(value, keys(value), result);
            }
        }
        else {
            return cloneableTags[tag] ? initCloneByTag(value, tag) : object ? value : {};
        }
    }
    stackA || (stackA = []);
    stackB || (stackB = []);
    var length = stackA.length;
    while (length--) {
        if (stackA[length] == value) {
            return stackB[length];
        }
    }
    stackA.push(value);
    stackB.push(result);
    if (isArr) {
        arrayEach(value, function (subValue, key) {
            result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
        });
    }
    else {
        baseForOwn(value, function (subValue, key) {
            result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
        });
    }
    return result;
}
export default baseClone;
