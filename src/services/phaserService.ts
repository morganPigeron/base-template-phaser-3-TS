import { Game, Scene } from "phaser";
import { BaseScene } from "../scenes/baseScene";

class Pazaak extends Game {
  constructor(baseScene : Scene) {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
      scene: baseScene,
    });
  }
}

export const game = new Pazaak(new BaseScene());