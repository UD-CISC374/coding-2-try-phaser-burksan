import icecream from "../objects/icecream";
import ship from "../objects/ship"
import bears from "../objects/bears";
import background from "../objects/background";

//import ExampleObject from '../objects/exampleObject';
//import PreloadScene from './preloadScene';

export default class MainScene extends Phaser.Scene {
  //private exampleObject: ExampleObject;
  private ship1: ship;
  private ship2: ship;
  private ship3: ship;
  //private bears: bears;
  //private icecream: icecream;
  private background;


  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    //this.exampleObject = new ExampleObject(this, 0, 0);
    //let background = this.add.image(0,0, "background");
    this.add.text(20, 20, "Loading game...");

    this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"});
    
    this.background = this.add.tileSprite(0,0, this.scale.width, this.scale.height, "background");
    this.background.setOrigin(0,0);
    //let space = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, "space");
    //space.setOrigin(0, 0);

    this.ship1 = this.add.sprite(this.scale.width/2-50, this.scale.height/2, "ship1");
    this.ship2 = this.add.sprite(this.scale.width/2, this.scale.height/2, "ship2");
    this.ship3 = this.add.sprite(this.scale.width/2+50, this.scale.height/2, "ship3");
    
    
    //let bears = this.add.image(this.scale.width/2-50, this.scale.height/2, "bears");
    //let icecream = this.add.image(this.scale.width/2-50, this.scale.height/2, "bears");

    //let icecream1 = this.add.sprite(200, 658, "icecream1");
    //let icecream2 = this.add.image(500, 200, "icecream2");
    //let icecream3 = this.add.image(365, 365, "icecream3");

    this.anims.create({
    key: "ship1_anim", 
    frames: this.anims.generateFrameNumbers("ship1", {start: 0, end: 1}), 
    frameRate: 20, 
    repeat: -1});

  }

  moveIce(icecream, speed){
    icecream.y += speed;
    if (icecream.y > this.scale.height){
      this.resetIcePosX(icecream);
    }
  }

  moveShipY(ship, speed){
    speed.y += speed;
    if (ship.y > this.scale.height){
      this.resetShipY(ship);
    }
  }

  resetShipY(ship){
    ship.y = 0;
    let randomX = Phaser.Math.Between(0,this.scale.height);
    ship.x = randomX;
  }
  resetIcePosX(icecream){
    icecream.y = 0;
    let randomX = Phaser.Math.Between(0,this.scale.height);
    icecream.x = randomX;
  }


  update() {
    this.moveShipY(this.ship1, 1);
    this.moveShipY(this.ship2, 2);
    this.moveShipY(this.ship3, 3);
    this.background.tilePositionY -= 0.5;
    //this.moveIce(this.moveIc
      //{
  //} vid 4

  }
}
