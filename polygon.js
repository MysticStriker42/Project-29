class Polygon{
  constructor(x, y, width, height) {
      var options = {
           'density': 5,
           'restitution': 0.5      
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.polygon_img = loadImage("polygon.png)")
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(polygon_img,0,0,this.width, this.height);
      pop();
    }
}
