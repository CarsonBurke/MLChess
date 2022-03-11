class Knight extends Unit {
    constructor(z, owner) {

        super(z, 'knight', owner)

        const knight = this

        knight.score = 3
    }
}

Knight.prototype.getOptions = function() {

    const knight = this

    knight.options = []

    knight.attackPositions = new Map([
        [knight.x + 2, (knight.y - 1)],
        [knight.x + 2, (knight.y + 1)],
        [knight.x - 2, (knight.y - 1)],
        [knight.x - 2, (knight.y + 1)],
        [knight.x + 1, (knight.y + 2)],
        [knight.x + 1, (knight.y - 2)],
        [knight.x - 1, (knight.y + 2)],
        [knight.x - 1, (knight.y - 2)],
    ])

    for (const [x, y] of knight.attackPositions) {

        const z = x * mapDimensions + y

        const unitAtPos = game.units[z]
        if (unitAtPos && unitAtPos.owner == knight.owner) continue

        if (x < 0 || x >= mapDimensions || y < 0 || y >= mapDimensions) continue

        knight.options.push(z)
    }
}