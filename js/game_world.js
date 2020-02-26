console.log("start")

const zombie = document.querySelector('.zombieRun')
const hero = document.querySelector('.heroRun')
const divZombie = document.querySelector('.zombieContainer')
const divHero = document.querySelector('.heroContainer')
divZombie.style.left = '500px'
let zombie3 = divZombie.getBoundingClientRect();
let hero3 = divHero.getBoundingClientRect();
function rect() {
   
}
const jump = function () {

    //let hero = document.querySelector("#hero");

    let metrNaPix = 19.2; //wspolczynik dlugosci obrazu dla 1460


    let speed = 100 * metrNaPix; // 30 meters per second or 108 km/hour -- quite fast ...
    let angle = 90 * Math.PI / 180;  // 30 degree angle, moved to radians.

    let speed_x = speed * Math.cos(angle);
    let speed_y = speed * Math.sin(angle);  // now you have initial direction vector

    let x_coord = 0; //pzycja hero

    let y_coord = 440;  // assuming quadrant 1 of traditional cartesian coordinate system
    const fps = 60;
    let time_step = 1.0 / fps;    // every frame...


    setInterval(function () {
       
        if (y_coord < 441 && x_coord < 1920) {

            x_coord += speed_x * time_step //* metrNaPix;
            y_coord -= speed_y * time_step //* metrNaPix;

            //console.log(x_coord, y_coord, speed_x, speed_y);
            speed_y -= 10 * time_step * metrNaPix * metrNaPix;
            //   let hero = document.querySelector("#hero");
            divHero.style.top = `${y_coord}px`;
            divHero.style.left = `${x_coord}px`;
            //console.log(y_coord, "coord y");
            //console.log(divHero.style.left = `${x_coord}px`, "ball x");
            //console.log(speed_y, "speed y");
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

            //   console.log(parseInt(divHero.style.top), "style to divHero")
            //   if( parseInt(divHero.style.top) == 245){
            //       divHero.classList.remove("divHeroFlying")

            //console.log(parseInt(divHero.style.top), "style to divHero")
            if (parseInt(y_coord) > 439) {
                hero.classList.remove("heroFlying")
            }
            zombie3 = divZombie.getBoundingClientRect();
            checkCollision(zombie3 ,hero3)
            /* if(checkCollision(hero3 ,zombie3)) {
                console.log(hero3.right, zombie3.left)
                console.log("kolizja");
              } else {
                console.log("nie kolicja");
            } */
            
            
        }
    }, 1000 / fps);


}
document.addEventListener('keypress', function(e) {
    if (e.key == 'g') {
        console.log(e)
        divZombie.style.left ="250px"
    }
})
const heroheight = divHero.style.left
const checkCollision = (zombie3, hero3) => {
    if(parseInt(zombie3.left) < parseInt(hero3.right)) {
        console.log('kolacja')
    } else {console.log('nie kolacja')}

    /* return (parseInt(zombie3.left) < parseInt(hero3.right)) */ /* + rect2.width &&
      rect1.left + rect1.width > rect2.left &&
      rect1.top < rect2.top + rect2.height &&
      rect1.top + rect1.height > rect2.top */
    }




function shot(){
    const world = document.querySelector(".gameContainer");
    const bullet = document.createElement('div');
    world.append(bullet)
    bullet.classList.add("bullet")
}


// document.addEventListener('keypress', function(e) {
//     if (e.key == 'g') {
//         console.log(e)
//         zombie.style.left ="50px"
//     }
// })
// jump()

document.addEventListener('keydown', function (e) {
    if (e.key == 'b') {
        
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
        shot();
        background.forEach(element => { element.classList.add("paused")});
        setTimeout(function(){
            hero.classList.remove("heroStandingShooting")
            background.forEach(element => { element.classList.remove("paused")});
        }, 1000);
    }
});









//     setInterval(function(){
//         console.log("2 interwal");
//         let divHero = document.querySelector("#divHero");
//         console.log(divHero.style.top, "style to divHero")
//         if( divHero.style.top == "245.055px"){
//             divHero.classList.remove("heroFlying")
//         }

// }, 100);
