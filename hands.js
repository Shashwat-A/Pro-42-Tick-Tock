class Hand {
    constructor(length, color, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }

        this.body = Bodies.rectangle(400, 200, 5, length, options);
        this.length = length;
        this.color = color;
        this.angle = angle;
        World.add(world, this.body);
    }


    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.angle);
        fill(this.color)
        rect(0, 0, 5, this.length);
        ellipseMode(OPEN)
        pop();
    }
}