function enableResizeImage() {
    Image.prototype.onDraw = function () {
        if (!this.image) {
            return;
        }
        var controlSize = this.size;
        var controlWidth = controlSize.width;
        var controlHeight = controlSize.height;
        var imageSize = this.image.size;
        var imageWidth = imageSize.width;
        var imageHeight = imageSize.height;
        var scale = Math.min(controlWidth / imageWidth, controlHeight / imageHeight);
        var newWidth = scale * imageWidth;
        var newHeight = scale * imageHeight;
        var newLeft = (controlWidth - newWidth) / 2;
        var newTop = (controlHeight - newHeight) / 2;
        this.graphics.drawImage(this.image, newLeft, newTop, newWidth, newHeight);
    };
}
export default enableResizeImage;
