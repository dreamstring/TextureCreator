import encodeImageString from "./encodeImageString";
function newSolidImage(size, color) {
    var imageData = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, size[0], 0, 0, 0, size[1], 1, 3, 0, 0, 0, 1, 24, 7, 9, 0, 0, 0, 3, 80, 76, 84, 69, color[0], color[1], color[2], 63, 26, 7, 10, 0, 0, 0, 11, 73, 68, 65, 84, 8, 215, 99, 32, 5, 0, 0, 0, 45, 0, 1, 226, 21, 94, 0, 56, 50, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 0, 56, 50];
    return encodeImageString(imageData);
}
export default newSolidImage;
