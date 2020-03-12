export const penguinJump = function() {
  const penguinContainer = document.querySelector(".penguinContainer");
  const gravity = 10;
  let metrNaPix = 19.2;
  let penguinStartX = parseInt(penguinContainer.getBoundingClientRect().left);
  let penguinStartY = parseInt(penguinContainer.getBoundingClientRect().top);
  let x_coord = penguinStartX; //pozycja penguinContainer
  let y_coord = 495; //penguinStartY - 101;//penguinStartY;//445//dla top 562;
  let speed = 90 * metrNaPix; // 30 meters per second or 108 km/hour -- quite fast ...
  let angle = (120 * Math.PI) / 180; // 30 degree angle, moved to radians.
  let speed_x = speed * Math.cos(angle);
  let speed_y = speed * Math.sin(angle); // now you have initial direction vector
  const fps = 60;
  let time_step = 1.0 / fps; // every frame...
  const penguinPos = penguinContainer.getBoundingClientRect();
  if (parseInt(penguinPos.top) > 560) {
    let penguin = document.querySelector("#penguin");
    penguin.classList.add("penguinJump");
    //   hero.innerHTML += `<audio autoplay>
    //   <source src="/Game/audio/jetpack2.wav" type="audio/mpeg">
    // </audio>`;
  }

  setInterval(function() {
    if (y_coord < 496 && x_coord > 350) {
      x_coord -= speed_x * time_step; //* metrNaPix;
      y_coord -= speed_y * time_step; //* metrNaPix;
      speed_y -= gravity * time_step * metrNaPix * metrNaPix;
      penguinContainer.style.top = `${y_coord}px`;
      penguinContainer.style.left = `${x_coord}px`;
      speed_x *= 0.99;
      speed_y *= 0.99;

      if (parseInt(y_coord) > 490) {
        penguin.classList.remove("penguinJump");
      }
    }
  }, 1000 / fps);
};
export function shotPenguin() {
  const world = document.querySelector(".gameContainer");
  const hero = document.querySelector(".penguinContainer");
  const gameContainer = document.querySelector(".gameContainer");
  const containerLeft = gameContainer.getBoundingClientRect();
  const bulletDiv = document.createElement("div");
  const heroPos = hero.getBoundingClientRect();
  world.append(bulletDiv);
  bulletDiv.classList.add("bulletContainerPenguin");
  bulletDiv.innerHTML = `<div class="bulletPenguin">
    <audio autoplay>
    <source src="/Game/audio/shot_reload.wav" type="audio/mpeg">
    </audio>
    </div>`;
  bulletDiv.style.top = `${parseInt(heroPos.top) - 50}px`;
  bulletDiv.style.left = `${parseInt(heroPos.left) -
    containerLeft.left -
    130}px`;
}
