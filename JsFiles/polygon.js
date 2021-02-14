class Polygon{
    constructor(x, y, sides, radius){
        var options ={
            restitution:0.6
        }
       this.body = Bodies.polygon(x, y, sides, radius, options);
       this.image = loadImage("assets/polygon.png");
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, x, y, 20, 20);
    }
}