/* 
Richard Tao
3-Point Tier:
Create 4 new explosion sound effects and randomize which one plays on impact (3)
Display the time remaining (in seconds) on the screen (3)
5-Point Tier:
Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
Implement mouse control for player movement and left mouse click to fire (5)
Total: 18 Hours
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, EasyPlay, DifficultPlay]
}

let game = new Phaser.Game(config)

        // set UI sizes
        let borderUISize = game.config.height / 15
        let borderPadding = borderUISize / 3
        let currentTime
        // reserve keyboard bindings
        let keyF, keyR, keyLEFT, keyRIGHT