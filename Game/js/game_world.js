//consts + query selectors
const zombie = document.querySelector(".zombieRun");
const hero = document.querySelector(".heroRun");
const divZombie = document.querySelector("#zombie1");
const divZombie1 = document.querySelector("#zombie2");
const divZombie2 = document.querySelector("#zombie3");
const divHero = document.querySelector(".heroContainer");
const world = document.querySelector(".gameContainer");
const giftContainer = document.querySelector(".giftContainer");
const instructions = document.querySelector(".instruction");

let zombieX = 500;
const heroheight = divHero.style.left;
const fps = 60;
let count = 0;
//engine

const engine = setInterval(function() {
  const bullets = [...document.querySelectorAll(".bulletContainerHero")];

  //gift collision
  checkCollision(divHero, giftContainer);
  //zombie collision
  checkCollision(divHero, divZombie);
  checkCollision(divHero, divZombie1);
  checkCollision(divHero, divZombie2);
  //bullets collision
  if (bullets.length > 0) {
    bullets.forEach(el => {
      checkCollision(divZombie, el);
    });
  }
  if (bullets.length > 0) {
    bullets.forEach(el => {
      checkCollision(divZombie1, el);
    });
  }
  if (bullets.length > 0) {
    bullets.forEach(el => {
      checkCollision(divZombie2, el);
    });
  }
}, 1000 / fps);
function addInstruction() {
  instructions.innerHTML = `W trakcie gry atakowac Cie beda zombie - mozesz je
  przeskoczyc lub zastrzelic klikajac 'L'. Uwazaj na pingwina...
  Powodzenia!"`;
}

setTimeout(addInstruction, 5000);
const checkCollision = (firstObject, secondObject) => {
  const boundingFirst = firstObject.getBoundingClientRect();
  const bounding = secondObject.getBoundingClientRect();

  if (
    parseInt(boundingFirst.left) < parseInt(bounding.right) &&
    parseInt(boundingFirst.left) + parseInt(boundingFirst.width) >
      parseInt(bounding.left) &&
    parseInt(boundingFirst.top) <
      parseInt(bounding.top) + parseInt(bounding.height) &&
    parseInt(boundingFirst.top) + parseInt(boundingFirst.height) >
      parseInt(bounding.top)
  ) {
    //secondObject.firstElementChild.classList.add("heroDie");
    if (secondObject != giftContainer) {
      count += 2;
      secondObject.style.display = "none";
      if (count >= 6) {
        firstObject.style.display = "none";
        count = 0;
      }
    } else {
      secondObject.style.display = "none";
    }
  }
};
//zombie create

function addZombieMoveClass1() {
  divZombie1.classList.remove("deadZombieContainer");
  divZombie1.classList.add("zombieContainer");
}
function addZombieMoveClass2() {
  divZombie2.classList.remove("deadZombieContainer");
  divZombie2.classList.add("zombieContainer");
}
setTimeout(addZombieMoveClass1, 5000);
setTimeout(addZombieMoveClass2, 10000);

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
        hero.innerHTML -= `<audio autoplay>
        <source src="/Game/audio/jetpack2.wav" type="audio/mpeg">
      </audio>`;
        hero.innerHTML += `<audio autoplay>
      <source src="/Game/audio/run.wav" type="audio/mpeg">
    </audio>`;
      }
    }
  }, 1000 / fps);
};
const bulletsarr = [];
function shot() {
  const hero = document.querySelector("#hero");
  const background = document.querySelectorAll(".back");
  const bulletDiv = document.createElement("div");
  const heroPos = divHero.getBoundingClientRect();
  world.append(bulletDiv);
  bulletDiv.classList.add("bulletContainerHero");
  bulletDiv.innerHTML = `<div class="bulletHero"></div>

  <audio autoplay>
  <source src="/Game/audio/laser.wav" type="audio/mpeg">
</audio>`;

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
      hero.innerHTML += `<audio autoplay>
      <source src="/Game/audio/jetpack2.wav" type="audio/mpeg">
    </audio>`;
      jump();
    }
  }
});

function outOfMap() {
  const divsOutOfGameContainer = [...document.querySelectorAll("div")];
  divsOutOfGameContainer.forEach(element => {});
  const removeDivs = divsOutOfGameContainer.forEach(element => {
    if (
      parseInt(element.getBoundingClientRect().left) > 1560 ||
      parseInt(element.getBoundingClientRect().right) < 364
    ) {
      element.style.display = "none";
    }
  });
}

document.addEventListener("keydown", function(e) {
  if (e.key == "l") {
    shot();
  }
});

// funkcja na pojawianie się monet w różnej pozycji
function coinSec(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const coin1 = document.querySelector(".giftContainer");

coin1.style.top = `${coinSec(50, 520)}px`;
