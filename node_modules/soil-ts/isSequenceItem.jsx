import isFootageItem from "./isFootageItem";
function isSequenceItem(value) {
    return isFootageItem(value) && value.mainSource.conformFrameRate > 0 && value.hasAudio === false;
}
export default isSequenceItem;
