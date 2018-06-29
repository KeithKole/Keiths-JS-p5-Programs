function Line(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;

    this.display = function () {
        if (this.direction == "right") {
            line(x, y, x + increment, y + increment);
        } else {
            line(x + increment, y, x, y + increment);
        }
    }
}
