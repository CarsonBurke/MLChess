const gameWidth = 500,
    gameHeight = 500,

    mapDimensions = 8,

    unitTypes = {
        king: {

        },
        queen: {

        },
        rook: {

        },
        bishop: {

        },
        knight: {

        },
        pawn: {

        },
    },

    terrainEl = document.getElementsByClassName('terrainParent')[0],
    unitsEl = document.getElementsByClassName('unitsParent')[0],

    game = new Game()