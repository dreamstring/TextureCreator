import { jsonEscapes, reEscapedJson, reHasEscapedJson } from "./_internal/_global";
import isArray from "./lodash/basic/isArray";
import forEach from "./lodash/#forEach";
import forOwn from "./lodash/#forOwn";
import has from "./lodash/#has";
import isDate from "./lodash/#isDate";
import isString from "./lodash/#isString";
function concatJson(head, partial, gap, mind, tail) {
    return gap ? head + "\n" + gap + partial.join(",\n" + gap) + "\n" + mind + tail : head + partial.join(",") + tail;
}
function concatJsonKey(string) {
    return reHasEscapedJson.test(string) ? '"' + escapeJsonKey(string) + '"' : '"' + string + '"';
}
function concatSpaceIndent(n) {
    var indent = "", index = -1;
    while (++index < n) {
        indent += " ";
    }
    return indent;
}
function escapeJsonKey(string) {
    return string.replace(reEscapedJson, function (matched) {
        var escaped = has(jsonEscapes, matched) ? jsonEscapes[matched] : undefined;
        return isString(escaped) ? escaped : hexEncode(matched);
    });
}
function getPrimitiveValue(value) {
    return isDate(value) ? value.toString() : value.valueOf();
}
function hexEncode(string) {
    return "\\u" + ("0000" + string.charCodeAt(0).toString(16)).slice(-4);
}
function stringify(value, indent) {
    if (indent === void 0) { indent = 4; }
    return stringifyValue(value, isString(indent) ? indent : concatSpaceIndent(indent), "");
}
function stringifyArray(array, indent, gap) {
    var mind = gap;
    gap += indent;
    var partial = [];
    forEach(array, function (value, index) {
        partial[index] = stringifyValue(value, indent, gap);
    });
    return partial.length === 0 ? "[]" : concatJson("[", partial, gap, mind, "]");
}
function stringifyObject(object, indent, gap) {
    var mind = gap;
    gap += indent;
    var colon = gap ? ": " : ":";
    var partial = [];
    forOwn(object, function (value, key) {
        partial.push(concatJsonKey(key) + colon + stringifyValue(value, indent, gap));
    });
    return partial.length === 0 ? "{}" : concatJson("{", partial, gap, mind, "}");
}
function stringifyValue(value, indent, gap) {
    if (value == null) {
        return "null";
    }
    var primitive = getPrimitiveValue(value);
    switch (typeof primitive) {
        case "string":
            return concatJsonKey(primitive);
        case "number":
            return isFinite(primitive) ? String(primitive) : "null";
        case "boolean":
            return String(primitive);
        case "object":
            return isArray(primitive) ? stringifyArray(primitive, indent, gap) : stringifyObject(primitive, indent, gap);
        case "function":
            return '"' + escapeJsonKey(primitive.toString()) + '"';
        default:
            return "null";
    }
}
export default stringify;
