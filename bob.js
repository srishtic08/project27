class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0,
          density:0.8

      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };