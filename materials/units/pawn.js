class Pawn extends Unit {
    constructor(z, owner) {

        super(z, 'pawn', owner)

        const pawn = this

        pawn.direction = owner == 'white' ? -1 : 1
    }
}

Pawn.prototype.getOptions = function() {

    const pawn = this

    pawn.options = []

    pawn.options.push(pawn.x * mapDimensions + pawn.y + pawn.direction)

    if (!pawn.hasMoved) pawn.options.push(pawn.x * mapDimensions + (pawn.y + pawn.direction * 2))

    const attackPositions = [
        (pawn.x - 1) * mapDimensions + (pawn.y + pawn.direction),
        (pawn.x + 1) * mapDimensions + (pawn.y + pawn.direction)
    ]

    for (const z of attackPositions) {

        if (game.units[z]) pawn.options.push(z)
    }
}