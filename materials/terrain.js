class Terrain {
    constructor(z) {

        const terrain = this

        terrain.z = z
        terrain.x = z / 50
        terrain.y = Math.floor(z % 50)

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

        terrain.el.style.width = gameWidth / mapDimensions + 'px'
        terrain.el.style.height = gameHeight / mapDimensions + 'px'

        game.terrain.push(terrain)
    }
}