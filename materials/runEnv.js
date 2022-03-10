let tick = 0

function runEnv() {

    tick++
    console.log('TICK ' +
        tick)

    for (const unit of game.units) {

        if (!unit) continue

        unit.moved = false
    }

    for (const playerType in game.players) {

        const player = game.players[playerType]

        player.getOptions()
    }
}