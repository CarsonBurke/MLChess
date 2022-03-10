class Rook extends Unit {
    constructor(z, owner) {

        super(z, 'rook', owner)

        const rook = this


    }
}

Rook.prototype.getOptions = function() {

    const rook = this

    rook.options = rook.searchByOffsets(0, 1).concat(rook.searchByOffsets(0, -1), rook.searchByOffsets(1, 0), rook.searchByOffsets(-1, 0))

    /* for (const [x, y] of rook.attackPositions) {

        const z = x * mapDimensions + y

        const unitAtPos = game.units[z]
        if (unitAtPos && unitAtPos.owner == rook.owner) continue

        if (x < 0 || x >= mapDimensions || y < 0 || y >= mapDimensions) continue

        rook.options.push(z)
    } */
}