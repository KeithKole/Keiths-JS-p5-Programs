//137, 200, 160
//254, 135, 125


function Ball(x, y) {
    this.x = (x + 28);
    this.y = y;
    this.distance = dist(this.x, this.y, wWidth / 2, wHeight / 2);
    this.angle = map(this.distance, 0, 350, 0, 180);
    this.color;
    this.increasing = true;

    this.show = function () {
        fill(this.color);
        noStroke();
        ellipse(this.x + (cos(this.angle) * 25), this.y + (sin(this.angle) * 25), 10, 10);
    }

    this.update = function () {
        if (this.angle < 0 && this.angle > -10) {
            this.increasing = false;
            this.angle = 0;
        }

        if (this.angle > 180) {
            this.increasing = true;
            this.angle = 180;
        }

        if (this.increasing) {
            this.angle -= 3;
        } else {
            this.angle += 3;
        }

        if (this.increasing) {

            var red = map(this.angle, 180, 0, 137, 255);
            var green = map(this.angle, 180, 0, 250, 135);
            var blue = map(this.angle, 180, 0, 160, 140);

            this.color = color(red, green, blue);

        } else {

            var red = map(this.angle, 0, 180, 255, 137);
            var green = map(this.angle, 0, 180, 135, 250);
            var blue = map(this.angle, 0, 180, 140, 160);

            this.color = color(red, green, blue);

        }

    }
}
