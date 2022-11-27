// let matrix = [];
// let side = 5;
// let grassArr = [];
// let grassEaterArr = [];
// let predatorArr = [];
// let fireArr = [];
// let waterArr = [];
// let refreshpredator = 50;
// let firesurf = 5;

let snowflakes = [];
function snowflake() {
    this.posX = 0;
    this.posY = random(0, 500);
    this.initialangle = random(0, 2 * 10);
    this.size = random(5, 8);
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.update = function (time) {
        let w = 0.6;
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);
        this.posY += pow(this.size, 0.5);

        if (this.posY > height) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };

    this.display = function () {
        ellipse(this.posX, this.posY, this.size);
        fill('white');
    };
}

var socket = io();
let side = 10;
function setup() {
    // matrixGenerator(100, 1500, 70, refreshpredator, firesurf, 1000);
    createCanvas(80 * side, 80 * side);
    background('grey');
    frameRate(5);

    noStroke()

    

    // function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, fireSurface, waterSurface) {
    //     for (let index = 0; index < matrixSize; index++) {
    //         matrix[index] = [];
    //         for (let i = 0; i < matrixSize; i++) {
    //             matrix[index][i] = 0;
    //         }
    //     }
    //     for (let index = 0; index < grassCount; index++) {
    //         let x = Math.floor(random(0, matrixSize));
    //         let y = Math.floor(random(0, matrixSize));
    //         matrix[y][x] = 1;
    //     }
    //     for (let index = 0; index < grassEaterCount; index++) {
    //         let x = Math.floor(random(0, matrixSize));
    //         let y = Math.floor(random(0, matrixSize));
    //         matrix[y][x] = 2;
    //     }
    //     for (let index = 0; index < predatorCount; index++) {
    //         let x = Math.floor(random(0, matrixSize));
    //         let y = Math.floor(random(0, matrixSize));
    //         matrix[y][x] = 3;
    //     }
    //     for (let index = 0; index < fireSurface; index++) {
    //         let x = Math.floor(random(0, 10));
    //         let y = Math.floor(random(0, 10));
    //         matrix[y][x] = 4;
    //     }
    //     for (let index = 0; index < waterSurface; index++) {
    //         let x = Math.floor(random(0, matrixSize));
    //         let y = Math.floor(random(0, matrixSize));
    //         if (x < 30 && y > 70) {
    //             matrix[y][x] = 5;
    //         }
    //         else if (y > 70 && x > 70) {
    //             matrix[y][x] = 5;
    //         }
    //         else if (y < 30 && x > 70) {
    //             matrix[y][x] = 5;
    //         }
    //     }

    //     socket.emit("send message", val);

    // }
    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {
    //         if (matrix[y][x] == 1) {
    //             let grass = new Grass(x, y);
    //             grassArr.push(grass);
    //         }
    //         else if (matrix[y][x] == 2) {
    //             let grassEater = new GrassEater(x, y);
    //             grassEaterArr.push(grassEater);
    //         }
    //         else if (matrix[y][x] == 3) {
    //             let predator = new Predator(x, y);
    //             predatorArr.push(predator);
    //         }
    //         else if (matrix[y][x] == 4) {
    //             let fireSurface = new fire(x, y);
    //             fireArr.push(fireSurface);
    //         }
    //         else if (matrix[y][x] == 5) {
    //             let waterSurface = new water(x, y);
    //             waterArr.push(waterSurface);
    //         }
    //     }
    // }
}


let summerArgument = false;
let summer = document.getElementById("summer");
summer.addEventListener('click', function()
{
    winterArgument = false;
    summerArgument = true;
    springArgument = false;
    autumnArgument = false;
})

let autumnArgument = false;
let autumn = document.getElementById("autumn");
autumn.addEventListener('click', function()
{
    autumnArgument = true
    winterArgument = false;
    summerArgument = false;
    springArgument = false;;
})

let springArgument = false;
let spring = document.getElementById("spring");
spring.addEventListener('click', function()
{
    winterArgument = false;
    summerArgument = false;
    springArgument = true;
    autumnArgument = false;
})

let winterArgument = false;
let winter = document.getElementById("winter");
winter.addEventListener('click', function()
{
    winterArgument = true
    springArgument = false;
    summerArgument = false;
    autumnArgument = false;
})


function draww(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        const element = matrix[y];
        for (let x = 0; x < element.length; x++) {

            if (matrix[y][x] == 1) {
                if(winterArgument == true)
                {
                    fill('white')
                }
                else if(springArgument == true)
                {
                    fill("pink")
                }
                else if(autumnArgument == true)
                {
                    fill("orange")
                }
                else{
                    fill('green')
                } 
                

            }
            else if (matrix[y][x] == 2) {
                
                if(winterArgument == true)
                {
                    fill('grey')
                }
                else{
                    fill('yellow')
                }                
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('purple')
            }
            else if (matrix[y][x] == 5) {
                if(summerArgument == true)
                {
                    fill('#4521d9')
                }
                else{
                    fill('blue')
                }        
            }
            else {
                fill('grey')
            }
            rect(x * side, y * side, side, side)
        }
    }
  
    let t = frameCount / 60;
    for (let i = 0; i < random(5); i++) {
        snowflakes.push(new snowflake());
    }
    if (winterArgument === true) {
        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
            if (winterArgument === false) {
                break;
            }
        }
    }

}

socket.on("send", function(objectCount){
let grass = document.getElementById("grass")
let grassEater = document.getElementById("grassEater")
let predator = document.getElementById("predator")
let fire = document.getElementById("fire")
let water = document.getElementById("water")
let data = JSON.parse(objectCount)
grass.innerHTML = data.grass
grassEater.innerHTML = data.grassEater
predator.innerHTML = data.predator
fire.innerHTML = data.fire
water.innerHTML = data.water

})

socket.on('data', draww);