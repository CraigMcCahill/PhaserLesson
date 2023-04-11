import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  preload() {
    // Load assets
  }

  create() {
    const ball = this.add.circle(200, 250, 10, 0xcccccc);
    this.physics.add.existing(ball);
    ball.body.setCollideWorldBounds(true, 1, 1);
    ball.body.setBounce(1, 1);
    ball.body.setVelocity(200, 200);

    this.paddle = this.add.rectangle(400, 450, 100, 20, 0xcccccc);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable();
    this.paddle.body.setCollideWorldBounds(true, 1, 1);
    this.physics.add.collider(this.paddle, ball);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.paddle.body.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.paddle.body.setVelocityX(200);
    } else {
      this.paddle.body.setVelocityX(0);
    }
  }
}
