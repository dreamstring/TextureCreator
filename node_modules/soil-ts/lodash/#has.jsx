import { hasOwnProperty } from "./basic/_global";
function has(object, key) {
    return object != null && hasOwnProperty.call(object, key);
}
export default has;
