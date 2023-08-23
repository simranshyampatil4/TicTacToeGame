class Cell{
    constructor(){
        this.mark = 'E'
    }
    isEmpty(){
        return this.mark == 'E'
    }
    markCell(symbol){
        this.mark = symbol
    }

}
module.exports = Cell;
