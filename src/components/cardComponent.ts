import { GameObjects, Scene } from "phaser";

export class CardComponent extends GameObjects.Image {

  constructor (scene: Scene, x: number, y: number, ) {
    super(scene, x, y, 'logo');
    this.setTexture('logo');
    this.setPosition(x, y);
    this.setScale(2);
  }

  
}