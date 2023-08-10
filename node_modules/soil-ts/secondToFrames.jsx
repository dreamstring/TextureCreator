import { nativeFloor } from "./lodash/basic/_global";
function secondToFrames(seconds, frameRate) {
    return nativeFloor(seconds * frameRate);
}
export default secondToFrames;
