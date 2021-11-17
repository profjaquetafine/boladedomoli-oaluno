class Box {
  constructor(x,y,width,height){

var options={
 restitution: 1
 }

 this.body=Bodies.rectangle(x,y,width,height)
 World.add(world,this.body);
this.width=width
this.height=height

 }
 display() {
    var pos= this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x,pos.y,this.width, this.height);
   
   
   }

}