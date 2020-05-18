function Circle(prevX, prevY, size, add) {
    this.size = size;
    this.angle = 90;
    this.prevX = prevX;
    this.prevY = prevY;
    this.add = add;
    this.x;
    this.y;
    
    this.show = function() {
        ellipse(this.x, this.y, this.size, this.size);
    }
    
    this.update = function() {
        this.angle += this.add;
        this.x = ((this.size - (this.size / 2)) * cos(this.angle)) + this.prevX;
        this.y = ((this.size - (this.size / 2)) * sin(this.angle)) + this.prevY;
    }
}