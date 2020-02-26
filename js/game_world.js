console.log("start")

const zombie = document.querySelector('.zombieRun')

const jump = function () {

    let hero = document.querySelector("#hero");

    let metrNaPix = 19.2; //wspolczynik dlugosci obrazu dla 1460


    let speed = 100 * metrNaPix; // 30 meters per second or 108 km/hour -- quite fast ...
    let angle = 90 * Math.PI / 180;  // 30 degree angle, moved to radians.

    let speed_x = speed * Math.cos(angle);
    let speed_y = speed * Math.sin(angle);  // now you have initial direction vector

    let x_coord = -100; //pzycja hero

    let y_coord = 230;  // assuming quadrant 1 of traditional cartesian coordinate system
    const fps = 60;
    let time_step = 1.0 / fps;    // every frame...

    setInterval(function () {
        if (y_coord < 231 && x_coord < 1920) {

            x_coord += speed_x * time_step //* metrNaPix;
            y_coord -= speed_y * time_step //* metrNaPix;

            console.log(x_coord, y_coord, speed_x, speed_y);
            speed_y -= 10 * time_step * metrNaPix * metrNaPix;
            //   let hero = document.querySelector("#hero");
            hero.style.top = `${y_coord}px`;
            hero.style.left = `${x_coord}px`;
            console.log(y_coord, "coord y");
            console.log(hero.style.left = `${x_coord}px`, "ball x");
            console.log(speed_y, "speed y");
            // in one second the speed has changed 9.81m/s

            // Final stage: ball shape, mass and viscosity of air causes a counter force
            // that is proportional to the speed of the object. This is a funny part:
            // just multiply each speed component separately by a factor (< 1.0)
            // (You can calculate the actual factor by noticing that there is a limit for speed
            //  speed == (speed - 9.81 * time_step)*0.99, called _terminal velocity_
            // if you know or guesstimate that, you don't need to remember _rho_,
            // projected Area or any other terms for the counter force.

            speed_x *= 0.99;
            speed_y *= 0.99;

            //   console.log(parseInt(hero.style.top), "style to hero")
            //   if( parseInt(hero.style.top) == 245){
            //       hero.classList.remove("heroFlying")

            console.log(parseInt(hero.style.top), "style to hero")
            if (parseInt(y_coord) > 244) {
                hero.classList.remove("heroFlying")
            }
            
        }
    }, 1000 / fps);


}
document.addEventListener('keypress', function(e) {
    if (e.key == 'g') {
        console.log(e)
        zombie.style.left ="50px"
    }
})
// jump()

document.addEventListener('keydown', function (e) {
    if (e.key == 'b') {
        console.log("jump");
        let hero = document.querySelector("#hero");
        // hero.classList.add("heroJump")
        hero.classList.add("heroFlying")
        // setTimeout(function(){ hero.classList.add("heroJump") }, 1000);
        // setTimeout(function(){ hero.classList.add("heroFlying") }, 2000);
        jump();

    }
});

document.addEventListener('keydown', function (e) {
    if (e.key == 'm') {
        console.log("shoot");
        let hero = document.querySelector("#hero");
        hero.classList.add("heroFlyingShooting")
        setTimeout(function(){ hero.classList.remove("heroFlyingShooting") }, 1000);
    }
});


document.addEventListener('keydown', function (e) {
    if (e.key == 'l') {
        console.log("shoot");
        let hero = document.querySelector("#hero");
        let background = document.querySelectorAll(".back")
        hero.classList.add("heroStandingShooting")
        background.forEach(element => { element.classList.add("paused")});
        setTimeout(function(){
            hero.classList.remove("heroStandingShooting")
            background.forEach(element => { element.classList.remove("paused")});
        }, 1000);
    }
});

//     setInterval(function(){
//         console.log("2 interwal");
//         let hero = document.querySelector("#hero");
//         console.log(hero.style.top, "style to hero")
//         if( hero.style.top == "245.055px"){
//             hero.classList.remove("heroFlying")
//         }

// }, 100);