function clipImage(imgUrl,clipData) {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
    
    var screenWidth = clipData[4];
    var screenHeight = clipData[5];
	//var image = document.getElementById("screenshot");
	var image = new Image();
	var tempCanvas = document.createElement('canvas');
	var tempContext = tempCanvas.getContext("2d");
	tempCanvas.width = screenWidth;
	tempCanvas.height = screenHeight;
    var img = new Image();
	image.onload = function() {
		//context.canvas.width = image.width;
		//context.canvas.height = image.height;
	    tempContext.drawImage(image,0,0,screenWidth,screenHeight);
	    img.src = tempCanvas.toDataURL();

		
  		/*image.style.left = "-" + left + "px";
  		image.style.top = "-" + top + "px";

  		if (clipWidth !== undefined) {
            image.parentNode.style.width  = clipWidth  + "px";
            image.parentNode.style.height = clipHeight + "px";
        }*/
	}

	img.onload = function() {

		var left = clipData[0];
		var top = clipData[1];
		var clipWidth = clipData[2];
		var clipHeight = clipData[3];
		context.canvas.width = clipWidth;
		context.canvas.height = clipHeight;
		//alert(image.width);
  		context.drawImage(img,left,top,clipWidth,clipHeight,0,0,clipWidth,clipHeight);
	}
	//var width2 = document.getElementsByTagName('body')[0].clientWidth;
	//var height2 = document.getElementsByTagName('body')[0].clientHeight;
   
	image.src = imgUrl;
	
	
	console.log("img width : "+image.width+" img height : "+image.height);
   // console.log("clientWidth : "+width2 + "clientHeight : "+height2);


	//console.log("imgUrl : "+image.src+" position x:"+left+" position.y:"+top+" clipWidth= "+clipWidth+" clipHeight = "+clipHeight);
}