function baseZipObject(props, values, assignFunc) {
    var index = -1;
    var length = props.length;
    var valsLength = values.length;
    var result = {};
    while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
    }
    return result;
}
export default baseZipObject;
