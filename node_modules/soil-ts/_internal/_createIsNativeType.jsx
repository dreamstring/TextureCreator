function createIsNativeType(nativeObject) {
    return function (value) { return value != null && value instanceof nativeObject; };
}
export default createIsNativeType;
