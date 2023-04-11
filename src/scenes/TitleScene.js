import Phaser from "phaser";

export default class TitleScene extends Phaser.Scene {
  preload() {
    // Load assets
  }

  create() {
    // Create game objects
    const text = this.add.text(400, 250, "Hello World");
    text.setOrigin(0.5, 0.5);
  }
}
