// chrome.browserAction.onClicked.addListener(function(tab) {
// console.log("clicked");
// chrome.tabs.executeScript(null, { file: "jquery-1.11.3.min.js" }, function() {
//           chrome.tabs.executeScript(null, { file: "script.js" });
//         });  
// });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.msg == "crop") {
        chrome.tabs.executeScript(null, {file: 'jquery.min.js'},function(){
            chrome.tabs.executeScript(null, {file: 'jquery-custom-ui/jquery-ui.min.js'},function(){
       	chrome.tabs.executeScript({
     file: 'cropArea.js'
    });    
       });
    });  
  }
   else if (request.imgInfo != null) {

        var imgdata = request.imgInfo;
        console.log("Img Info = "+imgdata);
        chrome.tabs.captureVisibleTab(function(screenshotUrl) {
          console.log("Image src = "+screenshotUrl);
          var w = 1280;
          var h =  650;
          var left = (screen.width/2) - (w/2);
          var top = (screen.height/2) - (h/2);
          var tabUrl = chrome.extension.getURL('displayClipArea.html');
        
          chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
              var views = chrome.extension.getViews();
              for (var i = 0; i < views.length; i++) {
                var view = views[i];
                if (view.location.href == tabUrl) {
                  view.clipImage(screenshotUrl,imgdata);
                  break;
                }
              }
            });
          chrome.windows.create({'url':tabUrl ,'type':'popup','width':w,'height':h,'left':left,'top':top});
  });
}
});

chrome.runtime.onMessage.addListener(
     function(request, sender, sendResponse) {
     	if (request.msg == "openWindow") {
      chrome.tabs.executeScript({file: "imageGrab.js"});
     	var w = 950;
        var h = 850;
		var left = (screen.width/2)-(w/2);
		var top = (screen.height/2)-(h/2);
		var tabUrl = chrome.extension.getURL('getImages.html');
		chrome.windows.create({'url': tabUrl, 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} 
		     );
     	};
     }
	)


