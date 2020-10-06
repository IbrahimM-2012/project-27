class Rope{
	constructor(body1,body2,OffSetX,OffSetY)
	{
	this.OffSetX=OffSetX
	this.OffSetY=OffSetY
	var options={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.OffSetX, y:this.OffSetY}
	}
	//console.log(options);
	rope=Constraint.create(options)
	World.add(world, this.rope)
	
	
	display()
	{
	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position;
	
	strokeWeight(2);
	
	var Anchor1X=pointA.x
	var Anchor1Y=pointA.y
	
	var Anchor2X=pointB.x+this.OffSetX
	var Anchor2Y=pointB.y+this.OffSetY
	
	line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
	}
	
	}}