class Player {
    constructor(type) {

        const player = this

        player.type = type
        player.network = new NeuralNetwork()
    }
}

Player.prototype.newNetwork = function() {

    const player = this


}

Player.prototype.getOptions = function() {

    const player = this

    const options = []

    for (const unit of game.units) {

        if (!unit) continue

        if (unit.moved) continue

        if (unit.owner != player.type) continue

        if (typeof unit.getOptions != 'function') continue

        unit.getOptions()

        unit.moved = true

        const randomOption = unit.options[Math.round(Math.random() * unit.options.length)]

        if (randomOption) {

            unit.firstMove = false

            unit.move(randomOption)
        }

        for (const z of unit.options) {

            options.push(z)
        }
    }

    return options
}