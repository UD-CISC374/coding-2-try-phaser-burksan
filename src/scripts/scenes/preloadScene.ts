export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "assets/images/background.png");

    //this.load.image("space", "assets/space.png");
    //this.load.image("bears", "assets/bears.png");
    
    this.load.spritesheet("ship1", "assets/spritesheets/ship1.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    //this.load.image("icecream1", "assets/ice\ cream\ bar.png");
    
    this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16
    });
    //this.load.image("icecream2", "assets/ice\ cream\ bar1.png");
    
    this.load.spritesheet("ship3", "assets/spritesheets/ship3.png",{
      frameWidth: 32,
      frameHeight: 32
    });
    //this.load.image("icecream3", "assets/ice\ cream\ bar2.png");

    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    //this.load.spritesheet("ship", "assets/spritesheets/ship.png", {frameWidth: 16,frameHeight: 16});

    this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
      frameWidth: 16,
      frameHeight: 16
    });
  }

  


  create() {
    this.add.text(20, 20, "Loading game...");
    //this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});

    
    //let bears = this.add.image(500, 375, 'bears');
    //bears.setScale(0.5);

    
    //let icecream1 = this.add.image(300, 375, 'icecream');
    //icecream1.setScale(0.5);
    
    
    //let icecream2 = this.add.image(500, 575, 'icecream');
    //icecream1.setScale(0.5);
    //let icecream3 = this.add.image(900, 975, 'icecream');
    //icecream1.setScale(0.5);

    this.scene.start('MainScene');
  }

}
