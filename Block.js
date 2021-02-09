class Block{
    constructor(x, y, width, height) {
        var options = {
            
         
            friction:0.04,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      
        World.add(world, this.body);
        this.Visibility=255

      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed<10){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("green");
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else if(this.body.speed>10){
          push()
          World.remove(world,this.body);
          this.Visibility=this.Visibility-5;
          tint(255,this.Visibility);
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
          pop()
        }
      }
}