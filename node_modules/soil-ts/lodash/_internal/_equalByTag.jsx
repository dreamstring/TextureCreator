var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var numberTag = "[object Number]";
var regexpTag = "[object RegExp]";
var stringTag = "[object String]";
function equalByTag(object, other, tag) {
    switch (tag) {
        case boolTag:
        case dateTag:
            return +object == +other;
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case numberTag:
            return object != +object ? other != +other : object == +other;
        case regexpTag:
        case stringTag:
            return object == other + "";
    }
    return false;
}
export default equalByTag;
