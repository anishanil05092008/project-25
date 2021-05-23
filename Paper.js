class Paper{

constructor(x,y,r){

    var options={
     
    isStatic : true,   
    restitution : 0.3,
    friction : 0,
    density : 1.2


        
    }


    this.x = x;
    this.y = y;
    this.r = r;
    
    this.image = loadImage("paper.png")

    this.paperBody= Bodies.circle(this.x,this.y,this.r, options)
    World.add(world,this.paperBody);

}

display(){
    
     var angle = this.paperBody.angle;
    push()
    translate(this.x,this.y);
    angleMode(RADIANS)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.r*2, this.r*2)
    
   

    pop()
}



}