var ctx;
var y=document.getElementById("fuck");
var x;
//exists
if(y==null)
{
	x=document.createElement('canvas');
	x.id = "fuck";
	x.setAttribute("style","position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:15;background-color:white;opacity:0.7");
	document.body.appendChild(x);
	draw();
    
}

function draw() {

  if (x.getContext) {
    var ctx = x.getContext('2d');
    ctx.strokeRect(50,50,50,50);
  }
}
