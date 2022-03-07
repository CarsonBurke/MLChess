class Game {
    constructor() {

        const game = this

        game.terrain = [],
            game.units = []
    }
}

Game.prototype.init = function() {

    game.map = document.getElementsByClassName('map')[0]

    // Style canvas

    game.map.style.width = gameWidth + 'px'
    game.map.style.height = gameHeight + 'px'

    game.initTerrain()
}

Game.prototype.initTerrain = function() {

    for (let x = 0; x < mapDimensions; x++) {
        for (let y = 0; y < mapDimensions; y++) {

            new Terrain(x * mapDimensions + y)
        }
    }
}