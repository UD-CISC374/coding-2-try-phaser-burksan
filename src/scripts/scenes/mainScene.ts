import icecream from "../objects/icecream";
import ship from "../objects/ship"
import bears from "../objects/bears";
import background from "../objects/background";
import PowerUp from "../objects/PowerUp";

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
  //private powerUps: powerUps;
  private player;


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
    this.player = this.physics.add.sprite(this.scale.width / 2-8, this.scale.height - 64, "player");
    this.player.play("thrust");
    
    //let bears = this.add.image(this.scale.width/2-50, this.scale.height/2, "bears");
    //let icecream = this.add.image(this.scale.width/2-50, this.scale.height/2, "bears");

    //let icecream1 = this.add.sprite(200, 658, "icecream1");
    //let icecream2 = this.add.image(500, 200, "icecream2");
    //let icecream3 = this.add.image(365, 365, "icecream3");

    

    //this.powerUps = this.physics.add.group();

    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");

    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    this.input.on('gameobjectdown', this.destroyShip, this);

  }

  moveIce(icecream, speed){
    icecream.y += speed;
    if (icecream.y > this.scale.height){
      this.resetIcePosX(icecream);
    }
  }

  moveShipY(ship, speed){
    ship.y += speed;
    if (ship.y > this.scale.height){
      this.resetShipY(ship);
    }
  }

  moveShipX(ship, speed){
    ship.x += speed;
    if (ship.x > this.scale.width){
      this.resetShipX(ship);
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

  resetShipX(ship){
    ship.x = 0;
    let randomY = Phaser.Math.Between(0,this.scale.width);
    ship.y = randomY;
  }

  destroyShip(pointer, gameObject){
    gameObject.setTexture("explosion");
    gameObject.play("explode");
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
