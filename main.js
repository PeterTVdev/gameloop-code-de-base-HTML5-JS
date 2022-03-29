let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let interval;

let dernierUpdate = Date.now();

function run() {
    let maintenant = Date.now();
    let dt = (maintenant - dernierUpdate) / 1000;
    dernierUpdate = maintenant;
   // console.log("run !");
    update(dt);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    draw(ctx);
}

function init() {
   // console.log("init");
    load();
    interval = setInterval(run, 1000 / 60 );
}

init();