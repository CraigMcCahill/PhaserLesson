import Phaser from "phaser";

import TitleScene from "./scenes/TitleScene";
import Game from "./scenes/Game";

const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);

game.scene.add("TitleScene", TitleScene);
game.scene.add("Game", Game);

// game.scene.start("TitleScene");
game.scene.start("Game");
