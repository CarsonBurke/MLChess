let tick = 0
let playersTurn = 'black'

function runEnv() {

    tick++
    console.log('TICK ' +
        tick)

    for (const unit of game.units) {

        if (!unit) continue

        unit.moved = false
    }

    for (const playerType in game.players) {

        if (playersTurn == playerType) continue

        const player = game.players[playerType]

        player.getOptions()
        playersTurn = player.type
        break
    }
}