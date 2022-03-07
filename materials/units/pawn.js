class Pawn extends Unit {
    constructor(z, owner) {

        super(z, 'pawn', owner)

        const pawn = this


    }
}

Pawn.prototype.move = function(x, y) {

    const pawn = this,

        z = x * 50 + y

    game.units[pawn.z] = undefined
    game.units[z] = pawn

    pawn.owner.move = false
}