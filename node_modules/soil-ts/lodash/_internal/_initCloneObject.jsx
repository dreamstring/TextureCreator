function initCloneObject(object) {
    var Ctor = object.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor ? new Ctor() : {};
}
export default initCloneObject;
