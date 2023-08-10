import isRightClick from "./isRightClick";
function onRightClick(element, callback) {
    return element.addEventListener("mousedown", function (mouseEvent) {
        if (isRightClick(mouseEvent)) {
            callback(mouseEvent);
        }
    });
}
export default onRightClick;
