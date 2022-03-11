class Queen extends Unit {
    constructor(z, owner) {

        super(z, 'queen', owner)

        const queen = this

        queen.score = 10
    }
}

Queen.prototype.getOptions = function() {

    const queen = this

    queen.options = queen.searchByOffsets(0, 1).concat(queen.searchByOffsets(0, -1), queen.searchByOffsets(1, 0), queen.searchByOffsets(-1, 0), queen.searchByOffsets(1, -1), queen.searchByOffsets(-1, 1), queen.searchByOffsets(-1, 1))
}