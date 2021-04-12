class Arc {
    constructor(height, start, stop, x, y, color) {
        this.height = height;
        this.start = start;
        this.stop = stop;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    display() {
        ellipseMode(OPEN);
        fill('red');
        arc(this.x, this.y, this.width, this.height, this.start, this.stop, PIE)
    }
}