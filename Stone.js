class Stone {
    constructor (x,y,radius){

        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,radius/2,options);
        this.image = loadImage("Plucking mangoes/stone.png");
        this.x = x;
        this,y = y;
        this.radius = radius;
        World.add(world,this.body);


    }

    display(){

        var pos = this.body.position;
        push();
		translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}