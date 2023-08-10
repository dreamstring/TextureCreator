import assignValue from "./_internal/_assignValue";
import baseZipObject from "./_internal/_baseZipObject";
function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
}
export default zipObject;
