class Player{
    constructor(name,symbol){
        this.name=name
        this.symbol=symbol
    }
    markCell(cellObj){
        cellObj.mark = (this.symbol)
    }
}
module.exports = Player;
