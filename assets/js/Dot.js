function Dot(x,y)
{
	this.x = this.dx = this.ax = x;
	this.y = this.dy = this.ay = y;
	
	this.vx = 0;
	this.vy = 0;
}//eoc




Dot.List = [];




Dot.DrawAll = function()
{
	var ctx = Vars.Ctx;
	ctx.beginPath();
	ctx.fillStyle = "black";
	
	for(var i=0; i<Vars.GridRows; ++i)
		for(var j=0; j<Vars.GridCols; ++j)
			Dot.List[i][j].draw();
		
	ctx.fill();
}//eof



Dot.AttractorChanged = function()
{
	for(var i=0; i<Vars.GridRows; ++i)
		for(var j=0; j<Vars.GridCols; ++j)
			Dot.List[i][j].attractorChanged();
}//eof




Dot.Init = function()
{
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




Dot.Radius = 4;




Dot.prototype.draw = function()
{
	this.move()
	
	var ctx = Vars.Ctx;
	
	ctx.fillRect(this.x-1, this.y-1, 2, 2);
};//eof



Dot.prototype.move = function()
{
	if(Math.abs(this.x-this.dx)<3 && Math.abs(this.y-this.dy)<3)
	{
		this.vx = 0;
		this.vy = 0;
	}
	else
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}//eof




Dot.prototype.attractorChanged = function()
{
	var tx = 0;
	var ty = 0;
	var c = 0;
	
	for(var i=0; i<Attractor.List.length; ++i)
	{
		var a = Attractor.List[i];
		
		tx += a.x;
		ty += a.y;
		c++
	}
	
	this.dx = tx/c;
	this.dy = ty/c;
	
	this.vx = (this.dx-this.x)/100;
	this.vy = (this.dy-this.y)/100;
}//eof