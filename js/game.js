
let velX = 0;
let velY = 0;
let turbo = 0;
let x = 0;
let y = 0;
let acc = 1;

const Zombie = class {



    constructor(width, height) {
        this.width = width,
            this.height = height,
            this.appendZombie()

    }



    appendZombie = () => {
        const newdiv = document.createElement('div');
        newdiv.innerHTML = `<div class="zombie"
        style="width: ${this.width}px;
        height:${this.height}px;
        top: ${Math.random() * 70}px;
        right: ${Math.random() * 40}px;
        ">
        </div>`
        const area = document.querySelector('.area')
        area.append(newdiv);
    }
}



rysujZombie = (w, h) => { new Zombie(w, h); }
//rysujKwadrtat = (input) => {new Rectangle(input, input, randomColor()); console.log(sizeInput.value)}
// const kwadreat = new Rectangle(100,100, "red");

// rysujKwadrtat(sizeInput.value)
// function rysujInterval() { setInterval(function () { rysujKwadrtat(200); }, 100); }

function animate() {
    const zombie = [...document.querySelectorAll('.zombie')];

    let i = 0;
    let j = 0;
    const interval = setInterval(function () {
        i++;
        j++;
        admoveRect();
        if (j > 10) { j = 5 };
        zombie.forEach(element => {
            element.innerHTML = `<img src="img/game/Zombie1/animation/Run${j}.png" class="zombieImg" alt="zombie">`
        });
        if (i >= 550) {

            clearInterval(interval);
            // setTimeout(function () { dot.forEach(element => element.remove()) }, 5000);
        }
    }, 1000 / 10);

}


const zombieCreation = (w, h, amount) => {for (let index = 1; index < amount; index++) {
    rysujZombie(w, h);
}};


zombieCreation(245, 362, 2);
// animate()


let fps = 10; //klatkaz requestAnimationFrame
let request = null;
let j = 0;

const performAnimation = () => {
    setTimeout(function () {
        request = requestAnimationFrame(performAnimation)
        console.log("animation");
        //animate something
        const zombie = [...document.querySelectorAll('.zombie')];
        j++;
        if (j > 10) { j = 5 };
        zombie.forEach(element => {
            element.innerHTML = `<img src="img/game/Zombie1/animation/Run${j}.png" class="zombieImg" alt="zombie">`
        });
    }, 1000 / fps);
}

requestAnimationFrame(performAnimation) //odpala animacje na bazie requestAnimationFrame




// class Snake {
//     velX = scale * 1;
//     velY = 0;
//     x = 0;
//     y = 0;
//     appendRect = () => {
//         ctx.fillStyle = "rgb(255,255,255)";
//         ctx.fillRect(this.x,this.y,scale,scale);
//     }
//     moveRect = () => {
//        this.x += this.velX,
//        this.y += this.velY
//        console.log(this.x)
//     }
// }
// const snake = new Snake()
// const performAnimation = () => {
//     setTimeout(function () {
//         ctx.clearRect(0,0,800,800)
//         snake.appendRect()
//         snake.moveRect()
//     }, 1000 / 4);
// }
// const incoterval = setInterval(performAnimation,500
//     )
//stop
const move = moveRect = () => {

    const  zombie = [...document.querySelectorAll('.zombieImg')];
    const  zombieDiv = [...document.querySelectorAll('.monster')];
    x += velX;
    y += velY;
    // acc += turbo;
    zombieDiv.forEach(element => {
        element.style.top = `${y}px`;
        element.style.right = `${x}px`;
        element.style.animation = `playX ${1 / turbo}s steps(5) infinite, playY ${3 / turbo}s steps(3) infinite`;
        console.log(acc);
        console.log(element)});

// zombieDiv.forEach(element => {element.setAttribute("style",`"top:${y}px; right:${x}px"`);
// console.log(element)});
    // zombie.setAttribute("style",`"top:${y}px; right:${x}px"`);
    console.log(zombie.style)
 }


document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key == 'Enter'){
        console.log('bb')
    }
    if(e.key == 's') {
        velX = 0;
        velY = 20;
        move();
    }
    if(e.key == 'w') {
        velX = 0;
        velY = -20;
        move();
    }
    if(e.key == 'd') {
        velX = -20;
        velY = 0;
        move();
    }
    if(e.key == 'a') {
        velX = 20
        velY = 0;
        move();
    }
    if(e.key == 'b') {
        turbo = 5;
        acc = 5;
        move();
    }
})


document.addEventListener('keyup', function(e){
if(e.key == 'b') {
    turbo = 1;
    velX = 0;
    acc = 1;
    move();
}
});

// function animate() {
//     setTimeout(function () {
//         requestAnimationFrame(animate);

        // animating/drawing code goes here

//     }, 1000 / framesPerSecond);
// }

    //...

    // cancelAnimationFrame(request)

    //stop the animation


    // for (let i = 1; i < 7; i++) {
    //     zombie.forEach(element => {
    //     element.innerHTML = `<img src="img/game/Zombie1/animation/Attack${i}.png" class="zombie" alt="zombie"
    // style="display: block;
    // width: 100%;
    // object-fit: cover;">`});
    // }


