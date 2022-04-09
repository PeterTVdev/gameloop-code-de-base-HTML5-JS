class ImageLoader {
    constructor() {
        this.lstPaths = [];
        this.lstImages = [];
        this.callBack = null;
        this.loadedImagesCount = 0;
    }

    add(pPathImages) {
        this.lstPaths.push(pPathImages);
    }

    getTotalImages() {
        return this.lstPaths.length;
    }

    getTotalImagesLoaded(){
        return this.loadedImagesCount;
    }

    getListeImages() {
        return this.lstImages;
    }

    getLoadedRatio() {
        return this.loadedImagesCount / this.getTotalImages();
    }

    start(pCallBack) {
        this.callBack = pCallBack;
        this.lstPaths.forEach(element => {
            let image = new Image();
            image.onload = this.imageLoaded.bind(this);
            image.src = element;
            this.lstImages[element] = image;
        });
    }

    imageLoaded(e) {
        this.loadedImagesCount++;
        console.log("l'image chargéé est : ", e.target.currentSrc)
        if (this.loadedImagesCount == this.lstPaths.length) {
            console.log("Tout a été chargé !");
            this.callBack();
        }
    }

    getLoadImage(pPath) {
        return this.lstImages[pPath];
    }
}
