let LivingCreature = require('../LivingCreature');

module.exports = class fire extends LivingCreature {
    constructor(x, y) {

        super(x, y);
        this.point = 30;

    }
    random(){
        let found = this.chooseCell(0);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
        }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {

        this.getNewDirections();

        return super.chooseCell(char);

    }

    mul() {
        let newCell = this.random(this.chooseCell(0));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let Fire = new fire(x, y);
            fireArr.push(Fire);
            this.point = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < fireArr.length; index++) {
            if (fireArr[index].x == this.x && fireArr[index].y == this.y) {
                fireArr.splice(index, 1)
            }
        }
    }
    eat() {
        let newCell = this.random(this.chooseCell(2).concat(this.chooseCell(3)).concat(this.chooseCell(1)));
        if (newCell) {
            this.point += 20;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
            for (let index = 0; index < grassEaterArr.length; index++) {
                if (grassEaterArr[index].x == x && grassEaterArr[index].y == y) {
                    grassEaterArr.splice(index, 1)
                }
            }
            for (let index = 0; index < grassArr.length; index++) {
                if (grassArr[index].x == x && grassArr[index].y == y) {
                    grassArr.splice(index, 1)
                }
            }
            for (let index = 0; index < predatorArr.length; index++) {
                if (predatorArr[index].x == x && predatorArr[index].y == y) {
                    predatorArr.splice(index, 1)
                }
            }
            if (this.point > 60) {
                this.mul()
            }
        }
        else { this.move() }
    }
    move() {
        this.point--;
        let newCell = this.random(this.chooseCell(0));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.point < 0) {
            this.die();
        }
    }
}