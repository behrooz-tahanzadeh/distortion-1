function Dot(x,y)
{
	this.anchorPt = new Point2D(x,y)
	this.currentPt = new Point2D(x,y)
}//eoc




Dot.List = [];
Dot.Aim = null;
Dot.Radius = 1;
Dot.Dist = 50;




Dot.DrawAll = function()
{
	var ctx = Vars.Ctx;
	ctx.beginPath();
	
	for(var i=0; i<Vars.GridRows; ++i)
		for(var j=0; j<Vars.GridCols; ++j)
			Dot.List[i][j].draw();
	
	ctx.fillStyle = "black";
	ctx.fill();
}//eof




Dot.Init = function()
{
	Dot.Aim = new Point2D(0,0);
	
	var w = Vars.PageW/Vars.GridCols;
	var h = Vars.PageH/Vars.GridRows;
	
	w = Math.floor(w);
	h = Math.floor(h);
	
	for(var i=0; i<Vars.GridRows; ++i)
	{
		var rowArr = [] 
		
		for(var j=0; j<Vars.GridCols; ++j)
			rowArr.push(new Dot(j*w, i*h));
		
		Dot.List.push(rowArr);
	}
}//eof




Dot.prototype.draw = function()
{
	this.move();
	
	var ctx = Vars.Ctx;
	var x = this.currentPt.x;
	var y = this.currentPt.y;
	
	ctx.moveTo(x+Dot.Radius, y);
	ctx.arc(x, y, Dot.Radius, 0, 2*Math.PI);
};//eof



Dot.prototype.move = function()
{
	this.currentPt = this.anchorPt.pointAtDistInPointAxis(Dot.Dist, Dot.Aim);
}//eof