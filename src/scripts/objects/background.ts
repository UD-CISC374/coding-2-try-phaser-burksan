export default class background extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'background');
        scene.add.existing(this);
    }
}
