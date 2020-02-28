export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "assets/images/space.png");
    this.load.image("bears", "assets/images/bears.png");
    this.load.image("icecream", "assets/images/ice\ cream\ bar.png");
    this.load.image("pbjt", "assets/images/pbjt.gif");
  }

  create() {
    this.scene.start('MainScene');
    let bears = this.add.image(500, 375, 'bears');
    bears.setScale(0.5);
    let icecream = this.add.image(300, 375, 'icecream');
    icecream.setScale(0.5);
    let pbjt = this.add.image(300,300, "pbjt.gif");
  }
}
