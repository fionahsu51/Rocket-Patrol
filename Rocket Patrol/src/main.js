// Name: Fiona Hsu
// Project Name: Rocket Patrol Mods
// Date: April 22 2021
// Duration: 10-12 hours
// Point Breakdown :
//    Implement the 'FIRE' UI text from the original game (5)
//    Add your own (copyright-free) background music to the Play scene (5)
//    Replace the UI borders with new artwork (10)
//    Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20) 
//    Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyS;




