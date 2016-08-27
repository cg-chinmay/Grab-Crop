//var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


var cropDiv = document.createElement("div");

cropDiv.id = "croparea";
cropDiv.style.width = "100px";
cropDiv.style.height = "100px";
cropDiv.style.top = $(window).scrollTop() + (window.innerHeight)/2 + "px";
cropDiv.style.left = window.innerWidth/2 + "px";
cropDiv.style.position = "absolute";
//cropDiv.style.backgroundColor = "white";
cropDiv.style.border = "2px solid blue";
cropDiv.style.zIndex = "1000";
var clipbtn = document.createElement("BUTTON");
clipbtn.id = "clip";
clipbtn.style.bottom = "0px";
clipbtn.style.right = "0px";
clipbtn.style.position = "absolute";
var text = document.createTextNode("Clip");
clipbtn.appendChild(text);
cropDiv.appendChild(clipbtn);

document.body.appendChild(cropDiv);



function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

function clipData() {
	var data = [];
	console.log("click");
	var position = getPosition(cropDiv);
	//console.log("Position : "+position.left);
    var pageWidth = $(document).width();
    var pageHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); // doesn't give correct value if $(document).height() used
    alert("Page width : "+pageWidth+" and Page height : "+pageHeight);
	data[0] = position.x;
	data[1] = position.y;
	data[2] = cropDiv.clientWidth;
	data[3] = cropDiv.clientHeight;
	data[4] = pageWidth;
	data[5] = pageHeight;
	console.log("X = "+data[0]+" and Y = "+data[1]+" width = "+cropDiv.clientWidth+" height = "+cropDiv.clientHeight);
	console.log(data);
    chrome.runtime.sendMessage({imgInfo: data});
}



$(function() {
	
	clipbtn.addEventListener("click", clipData);
	$("#croparea").draggable();
	$("#croparea").resizable({
		handles : "n,e,w,s,ne,nw,se,sw"
	});
	console.log("resized");
	
});




