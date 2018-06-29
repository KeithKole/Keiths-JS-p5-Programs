function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.increasing = true;
    this.mRadius;

    this.show = function () {3
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    this.update = function () {

        if (this.radius >= this.mRadius) {
            this.radius = maxRadius;
            this.increasing = false;
        }

        if (this.radius <= 0) {
            this.radius = 0;
            this.increasing = true;
        }

        if (this.increasing) {
            this.radius += .3;
        } else {
            this.radius -= 4;
        }
    }
}
