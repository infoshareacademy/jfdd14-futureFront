//consts + query selectors
const startGame = document.querySelector("#startGame");
const start = document.querySelector(".start");
const game = document.querySelector(".game");
let lifeCheck = 0;
const zombie = document.querySelector(".zombieRun");
const hero = document.querySelector(".heroRun");
const divZombie = document.querySelector("#zombie1");
const divZombie1 = document.querySelector("#zombie2");
const divZombie2 = document.querySelector("#zombie3");
const divHero = document.querySelector(".heroContainer");
const world = document.querySelector(".gameContainer");
const giftContainer = document.querySelector(".giftContainer");
const instructions = document.querySelector(".instruction");
const penguinContainer = document.querySelector(".penguinContainer");
const penguin = document.querySelector("#penguin");
const gameEnd = document.querySelector(".gameEnd");
const gameLose = document.querySelector(".gameOver");
const gameWon = document.querySelector(".gameWon");
const currentScore = document.querySelector(".currentScore");
const highScore = document.querySelector(".highScore");

let zombieX = 500;
const heroheight = divHero.style.left;
const fps = 60;
let count = 0;
let penguinCount = 0;

//startgame

startGame.addEventListener("click", function() {
  start.style.display = "none";
  game.style.display = "block";

  setTimeout(addZombieMoveClass1, 4000);
  setTimeout(addZombieMoveClass2, 7000);

  setTimeout(function() {
    if (
      penguinContainer.style.display == "block" &&
      gameEnd.style.display == ""
    ) {
      penguinJump();
    }
  }, 13000);
  setTimeout(function() {
    if (
      penguinContainer.style.display == "block" &&
      gameEnd.style.display == ""
    ) {
      shotPenguin();
    }
  }, 12000);
  setTimeout(function() {
    if (
      penguinContainer.style.display == "block" &&
      gameEnd.style.display == ""
    ) {
      shotPenguin();
    }
  }, 13500);
  setTimeout(function() {
    if (
      penguinContainer.style.display == "block" &&
      gameEnd.style.display == ""
    ) {
      shotPenguin();
    }
  }, 14000);
  setTimeout(function() {
    if (
      penguinContainer.style.display == "block" &&
      gameEnd.style.display == ""
    ) {
      shotPenguin();
    }
  }, 15000);
  setTimeout(function() {
    if (
      penguinContainer.style.display == "block" &&
      gameEnd.style.display == ""
    ) {
      shotPenguin();
    }
  }, 18000);
  setTimeout(function() {
    coinCreate();
  }, 8000);
  setTimeout(function() {
    coinCreate();
  }, 10000);
  setTimeout(function() {
    coinCreate();
  }, 15000);
  setTimeout(function() {
    coinCreate();
  }, 20000);
  setTimeout(function() {
    penguinContainer.style.display = "block";
  }, 10000);
});

//engine

const engine = setInterval(function() {
  scoreQuery.innerHTML = `SCORE: ${score}`;

  const bullets = [...document.querySelectorAll(".bulletContainerHero")];
  const penguinBullets = [
    ...document.querySelectorAll(".bulletContainerPenguin")
  ];
  const gifts = [...document.querySelectorAll(".giftContainer")];
  if (lifeCheck == 3) {
    if (JSON.parse(localStorage.getItem("score")) < score) {
      localStorage.setItem("score", JSON.stringify(score));
    }
    if (JSON.parse(localStorage.getItem("score")) > 0) {
      highScore.innerHTML = JSON.parse(localStorage.getItem("score"));
    }

    gameEnd.style.display = "flex";
    gameWon.style.display = "none";
    currentScore.innerHTML = score;
  }
  if (score >= 100) {
    if (JSON.parse(localStorage.getItem("score")) < score) {
      localStorage.setItem("score", JSON.stringify(score));
    }
    if (JSON.parse(localStorage.getItem("score")) > 0) {
      highScore.innerHTML = JSON.parse(localStorage.getItem("score"));
    }
    gameEnd.style.display = "flex";
    gameLose.style.display = "none";
    currentScore.innerHTML = score;
  }
  //gift collision
  if (gameEnd.style.display == "") {
    if (gifts.length > 0) {
      gifts.forEach(el => {
        checkCollision(el, divHero);
      });
    }
    //zombie collision

    checkCollision(divHero, divZombie);
    checkCollision(divHero, divZombie1);
    checkCollision(divHero, divZombie2);
    checkCollision(divHero, penguinContainer);
    //bullets collision

    if (penguinBullets.length > 0) {
      penguinBullets.forEach(el => {
        checkCollision(divHero, el);
      });
    }
    if (bullets.length > 0) {
      bullets.forEach(el => {
        checkCollision(penguinContainer, el);
      });
    }
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
  }
}, 1000 / fps);

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
    /*  if (secondObject == penguinContainer) {
      count += 2;
      secondObject.classList.add("penguinDie");
      if (count >= 6) {
        firstObject.style.display = "none";
        count = 0;
      }
    } */
    //hero collision with gift
    if (secondObject == divHero) {
      firstObject.innerHTML += `<audio autoplay>
      <source src="/Game/audio/cash-register-purchase.wav" type="audio/mpeg">
      </audio>`;
      firstObject.style.display = "none";
      score += 20;
      //hero collision with zombie
    } else if (
      (firstObject == divHero && secondObject == divZombie) ||
      secondObject == divZombie1 ||
      secondObject == divZombie2
    ) {
      secondObject.style.display = "none";
      lifeRemover();
      //penguin collision with bullet
    } else if (firstObject == penguinContainer) {
      penguinCount += 2;
      secondObject.style.display = "none";
      if (penguinCount >= 6) {
        firstObject.firstElementChild.classList.remove("penguinRun");
        firstObject.firstElementChild.classList.add("penguinDie");
        setTimeout(function() {
          firstObject.style.display = "none";
        }, 700);
        score += 10;
      }
      //hero collision with penguin
    } else if (firstObject == divHero && secondObject == penguinContainer) {
      secondObject.firstElementChild.classList.remove("penguinRun");
      secondObject.firstElementChild.classList.add("penguinDie");

      secondObject.style.display = "none";
      lifeRemover();
      //hero collission with bullet
    } else if (firstObject == divHero && secondObject != giftContainer) {
      secondObject.style.display = "none";
      lifeRemover();
      //zombie collision with bullet
    } else {
      firstObject.firstElementChild.innerHTML += `<audio autoplay>
      <source src="/Game/audio/death-pain.wav" type="audio/wav">
    </audio>`;

      count += 2;
      secondObject.style.display = "none";
      if (count >= 6) {
        firstObject.style.display = "none";
        count = 0;
        score += 10;
      }
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
/* setTimeout(addZombieMoveClass1, 5000);
setTimeout(addZombieMoveClass2, 10000); */

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
        //     hero.innerHTML += `<audio autoplay>
        //   <source src="/Game/audio/run.wav" type="audio/mpeg">
        // </audio>`;
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

document.addEventListener("keyup", function(e) {
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

const penguinJump = function() {
  // penguin.classList.add("penguinJumpShooting");
  // console.log(penguin.classList, "klasy");
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
    // console.log(penguinStartY - 101,"ping - 101")
    // console.log(penguinStartY - 100, "pingwin Y przed if")
    // if (y_coord < penguinStartY-100 && x_coord > 350)

    // console.log(penguin.classList, "klasy");
    if (y_coord < 496 && x_coord > 350) {
      x_coord -= speed_x * time_step; //* metrNaPix;
      y_coord -= speed_y * time_step; //* metrNaPix;
      //console.log(x_coord, y_coord, speed_x, speed_y);
      speed_y -= gravity * time_step * metrNaPix * metrNaPix;
      //   let hero = document.querySelector("#hero");
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
function shotPenguin() {
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
document.addEventListener("keydown", function(e) {
  if (e.key == "p") {
    // console.log("STAAAAART");
    // const penguinPos = penguinContainer.getBoundingClientRect();
    // console.log(parseInt(penguinPos.top), "penguin TOOP")
    // if (parseInt(penguinPos.top) > 560) {
    //   console.log(parseInt(penguinPos.top), "penguin TOOP AFFFTEEER")
    //   let penguin = document.querySelector("#penguin");
    //   penguin.classList.add("penguinJumpShooting");
    //   hero.innerHTML += `<audio autoplay>
    //   <source src="/Game/audio/jetpack2.wav" type="audio/mpeg">
    // </audio>`;
    penguinJump();
    // }

    shotPenguin();
  }
});
//score and jump
let score = 0;
let scoreQuery = document.querySelector(".score");
scoreQuery.innerHTML = `SCORE: ${score}`;

let negativeHit = true;

function lifeRemover() {
  let firstLife = document.querySelector(".lifeSingle");
  firstLife.classList.remove("lifeSingle");
  firstLife.classList.add("lifeSingleHidden");
  lifeCheck += 1;
}
const coinCreate = () => {
  const giftDiv = document.createElement("div");
  giftDiv.classList.add("giftContainer", "back");
  giftDiv.innerHTML = `<div class="gift"></div>`;

  coinSec = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  giftDiv.style.top = `${coinSec(50, 520)}px`;
  world.append(giftDiv);
};
