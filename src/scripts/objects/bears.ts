export default class bears extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'bears');
        scene.add.existing(this);
    }
}
