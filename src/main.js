/* 
Richard Tao
5-Point Tier:
Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
Total: 9 Hours
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config)

        // set UI sizes
        let borderUISize = game.config.height / 15
        let borderPadding = borderUISize / 3

        // reserve keyboard bindings
        let keyF, keyR, keyLEFT, keyRIGHT