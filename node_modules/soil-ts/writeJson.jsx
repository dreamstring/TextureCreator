import stringify from "./stringify";
import writeFile from "./writeFile";
function writeJson(path, object, indent) {
    if (indent === void 0) { indent = 4; }
    return writeFile(path, stringify(object, indent));
}
export default writeJson;
