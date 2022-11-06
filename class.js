class Grass extends LivingCreature{
    mul()
    {
        this.life++;
        let newCell = random(this.chooseCell(0).concat(this.chooseCell(5)));
        if (newCell && this.life > 7) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grass = new Grass(x, y);
            grassArr.push(grass);                  
            this.life = 0;
        }
    }
}







// class GrassEater {
//     constructor(x, y)
//      {
//         this.x = x;
//         this.y = y;
//         this.energy = 30;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(char) {
//         let arr = [];

//         for (let index = 0; index < this.directions.length; index++) {
//             let x = this.directions[index][0];
//             let y = this.directions[index][1];

//             if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
//                 if (matrix[y][x] == char) {
//                     arr.push(this.directions[index])
//                 }
//             }

//         }

//         return arr;
//     }
//     getNewDirections(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     mul() {
//         let newCell = random(this.chooseCell(0));
//         if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 2;
//             let grassEater = new GrassEater(x, y);
//             grassEaterArr.push(grassEater);
//             this.energy = 0;
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (let index = 0; index < grassEaterArr.length; index++) {
//             if (grassEaterArr[index].x == this.x && grassEaterArr[index].y == this.y) 
//             {
//                 grassEaterArr.splice(index, 1)
//             }
//         }
//     }
//     eat() {
//         this.getNewDirections();
//         let newCell = random(this.chooseCell(1));
//         if (newCell) 
//         {
//             this.energy += 5;
//             let x = newCell[0];                                            //maychange
//             let y = newCell[1];

//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;

//             this.y = y;
//             this.x = x;

//             for (let index = 0; index < grassArr.length; index++) {
//                 if (grassArr[index].x == x && grassArr[index].y == y) {
//                     grassArr.splice(index, 1)
//                 }
//             }
       
//             if(this.energy > 60)
//             {
//                 this.mul()
//             }
//         }
//         else { this.move() }
//     }
//     move(){
//         this.energy--;
//         let newCell = random(this.chooseCell(0));
//         if (newCell)
//          {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 2;
//             matrix[this.y][this.x] = 0;

//             this.y = y;
//             this.x = x;
//         }
//         if (this.energy < 0)
//         {
//             this.die();
//         }
//     }
// }



// class Predator {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.energy = 30;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(char) {
//         let arr = [];

//         for (let index = 0; index < this.directions.length; index++) {
//             let x = this.directions[index][0];
//             let y = this.directions[index][1];

//             if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
//                 if (matrix[y][x] == char) {
//                     arr.push(this.directions[index])
//                 }
//             }

//         }

//         return arr;
//     }
//     getNewDirections(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     mul() {
//         let newCell = random(this.chooseCell(0));
//         if (newCell && this.energy > 550 )
//          {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 3;
//             let predator = new Predator(x, y);
//             predatorArr.push(predator);
//             this.energy = 0;
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (let index = 0; index < predatorArr.length; index++) {
//             if (predatorArr[index].x == this.x && predatorArr[index].y == this.y) {
//                 predatorArr.splice(index, 1)
//             }
//         }
//     }
//     eat() {
//         this.getNewDirections();
//         let newCell = random(this.chooseCell(2).concat(this.chooseCell(1)).concat(this.chooseCell(5)));
//         if (newCell) 
//         {
//             this.energy += 10;
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 3;
//             matrix[this.y][this.x] = 0;

//             this.y = y;
//             this.x = x;

//             for (let index = 0; index < grassEaterArr.length; index++) {
//                 if (grassEaterArr[index].x == x && grassEaterArr[index].y == y) {
//                     grassEaterArr.splice(index, 1)
//                 }
//             }
//             for (let index = 0; index < grassArr.length; index++) {
//                 if (grassArr[index].x == x && grassArr[index].y == y) {
//                     grassArr.splice(index, 1)
//                 }
//             }
//             for (let index = 0; index < waterArr.length; index++) {
//                 if (waterArr[index].x == x && waterArr[index].y == y) {
//                     waterArr.splice(index, 1)
//                 }
//             }

//             if(this.energy > 60){
//                 this.mul()
//             }
//         }
//         else { this.move() }
//     }
//     move(){
//         this.energy--;
//         let newCell = random(this.chooseCell(0));
//         if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 3;
//             matrix[this.y][this.x] = 0;

//             this.y = y;
//             this.x = x;
//         }
//         if (newCell && this.energy < 0){
//             this.die();
//         }
//         if (this.energy < 0){
//             this.die();
//         }
//     }
// }

// class fire {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.point = 30;
//         this.directions = 
//         [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(char) {
//         this.getNewDirections()
//         let arr = [];
//         for (let index = 0; index < this.directions.length; index++) {
//             let x = this.directions[index][0];
//             let y = this.directions[index][1];
//             if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
//                 if (matrix[y][x] == char) {
//                     arr.push(this.directions[index])
//                 }
//             }

//         }

//         return arr;
//     }
//     getNewDirections(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     mul() {
//         let newCell = random(this.chooseCell(0));
//         if (newCell) 
//         {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 4;
//             let Fire = new fire(x, y);
//             fireArr.push(Fire);
//             this.point = 0;
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (let index = 0; index < fireArr.length; index++) {
//             if (fireArr[index].x == this.x && fireArr[index].y == this.y) {
//                 fireArr.splice(index, 1)
//             }
//         }
//     }
//     eat() {
//         let newCell = random(this.chooseCell(2).concat(this.chooseCell(3)).concat(this.chooseCell(1)));
//         if (newCell){
//             this.point += 20;
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 4;
//             matrix[this.y][this.x] = 0;
//             this.y = y;
//             this.x = x;
//             for (let index = 0; index < grassEaterArr.length; index++) {
//                 if (grassEaterArr[index].x == x && grassEaterArr[index].y == y) {
//                     grassEaterArr.splice(index, 1)
//                 }
//             }
//             for (let index = 0; index < grassArr.length; index++) {
//                 if (grassArr[index].x == x && grassArr[index].y == y) {
//                     grassArr.splice(index, 1)
//                 }
//             }
//             for (let index = 0; index < predatorArr.length; index++) {
//                 if (predatorArr[index].x == x && predatorArr[index].y == y) {
//                     predatorArr.splice(index, 1)
//                 }
//             }
//             if(this.point > 60){
//                 this.mul()
//             }
//         }
//         else { this.move() }
//     }
//     move(){
//         this.point--;
//         let newCell = random(this.chooseCell(0));
//         if (newCell) {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 4;
//             matrix[this.y][this.x] = 0;
//             this.y = y;
//             this.x = x;
//         }
//         if (this.point < 0){
//             this.die();
//         }
//     }
// }




// class water {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.resource = 20;
//         this.directions = 
//         [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(char) {
//         let arr = [];

//         for (let index = 0; index < this.directions.length; index++) {
//             let x = this.directions[index][0];
//             let y = this.directions[index][1];

//             if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
//                 if (matrix[y][x] == char) {
//                     arr.push(this.directions[index])
//                 }
//             }

//         }

//         return arr;
//     }
//     getNewDirections(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     mul() { 
//         let newCell = random(this.chooseCell(0).concat(this.chooseCell(1)));
//         if (newCell) 
//         {
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 5;                    
//             let Water = new water(x, y);
//             waterArr.push(Water);
//             this.resource = 0;
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (let index = 0; index < waterArr.length; index++)
//          {
//             if (waterArr[index].x == this.x && waterArr[index].y == this.y)
//             {
//                 waterArr.splice(index, 1)
//             }
//         }
//     }
//     eat() {
//         this.getNewDirections();
//         let newCell = random((this.chooseCell(4)).concat(this.chooseCell(2).concat(this.chooseCell(1))));
//         if (newCell)
//          {
//             this.resource += 2;
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 5;
//             matrix[this.y][this.x] = 0;

//             this.y = y;
//             this.x = x;

//             for (let index = 0; index < fireArr.length; index++) {
//                 if (fireArr[index].x == x && fireArr[index].y == y) 
//                 {
//                     fireArr.splice(index, 1)
//                 }
//             }
//             for (let index = 0; index < fireArr.length; index++) {
//                 if (fireArr[index].x == x && fireArr[index].y == y) 
//                 {
//                     fireArr.splice(index, 1)
//                 }
//             }
//             for (let index = 0; index < grassArr.length; index++) {
//                 if (grassArr[index].x == x && grassArr[index].y == y) {
//                     grassArr.splice(index, 1)
//                 }
//             }
//             if(this.resource > 19){                  //maychange
//                 this.mul()
//             }
//         }
//         else { this.move() }
//     }
//     move(){
//         this.resource--;
//         let newCell = random(this.chooseCell(0));
//         if (newCell){
//             let x = newCell[0];
//             let y = newCell[1];
//             matrix[y][x] = 5;
//             matrix[this.y][this.x] = 0;

//             this.y = y;
//             this.x = x;
//         }
//         if (this.resource < 0){
//             this.die();
//         }
//     }
// }