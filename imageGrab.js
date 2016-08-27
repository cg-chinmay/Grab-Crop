var tabUrl = window.location.href;
console.log("Current Tab URL = "+tabUrl);
console.log("Fetching Images");
//fetch images from document
var images = document.getElementsByTagName("img");
console.log(images.length);
//fetch iframes
var iframe = document.getElementsByTagName("iframe");

//Image URL container
var urls = [];

   for(var i=0;i<iframe.length;i++) {
   	try {
   		var innerDoc = iframe[i].contentWindow.document || iframe[i].contentDocument;
   		var img = innerDoc.getElementsByTagName("img");
        Array.prototype.forEach.call(img, function(image) {
              if(image.src.length > 0) {
              	urls.push(image.src);
              }
        });
   		   	}
   		   	catch(err) {
   		   		continue;
   		   	}
   }
	// var innerDoc = iframe[0].contentDocument || iframe[0].contentWindow.document;
	// var img = innerDoc.getElementsByTagName("img");

Array.prototype.forEach.call(images, function (image) {
    if (image.src.length > 0) {
        urls.push(image.src);
    }
});


console.log(urls);
chrome.runtime.sendMessage({imageList: urls});
