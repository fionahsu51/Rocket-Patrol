class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {

      // load menu art
      this.load.image('title', './assets/title.png');
      this.load.image('herd', './assets/herd.png');

      // load audio
      this.load.audio('sfx_select', './assets/butterflystart.mp3');
      this.load.audio('sfx_explosion', './assets/flowerget.mp3');
      this.load.audio('sfx_rocket', './assets/butterflyshoot.mp3');
      this.load.audio('bgmusic', './assets/bgmusic.mp3');
  }

  create() {

      this.music = this.sound.add('bgmusic', {
        loop: true
      });      
      this.music.play();

      // menu text configuration
      let menuConfig = {
          fontFamily: 'Papyrus',
          fontSize: '28px',
          backgroundColor: '#f4ae29',
          color: '#FFFFFF',
          align: 'right',
          padding: {
          top: 5,
          bottom: 5,
          },
          fixedWidth: 0
          }
      
      // show menu text
      this.title = this.add.sprite(0, 0, 'title').setOrigin(0, 0);
      this.herd = this.add.sprite(game.config.width - borderUISize - borderPadding*15, 5, 'herd').setOrigin(0, 0);

      this.add.text(250, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#68cc83';
      menuConfig.color = '#000';
      this.add.text(250, game.config.height/2 + borderUISize + borderPadding*2, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          blueflowerSpeed: 5,
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          blueflowerSpeed: 6,
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
    }
}