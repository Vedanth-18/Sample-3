class BaseClass{
    constructor(x, y, width, height, stat){
        var options={
            isStatic: stat,
            restitutuion: 0.8,
            friction: 0.2,
            density: 0.4
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.body.setStatic(this.body, stat);
        this.image = loadImage("assets/baseImg.jpg");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        width = this.body.width;
        height = this.body.height;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, width, height);
        pop();
    }
}