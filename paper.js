class paper
{

    constructor()
    {
      this.r=50;
      this.image=loadImage("paper.png");
     
      this.body=Bodies.circle(500,570,50,{restitution:0.3,friction:0 ,density:1.2});
      World.add(world,this.body);
    }
    
    display()
    {
      
        push ();
        translate(this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        imageMode (CENTER);
        image (this.image,0,20,100,100);
        pop ();
        

    }



}