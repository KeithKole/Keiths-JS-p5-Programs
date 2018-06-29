function Arc(x, y) {
    this.x = x;
    this.y = y;
    this.ball = new Ball(this.x, this.y);

    this.show = function () {
        noFill();
        stroke(255);
        arc(this.x + 28, this.y, 50, 50, 360, 180);
        this.ball.update();
        this.ball.show();
    }
}
