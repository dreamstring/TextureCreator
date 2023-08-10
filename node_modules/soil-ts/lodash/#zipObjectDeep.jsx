import baseSet from "./_internal/_baseSet";
import baseZipObject from "./_internal/_baseZipObject";
function zipObjectDeep(props, values) {
    return baseZipObject(props || [], values || [], baseSet);
}
export default zipObjectDeep;
