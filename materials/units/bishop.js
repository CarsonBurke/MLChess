class Bishop extends Unit {
    constructor(z, owner) {

        super(z, 'bishop', owner)

        const bishop = this

        bishop.score = 3
    }
}

Bishop.prototype.getOptions = function() {

    const bishop = this

    bishop.options = bishop.searchByOffsets(1, 1).concat(bishop.searchByOffsets(1, -1), bishop.searchByOffsets(-1, 1), bishop.searchByOffsets(-1, 1))
}