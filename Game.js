const Board = require("./Board");
const Player = require("./Player");
const Cell = require("./Cell");

class Game{
    constructor(board,players){
        this.board=board
        this.players=players
        this.turn = 0
        this.isGameEnded = false
    }
    static newGame(player1Name,player2Name){
        if(typeof player1Name!="string"){
            return "Invalid Name...Please enter string only"
        }
        if(typeof player2Name!="string"){
            return "Invalid Name...Please enter string only"
        }
        let gameBoard = new Board
        let player1 = new Player(player1Name,"X")
        let player2 = new Player(player2Name,"0")

        return new Game(gameBoard,[player1,player2])
    }
    play(cellNumber){
        if(this.isGameEnded){
            return "Game has ended"
        }
        if(typeof cellNumber!="number"){
            return "Invalid format..Enter number only!"
        }
        if(cellNumber<0 || cellNumber >8){
            return "Please enter cell number in range between 0-8 only"
        }
        if(!this.board.isCellEmpty(cellNumber)){
            return "Cell is not empty"
        }
        let currentPlayer
        if(this.turn % 2 == 0){
            currentPlayer = this.players[0]
        }
        else{
            currentPlayer = this.players[1]
        }
        let cellObj = this.board.getCellObj(cellNumber)
        currentPlayer.markCell(cellObj)
        this.turn++
        
        let [symbolOfWinner, gameStatus] = this.board.analyseResult();
        if (gameStatus == "") {
            return "Continue playing";
        }
        if (this.board.isGameDraw()) {
            this.isGameEnded = true;
            return "Game ended as Draw";
        }
        if (symbolOfWinner == this.players[0].symbol) {
            return this.players[0].name + " is the winner and player symbol is " + this.players[0].symbol;
        } else if (symbolOfWinner == this.players[1].symbol) {
            return this.players[1].name + " is the winner and player symbol is " + this.players[1].symbol;
        }
        return "Game Ended";
    }
    
}
module.exports = Game;
