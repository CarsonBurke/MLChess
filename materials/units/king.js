class King extends Unit {
    constructor(z, owner) {

        super(z, 'king', owner)

        const king = this


    }
}

King.prototype.getOptions = function() {

    const king = this

    king.options = []

    king.attackPositions = new Map([
        [king.x + 1, king.y + 1],
        [king.x + 1, king.y - 1],
        [king.x - 1, king.y + 1],
        [king.x - 1, king.y - 1],
        [king.x, king.y + 1],
        [king.x, king.y - 1],
        [king.x + 1, king.y],
        [king.x - 1, king.y],
    ])

    for (const [x, y] of king.attackPositions) {

        const z = x * mapDimensions + y

        const unitAtPos = game.units[z]
        if (unitAtPos && unitAtPos.owner == king.owner) continue

        if (x < 0 || x >= mapDimensions || y < 0 || y >= mapDimensions) continue

        king.options.push(z)
    }
}