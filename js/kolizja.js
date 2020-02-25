const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const checkCollision = (rect1, rect2) => {


  return (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y)
  }
class Snake {
  velX = scale * 1;
  velY = -20;
  height = 20;
  width = 20;
  x = 0;
  y = 700 - scale;
  appendRect = () => {
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(this.x, this.y, scale, scale);
  };

  moveRect = () => {
    (this.x += this.velX), (this.y += this.velY);

    if (this.x > 800) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = 800;
    }
    if (this.y > 800) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = 800;
    }
    if (jump) {
      jump = true;

      console.log("bb");
      snake.velY += 1.5;
      snake.velY *= 0.9;
      console.log(snake.velY);
    }
  };

  clearRect = () => {
    ctx.clearRect(this.x, this.y, scale, scale);
  };
  bottom = () => {
    ctx.fillStyle = "rgb(0,128,0)";
    ctx.fillRect(0, 700, 800, 800);
  };
}
class Diamond {
  velX = scale * 1;
  velY = 0;
  height = 20;
  width = 20;
  x = 700;
  y = 700 - scale;
  appendRect = () => {
    ctx.fillStyle = "rgb(100,100,100)";
    ctx.fillRect(this.x, this.y, scale, scale);
  };
  moveRect = () => {
    this.x -= 20;
    if (this.x > 800) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = 800;
    }
    if (this.y > 800) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = 800;
    }
  };
  clearRect = () => {
    ctx.clearRect(this.x, this.y, scale, scale);
  };
}
const diamond = new Diamond();
const snake = new Snake();

snake.appendRect();
snake.bottom();
diamond.appendRect();
setInterval(diamondMove, 1000);
function diamondMove() {
  diamond.clearRect();
  diamond.moveRect();
  diamond.appendRect();
  if(checkCollision(snake ,diamond)) {
    console.log("kolizja");
  } else {
    console.log("nie kolicja");
  }
}
//movement

let jump = false;

document.addEventListener("keypress", function(e) {
  if (e.key == "s") {
    snake.velX = 0;
    snake.velY = 20;
    snake.clearRect();
    snake.moveRect();
    snake.appendRect();
  }
  if (e.key == "w") {
    snake.velX = 0;
    snake.velY = -20;
    snake.clearRect();

    snake.moveRect();
    snake.appendRect();
  }

  if (e.key == "d") {
    snake.velX = 20;
    snake.velY = 0;
    snake.clearRect();

    snake.moveRect();
    snake.appendRect();
  }
  if (e.key == "a") {
    snake.velX = -20;
    snake.velY = 0;
    snake.clearRect();

    snake.moveRect();
    snake.appendRect();
  }
  if(checkCollision(snake ,diamond)) {
    console.log("kolizja");
  } else {
    console.log("nie kolicja");
  }
});





