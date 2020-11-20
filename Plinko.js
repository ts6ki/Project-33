class Plinko {
    constructor(x, y) {
      var options = {
          isStatic: true,
          'restitution':0
      }
      this.x=x;
      this.y=y;
      this.radius= 10;
      this.body = Bodies.circle(this.x, this.y, this.radius, options);
     

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
    
      push()
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      noStroke();
      fill("maroon");
      ellipse(0, 0, 10);
      pop()
      
    }
  }