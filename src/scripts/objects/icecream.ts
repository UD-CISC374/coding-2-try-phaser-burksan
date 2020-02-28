export default class icecream extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'icecream');
        scene.add.existing(this);
    }
}
