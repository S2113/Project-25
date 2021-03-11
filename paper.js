class paper
{

    constructor()
    {
      this.r=50;
      this.image=loadImage("paper.png");
      this.body=Bodies.circle(500,570,50,{restitution:0.3,friction:0.5,density:1.2});

    }
    
    display()
    {
      
        push ();
        translate(this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        image (this.image,0,0,100,100);
        pop ();
        

    }



}