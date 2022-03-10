class Pawn extends Unit {
    constructor(z, owner) {

        super(z, 'pawn', owner)

        const pawn = this

        pawn.firstMove = true
        pawn.direction = owner == 'white' ? -1 : 1
    }
}

Pawn.prototype.getOptions = function() {

    const pawn = this

    pawn.options = []

    pawn.movePositions = new Map([
        [pawn.x, pawn.y + pawn.direction], pawn.firstMove ? [pawn.x, (pawn.y + pawn.direction * 2)] : [Infinity, Infinity],
    ])

    for (const [x, y] of pawn.movePositions) {

        const z = x * mapDimensions + y

        if (game.units[z]) continue

        if (x < 0 || x >= mapDimensions || y < 0 || y >= mapDimensions) continue

        pawn.options.push(z)
    }

    pawn.attackPositions = new Map([
        [pawn.x - 1, (pawn.y + pawn.direction)],
        [pawn.x + 1, (pawn.y + pawn.direction)]
    ])

    for (const [x, y] of pawn.attackPositions) {

        const z = x * mapDimensions + y

        const unitAtPos = game.units[z]
        if (!unitAtPos) continue

        if (unitAtPos.owner == pawn.owner) continue

        if (x < 0 || x >= mapDimensions || y < 0 || y >= mapDimensions) continue

        pawn.options.push(z)
    }
}