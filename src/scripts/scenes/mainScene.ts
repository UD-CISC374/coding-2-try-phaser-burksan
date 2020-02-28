//import ExampleObject from '../objects/exampleObject';
//import PreloadScene from './preloadScene';

export default class MainScene extends Phaser.Scene {
  //private exampleObject: ExampleObject;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image("background", "assets/images/space.png");
    this.load.image("bears", "assets/images/bears.png");
    this.load.image("icecream", "assets/images/ice\ cream\ bar.png");
    this.load.image("pbjt", "assets/images/pbjt.gif");
  }

  create() {
    //this.exampleObject = new ExampleObject(this, 0, 0);
    let background = this.add.image(1080, 1000, "background");
    background.setOrigin(0, 0);


    let bears = this.add.image(this.scale.width/2-50, this.scale.height/2, "bears");
    let icecream = this.add.image(this.scale.width/2-50, this.scale.height/2, "bears");

    bears = this.add.image(500, 375, 'bears');
    //bears.setScale(0.5);
    icecream = this.add.image(300, 375, 'icecream');
    icecream.setScale(0.5);

    let pbjt = this.add.image(300,300, "pbjt");
  }

  moveIce(icecream, speed){
    icecream.x += speed;
  }

  resetIce(icecream){
    icecream.x = 1000;
    let randomY = Phaser.Math.Between(0,this.scale.width);
    icecream.y = randomY;
  }

  update() {
  }
}
