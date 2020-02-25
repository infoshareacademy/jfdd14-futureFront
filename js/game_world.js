console.log("start")

let metrNaPix = 19.2; //wspolczynik dlugosci obrazu dla 1460


let speed = 100 * metrNaPix; // 30 meters per second or 108 km/hour -- quite fast ...
let angle = 90 * Math.PI / 180;  // 30 degree angle, moved to radians.

let speed_x = speed * Math.cos(angle);
let speed_y = speed * Math.sin(angle);  // now you have initial direction vector

let x_coord = -100;

let y_coord = 230;  // assuming quadrant 1 of traditional cartesian coordinate system
const fps = 60;
let time_step = 1.0 / fps;    // every frame...

setInterval(function () {
   if (y_coord < 231 && x_coord < 1920) {

      x_coord += speed_x * time_step //* metrNaPix;
      y_coord -= speed_y * time_step //* metrNaPix;

      console.log(x_coord, y_coord, speed_x, speed_y);
      speed_y -= 10 * time_step * metrNaPix * metrNaPix;
      let ball = document.querySelector(".hero");
      ball.style.top = `${y_coord}px`;
      ball.style.left = `${x_coord}px`;
      console.log(ball.style.top = `${y_coord}px`, "ball y");
      console.log(ball.style.left = `${x_coord}px`, "ball x");
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
   }
}, 1000 / fps);

document.addEventListener('keyup', function(e){
    if(e.key == 'b') {
        turbo = 1;
        velX = 0;
        acc = 1;
        move();
    }
    });