let tick = 0
let playersTurn = 'black'

function runEnv() {

    tick++
    console.log('TICK ' +
        tick)

    let aliveKings = {}

    for (const unit of game.units) {

        if (!unit) continue

        unit.moved = false

        if (unit.type == 'king') aliveKings[unit.owner] = true
    }

    for (const playerType in game.players) {

        if (playersTurn == playerType) continue

        const player = game.players[playerType]

        if (!aliveKings[playerType]) game.newMatch(player)

        player.getOptions()
        playersTurn = player.type
        break
    }
}