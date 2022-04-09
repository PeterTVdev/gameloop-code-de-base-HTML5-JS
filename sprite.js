class Sprite {
    constructor(pImg, pX = 0, pY = 0) {
        this.img = pImg;
        this.x = pX;
        this.y = pY;

        this.scaleX = 1;
        this.scaleY = 1;

        this.currentFrames = 0;
        this.currentFramesInAnimation = 0;
        this.currentAnimation = null;
        this.framesTimer = 0;

        this.tileSize = {
            x:0,
            y:0
        }

        this.tileSheet = false;

        this.animations = [];
    }

    addAnimation(pName, pFrames, pSpeed, pLoop = true) {
        let animation = {
            name: pName,
            frames: pFrames,
            speed: pSpeed,
            loop: pLoop,
            end: false
        }
        this.animations.push(animation);
    }

    startAnimation(pName) {
        if (this.currentAnimation != null) {
            if (this.currentAnimation.name == pName) {
                return;
            }
        }
        
        this.animations.forEach(element => {
            if (element.name == pName) {
                this.currentAnimation = element;
                this.currentFramesInAnimation = 0;
                this.currentFrames = this.currentAnimation.frames[this.currentFramesInAnimation];
                this.currentAnimation.end = false;
            }
        });
    }

    setTileSheet(pSizeX, pSizeY) {
        this.tileSheet = true;
        this.tileSize.x = pSizeX;
        this.tileSize.y = pSizeY;
    }

    setImageScale(pX, pY) {
        this.scaleX = pX;
        this.scaleY = pY;
    }

    update(dt) {
        if (this.currentAnimation != null) {
            this.framesTimer += dt;
            if (this.framesTimer >= this.currentAnimation.speed) {
                this.framesTimer = 0;
                this.currentFramesInAnimation++;
                if (this.currentFramesInAnimation > this.currentAnimation.frames.length - 1) {
                    if (this.currentAnimation.loop) {
                        this.currentFramesInAnimation = 0;
                    } else {
                        this.currentFramesInAnimation = this.currentAnimation.frames.length - 1;
                        this.currentAnimation.end = true;
                    }
                } 
                this.currentFrames = this.currentAnimation.frames[this.currentFramesInAnimation];
            }
        }
    }

    draw(pCtx) {
        if (!this.tileSheet) {
            pCtx.drawImage(this.img, this.x, this.y);
        } else {
            let nbCol = this.img.width / this.tileSize.x;

            let c = 0;
            let l = 0;

            l = Math.floor( this.currentFrames / nbCol );
            c = this.currentFrames - (l * nbCol);

            let x = c * this.tileSize.x;
            let y = l * this.tileSize.y;

            pCtx.drawImage(this.img, x, y, this.tileSize.x, this.tileSize.y, this.x, this.y, this.tileSize.x * this.scaleX, this.tileSize.y * this.scaleY);
        }
    }
}
