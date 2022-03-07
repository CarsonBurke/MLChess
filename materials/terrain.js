class Terrain {
    constructor(z) {

        const terrain = this

        terrain.z = z
        terrain.x = Math.floor(z / mapDimensions)
        terrain.y = Math.floor(z % mapDimensions)

        terrain.el = document.createElement('div')
        terrain.el.classList.add('terrain', z)
        terrainEl.appendChild(terrain.el)

        giveAlt()

        function giveAlt() {

            if (z % 8 == 0) {

                if (!game.terrain[z - 8]) return

                if (game.terrain[z - 8].alt) return

                terrain.alt = true
                terrain.el.classList.add('terrainAlt')
                return
            }

            if (game.terrain[z - 1].alt) return

            terrain.alt = true
            terrain.el.classList.add('terrainAlt')
        }

        terrain.el.style.left = terrain.x * (gameWidth / mapDimensions) + 'px'
        terrain.el.style.top = terrain.y * (gameHeight / mapDimensions) + 'px'

        terrain.el.style.width = gameWidth / mapDimensions + 'px'
        terrain.el.style.height = gameHeight / mapDimensions + 'px'

        game.terrain.push(terrain)
    }
}