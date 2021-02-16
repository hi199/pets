class stone  {
    constructor(x, y,r){
    var options= {
    isSstatic:false,
    restitution:0,
    friction:1,
    density:1.2
    }
    
}
  display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.r,this.r);
  
  }
}