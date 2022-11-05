let matrix = [];
let side = 5;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let fireArr = [];
let waterArr = [];
let refreshpredator = 50;
let firesurf = 5;

function setup() {
    matrixGenerator(100, 1500, 70, refreshpredator, firesurf, 1000);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('grey');
    frameRate(5);

    noStroke()

    function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, fireSurface, waterSurface) {
        for (let index = 0; index < matrixSize; index++) {
            matrix[index] = [];
            for (let i = 0; i < matrixSize; i++) {
                matrix[index][i] = 0;
            }
        }
        for (let index = 0; index < grassCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 1;
        }
        for (let index = 0; index < grassEaterCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 2;
        }
        for (let index = 0; index < predatorCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 3;
        }
        for (let index = 0; index < fireSurface; index++) {
            let x = Math.floor(random(0, 10));
            let y = Math.floor(random(0, 10));
            matrix[y][x] = 4;
        }
        for (let index = 0; index < waterSurface; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            if (x < 30 && y > 70) {
                matrix[y][x] = 5;
            }
            else if (y > 70 && x > 70) {
                matrix[y][x] = 5;
            }
            else if (y < 30 && x > 70) {
                matrix[y][x] = 5;
            }
        }



    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                let fireSurface = new fire(x, y);
                fireArr.push(fireSurface);
            }
            else if (matrix[y][x] == 5) {
                let waterSurface = new water(x, y);
                waterArr.push(waterSurface);
            }
        }
    }
}
function draw() {

    for (let y = 0; y < matrix.length; y++) {
        const element = matrix[y];
        for (let x = 0; x < element.length; x++) {

            if (matrix[y][x] == 1) {
                fill('green')
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('purple')
            }
            else if (matrix[y][x] == 5) {
                fill('blue')
            }
            else {
                fill('grey')
            }
            rect(x * side, y * side, side, side)
        }
    }
    for (let index = 0; index < grassArr.length; index++) {
        grassArr[index].mul();
    }
    for (let index = 0; index < grassEaterArr.length; index++) {
        grassEaterArr[index].eat();
    }
    for (let index = 0; index < predatorArr.length; index++) {
        predatorArr[index].eat();
    }
    for (let index = 0; index < fireArr.length; index++) {
        fireArr[index].eat();
    }
    for (let index = 0; index < waterArr.length; index++) {
        waterArr[index].eat();
    }


}
