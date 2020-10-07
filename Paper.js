class Paper{
constructor(x,y,radius){
    var options={

       
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius=radius;
      this.image = loadImage("sprites/paper.png");
      World.add(world, this.body);
      

    
}
    display(){
        var pos = this.body.position;
        push();
       // translate(pos.x,pos.y);
        rectMode(CENTER);
        var paperpos=this.body.position;
        imageMode(CENTER);
        image(this.image,paperpos.x,paperpos.y,this.r,this.r);
        pop();
        




    }

}