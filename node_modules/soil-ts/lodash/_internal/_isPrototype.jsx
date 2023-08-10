import { objectProto } from "../basic/_global";
function isPrototype(value) {
    var Ctor = value && value.constructor;
    var proto = (typeof Ctor === "function" && Ctor.prototype) || objectProto;
    return value === proto;
}
export default isPrototype;
