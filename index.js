const Game = require("./Game");

let g1 =Game.newGame("Swara","Simran")
let g2 =Game.newGame("Swara","Simran")
console.log(g1.play(0));
console.log(g1.play(3));
console.log(g1.play(1));
console.log(g1.play(4));
console.log(g1.play(7));
console.log(g1.play(5));
console.log("-----------------");
console.log(g2.play(0));
console.log(g2.play(7));
console.log(g2.play(1));
console.log(g2.play(5));
console.log(g2.play(2));