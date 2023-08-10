import castFile from "./_internal/_castFile";
function saveFrameToPng(file, compItem, time) {
    if (time === void 0) { time = compItem.time; }
    compItem.saveFrameToPng(time, castFile(file));
}
export default saveFrameToPng;
