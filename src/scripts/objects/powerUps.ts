export default class powerUps extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'ship');
        scene.add.existing(this);
    }
}
