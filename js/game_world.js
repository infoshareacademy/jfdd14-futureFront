//consts + query selectors
const zombie = document.querySelector(".zombieRun");
const hero = document.querySelector(".heroRun");
const divZombie = document.querySelector(".zombieContainer");
const divHero = document.querySelector(".heroContainer");
divZombie.style.left = "500px";
let zombieXPosition = 1200;
let zombieContainerCoords = divZombie.getBoundingClientRect();
let hero3 = divHero.getBoundingClientRect();
let zombieX = 500;
const heroheight = divHero.style.left;
const fps = 60;
//engine

const engine = setInterval(function() {
  const bullets = [...document.querySelectorAll(".bulletContainerHero")];
  zombieContainerCoords = divZombie.getBoundingClientRect();
  hero3 = divHero.getBoundingClientRect();

 checkCollision(divZombie, divHero);
  if (bullets.length > 0) {
    bullets.forEach(el => {
       
      checkCollision(divZombie, el);
    });
  }
let count = 0
}, 1000 / fps);
 const checkCollision = (firstObject, secondObject) => {
     const boundingFirst = firstObject.getBoundingClientRect()
   const bounding = secondObject.getBoundingClientRect()

  if (
    parseInt(boundingFirst.left) < parseInt(bounding.right) &&
    parseInt(boundingFirst.left) + parseInt(boundingFirst.width) >
      parseInt(bounding.left) &&
    parseInt(boundingFirst.top) <
      parseInt(bounding.top) + parseInt(bounding.height) &&
    parseInt(boundingFirst.top) + parseInt(boundingFirst.height) >
      parseInt(bounding.top)
  ) {
        firstObject.style.display = 'none'
      secondObject.style.display = 'none'
      
  } else {
    console.log("nie kolacja");
  }
}; 
//zombie move
function zombieMove() {
  divZombie.style.left = `${zombieXPosition}px`;
  zombieXPosition -= 8;
  if (zombieXPosition < -150) {
    zombieXPosition = 1200;
    divZombie.style.left = `${zombieXPosition}px`;
  }
}
function zombieCreate() {
    const zombieDiv = document.createElement('div')
    const zombie = document.createElement('div')
    zombieDiv.classList.add('zombieContainer')
    zombie.classList.add('zombieRun')
    setTimeout(world.append(zombieDiv),5000)
    setTimeout(zombieDiv.append(zombie),5000)
}

//hero methods
const jump = function() {
  const gravity = 10;
  let metrNaPix = 19.2;
  let speed = 100 * metrNaPix;
  let angle = (90 * Math.PI) / 180;
  let speed_x = speed * Math.cos(angle);
  let speed_y = speed * Math.sin(angle);
  let x_coord = 200;
  let y_coord = 445;
  const fps = 60;
  let time_step = 1.0 / fps;

  const jumpInterval = setInterval(function() {
    if (y_coord < 446 && x_coord < 1920) {
      x_coord += speed_x * time_step;
      y_coord -= speed_y * time_step;
      speed_y -= gravity * time_step * metrNaPix * metrNaPix;
      divHero.style.top = `${y_coord}px`;
      divHero.style.left = `${x_coord}px`;
      speed_x *= 0.99;
      speed_y *= 0.99;
      if (parseInt(y_coord) > 440) {
        hero.classList.remove("heroFlying");
      }
    }
  }, 1000 / fps);
};
const bulletsarr = [];
function shot() {
  const world = document.querySelector(".gameContainer");
  const hero = document.querySelector("#hero");
  const background = document.querySelectorAll(".back");
  const bulletDiv = document.createElement("div");
  const heroPos = divHero.getBoundingClientRect();
  world.append(bulletDiv);
  bulletDiv.classList.add("bulletContainerHero");
  bulletDiv.innerHTML = '<div class="bulletHero"></div>';
  bulletDiv.style.top = `${parseInt(heroPos.top) - 23}px`;

  if (parseInt(heroPos.top) > 558) {
    hero.classList.add("heroStandingShooting");
    setTimeout(function() {
      background.forEach(element => {
        element.classList.add("paused");
      });
    }, 200);
    setTimeout(function() {
      hero.classList.remove("heroStandingShooting");
      background.forEach(element => {
        element.classList.remove("paused");
      });
    }, 1000);
  }
  if (parseInt(heroPos.top) < 560) {
    hero.classList.add("heroFlyingShooting");
    setTimeout(function() {
      hero.classList.remove("heroFlyingShooting");
    }, 1000);
  }
}
//event listeners
document.addEventListener("keydown", function(e) {
  if (e.key == "b") {
    const heroPos = divHero.getBoundingClientRect();
    if (parseInt(heroPos.top) > 560) {
      let hero = document.querySelector("#hero");
      hero.classList.add("heroFlying");

      jump();
    }
  }
});




function outOfMap() {
    const divsOutOfGameContainer = [...document.querySelectorAll("div")];
 divsOutOfGameContainer.forEach(element => {console.log(element.getBoundingClientRect().left, "bullet left");});
 const removeDivs = divsOutOfGameContainer.forEach(element => {
     if(parseInt(element.getBoundingClientRect().left) > 1560
     || parseInt(element.getBoundingClientRect().right) < 364) {element.style.display = 'none';
     console.log(element, "check display")}
 });
}
 
document.addEventListener("keydown", function(e) {
  if (e.key == "l") {
    shot();
  }
});
