//let random = require('./prog3/random');
let LivingCreature = require('../LivingCreature');
module.exports =class water extends LivingCreature{
    constructor(x, y) {

        super(x, y);
        this.resource = 20;

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
    random(){
        let found = this.chooseCell(0);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
        }
    chooseCell(char) {

        this.getNewDirections();

        return super.chooseCell(char);

    }

    mul() { 
        let newCell = this.random(this.chooseCell(0).concat(this.chooseCell(1)));
        if (newCell) 
        {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;                    
            let Water = new water(x, y);
            waterArr.push(Water);
            this.resource = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < waterArr.length; index++)
         {
            if (waterArr[index].x == this.x && waterArr[index].y == this.y)
            {
                waterArr.splice(index, 1)
            }
        }
    }
    eat() {
        this.getNewDirections();
        let newCell = this.random((this.chooseCell(4)).concat(this.chooseCell(2).concat(this.chooseCell(1))));
        if (newCell)
         {
            this.resource += 2;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;

            for (let index = 0; index < fireArr.length; index++) {
                if (fireArr[index].x == x && fireArr[index].y == y) 
                {
                    fireArr.splice(index, 1)
                }
            }
            for (let index = 0; index < fireArr.length; index++) {
                if (fireArr[index].x == x && fireArr[index].y == y) 
                {
                    fireArr.splice(index, 1)
                }
            }
            for (let index = 0; index < grassArr.length; index++) {
                if (grassArr[index].x == x && grassArr[index].y == y) {
                    grassArr.splice(index, 1)
                }
            }
            if(this.resource > 19){                  //maychange
                this.mul()
            }
        }
        else { this.move() }
    }
    move(){
        this.resource--;
        let newCell = this.random(this.chooseCell(0));
        if (newCell){
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.resource < 0){
            this.die();
        }
    }
}