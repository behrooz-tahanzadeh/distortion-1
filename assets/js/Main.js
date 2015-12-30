Main = 
{
	intervalTime:50,
	intervalID:-1,
	
	
	BgOpacity:1,
	
	
	Init:function()
	{
		Vars.Init();
		Dot.Init();
		Attractor.Init();
		
		
		jQuery("div#pp").click(Main.PP.bind(this));
		
		this.intervalID = setInterval(this.Loop.bind(this), this.intervalTime);
		
		jQuery('input#tail').change(Main.TailChange.bind(this));
		
		jQuery(window).keydown(Main.WindowOnKeyPress.bind(this));
	},
	
	
	
	
	WindowOnKeyPress: function(e)
	{
		switch (e.keyCode)
		{
			case Keyboard.Right:
				var v = parseFloat(jQuery('input#tail').val())+(e.shiftKey?0.1:0.01);
				jQuery('input#tail').val(v);
				this.TailChange(null);
				break;
				
			case Keyboard.Left:
				var v = parseFloat(jQuery('input#tail').val())-(e.shiftKey?0.1:0.01);
				jQuery('input#tail').val(v);
				this.TailChange(null);
				break;
				
			case Keyboard.Space:
				this.PP();
				break;
		}
	},
	
	
	
	
	TailChange:function(e)
	{
		this.BgOpacity = jQuery('input#tail').val();
	},
	
	
	
	
	Loop: function()
	{
		Dot.DrawAll();
		Attractor.DrawAll();
	},
	
	
	
	
	PP: function()
	{
		if(this.intervalID == -1)
		{
			this.intervalID = setInterval(this.Loop, this.intervalTime);
			jQuery("div#pp").html('pasue');
		}
		else
		{
			clearInterval(this.intervalID);
			this.intervalID = -1;
			jQuery("div#pp").html('play');
		}
	}
};//eo Main{}




jQuery(document).ready(Main.Init.bind(Main));