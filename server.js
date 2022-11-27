var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('./index.html');
});
server.listen(3000);

var Grass = require('./modules/class.js');
var GrassEater = require('./modules/class_grassEater.js');
var Predator = require('./modules/class_predator.js');
var water = require('./modules/class_water.js');
var fire = require('./modules/class_fire.js');
var LivingCreature = require('./LivingCreature.js');
//let random = require('./prog3/random');

 matrix = [];

grassArr = [];
grassEaterArr = [];
predatorArr = [];
fireArr = [];
waterArr = [];





function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, fireSurface, waterSurface) {
    for (let index = 0; index < matrixSize; index++) {
        matrix[index] = [];
        for (let i = 0; i < matrixSize; i++) {
            matrix[index][i] = 0;
        }
    }
    for (let index = 0; index < grassCount; index++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 1;
    }
    for (let index = 0; index < grassEaterCount; index++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random()* matrixSize);
        matrix[y][x] = 2;
    }
    for (let index = 0; index < predatorCount; index++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 3;
    }
    for (let index = 0; index < fireSurface; index++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 4;
    }
    for (let index = 0; index < waterSurface; index++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
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

refreshpredator = 100;
firesurf = 10;

//matrixSize, grassCount, grassEaterCount, predatorCount, fireSurface, waterSurface
matrixGenerator(80, 700, 250, refreshpredator, firesurf, 20);
// io.on('connection', function (socket) {

//     socket.on("send message", function (data) {


//         io.sockets.emit("display message", data);

//     });

// });


////////////////////////////////////////NEW


function creatingObjects() {
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


function game() {
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

    let objectCount ={
        grass:grassArr.length,
        grassEater:grassEaterArr.length,
        predator:predatorArr.length,
        fire:fireArr.length,
        water:waterArr.length
    }

    let data = JSON.stringify(objectCount, null, 2)
    fs.writeFileSync('startAnalysis.json', data)

    io.sockets.emit("send", data);
    io.sockets.emit("data", matrix);
}



setInterval(game, 1000)

io.on('connection', function (socket) {

    creatingObjects();

});