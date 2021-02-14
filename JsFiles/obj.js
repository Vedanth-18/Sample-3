class Object extends BaseClass{
    constructor(x, y, width, height, stat){
       super(x, y, width, height, stat);
       this.image = loadImage("assets/baseImg.jpg");
    }
    display(){
      super.display();
    }
}