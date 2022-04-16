function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function DrawCircle(pCtx, px, py, pr) {
    pCtx.beginPath();
    pCtx.strokeStyle = "white";
    pCtx.arc(px, py, pr, 0, 2 * Math.PI);
    pCtx.fillStype = "white";
    pCtx.fill();
    pCtx.stroke();

}

function DrawFillRect(pCtx, px, py, pl, ph, pStyle = "white", pAlpha = 1) {
    pCtx.globalAlpha = pAlpha;
    pCtx.fillStyle = pStyle;
    pCtx.fillRect(px, py, pl, ph);
    pCtx.globalAlpha = 1;
    pCtx.fill();
}

function DrawStrokeRect(pCtx, px, py, pl, ph, pStyle = "white") {
    pCtx.fillStyle = pStyle;
    pCtx.strokeRect(px, py, pl, ph);
    pCtx.fill();
}

function DrawText(pCtx, pText, px, py) {
    pCtx.fillText(pText, px, py);
}
