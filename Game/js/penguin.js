const penguinJump = function () {
    console.log("penguinJump");
    const penguinContainer = document.querySelector(".penguinContainer");
    const gravity = 10;
    let metrNaPix = 19.2;
    let penguinStartX = parseInt(penguinContainer.getBoundingClientRect().left);
    let penguinStartY = parseInt(penguinContainer.getBoundingClientRect().top);
    let x_coord = penguinStartX; //pozycja penguin
    let y_coord = 495 //penguinStartY - 101;//penguinStartY;//445//dla top 562;
    let speed = 90 * metrNaPix; // 30 meters per second or 108 km/hour -- quite fast ...
    let angle = 100 * Math.PI / 180;  // 30 degree angle, moved to radians.
    let speed_x = speed * Math.cos(angle);
    let speed_y = speed * Math.sin(angle);  // now you have initial direction vector
    const fps = 60;
    let time_step = 1.0 / fps;    // every frame...
    setInterval(function () {
        // console.log(penguinStartY - 101,"ping - 101")
        // console.log(penguinStartY - 100, "pingwin Y przed if")
        // if (y_coord < penguinStartY-100 && x_coord > 350)
        if (y_coord < 496 && x_coord > 350){
            console.log(penguinStartY, "pingwin Y")
            x_coord -= speed_x * time_step //* metrNaPix;
            y_coord -= speed_y * time_step //* metrNaPix;
            //console.log(x_coord, y_coord, speed_x, speed_y);
            speed_y -= gravity * time_step * metrNaPix * metrNaPix;
            //   let hero = document.querySelector("#hero");
            penguinContainer.style.top = `${y_coord}px`;
            penguinContainer.style.left = `${x_coord}px`;
            speed_x *= 0.99;
            speed_y *= 0.99;
        }
    }, 1000 / fps);
}
function shotPenguin() {
    console.log("shot penguin");
    const world = document.querySelector(".gameContainer");
    const hero = document.querySelector(".penguinContainer");
    const gameContainer = document.querySelector(".gameContainer")
    const containerLeft = gameContainer.getBoundingClientRect();
    const bulletDiv = document.createElement('div');
    const heroPos = hero.getBoundingClientRect();
    world.append(bulletDiv)
    bulletDiv.classList.add("bulletContainerPenguin");
    bulletDiv.innerHTML = '<div class="bulletPenguin"></div>';
    bulletDiv.style.top = `${parseInt(heroPos.top)-50}px`;
    bulletDiv.style.left = `${parseInt(heroPos.left) - containerLeft.left - 130}px`;
    console.log(bulletDiv.style.left, "bullet style left")
    console.log(divHero.getBoundingClientRect());
    console.log(parseInt(heroPos.top), "penguin TOP position while shooting");
    console.log(parseInt(heroPos.left), "penguin LEFT position while shooting");
}
document.addEventListener('keydown', function (e) {
    if (e.key == 'p') {
        penguinJump();
        shotPenguin();
    }
});

setTimeout(function(){ penguinJump()}, 2000);
setTimeout(function(){ shotPenguin()}, 2300);
setTimeout(function(){ shotPenguin()}, 2600);
setTimeout(function(){ shotPenguin()}, 3000);