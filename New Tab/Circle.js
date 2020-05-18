function Circle(x, y) {
	this.x = x;
	this.y = y;
	this.active;
	this.moving = 0;
	this.growing = 0;
	this.targetX = 0;
	this.targetY = 0;
	this.radius = 80;

	this.show = function () {
		if (this.active) {
			fill(255);
		} else {
			fill(10);
		}
		ellipse(this.x, this.y, this.radius);
	}

	this.update = function () {
		if (this.moving) {
			if (this.growing) {
				this.radius++;
			} else {
				this.radius--;
			}
			if (this.radius <= 0) {
				this.x = this.targetX;
				this.y = this.targetY;
				this.growing = 1;
			}
			if (this.radius >= 80) {
				this.growing = 0;
				this.moving = 0;
				this.targetX = 0;
				this.targetY = 0;
			}
		}
	}
}
