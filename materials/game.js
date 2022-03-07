class Game {
    constructor() {

        const game = this

        game.players = {
            white: undefined,
            black: undefined
        }
        game.terrain = []
        game.units = []
    }
}

Game.prototype.init = function() {

    game.map = document.getElementsByClassName('map')[0]

    // Style canvas

    game.map.style.width = gameWidth + 'px'
    game.map.style.height = gameHeight + 'px'

    game.initPlayers()
    game.initTerrain()
    game.initUnits()
}

Game.prototype.initPlayers = function() {

    game.players.white = new Player('white')
    game.players.white.move = true

    game.players.black = new Player('black')
}

Game.prototype.initTerrain = function() {

    for (let x = 0; x < mapDimensions; x++) {
        for (let y = 0; y < mapDimensions; y++) {

            new Terrain(x * mapDimensions + y)
        }
    }
}

Game.prototype.initUnits = function() {

    // Black units

    for (let x = 0; x < mapDimensions; x++) {
        for (let y = 1; y < 2; y++) {

            new Pawn(x * mapDimensions + y, 'black')
        }
    }

    // White units

    for (let x = 0; x < mapDimensions; x++) {
        for (let y = 6; y < 7; y++) {

            new Pawn(x * mapDimensions + y, 'white')
        }
    }
}

Game.prototype.newMatch = function(winner, looser) {

    delete looser.network

    looser.network = winner.network.clone()

    game.units = []
    Game.prototype.initUnits()
}