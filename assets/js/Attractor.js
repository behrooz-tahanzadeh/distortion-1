function Attractor(x,y)
{	
	this.x = x;
	this.y = y;
	
	Attractor.List.push(this);
	
	Dot.AttractorChanged()
}//eoc




Attractor.List = [];




Attractor.DrawAll = function()
{
	var ctx = Vars.Ctx;
	ctx.beginPath();
	ctx.lineWidth = "1";
	ctx.fillStyle = "yellow";
	
	for(var i=0; i<this.List.length; ++i)
		this.List[i].draw();
		
	ctx.fill();
}//eof




Attractor.Init = function()
{
	Vars.CJq.click(this.CanvasClick.bind(this));
}//eof


Attractor.CanvasClick = function(e)
{
	new Attractor(e.pageX, e.pageY);
}




Attractor.Radius = 2;




Attractor.prototype.draw = function()
{
	var ctx = Vars.Ctx;
	
	ctx.moveTo(this.x+Attractor.Radius, this.y);
	ctx.arc(this.x, this.y, Attractor.Radius, 0, 2*Math.PI);
}//eof