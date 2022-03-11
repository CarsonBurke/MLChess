class Rook extends Unit {
    constructor(z, owner) {

        super(z, 'rook', owner)

        const rook = this

        rook.score = 5
    }
}

Rook.prototype.getOptions = function() {

    const rook = this

    rook.options = rook.searchByOffsets(0, 1).concat(rook.searchByOffsets(0, -1), rook.searchByOffsets(1, 0), rook.searchByOffsets(-1, 0))
}