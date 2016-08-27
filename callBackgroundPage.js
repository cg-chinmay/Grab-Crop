document.addEventListener('DOMContentLoaded', function() {
      document.getElementById("btnimages").addEventListener("click",fetch);
     });

function fetch() {
	
	chrome.runtime.sendMessage({msg:"openWindow"});
}

document.addEventListener('DOMContentLoaded', function() {
      document.getElementById("btncrop").addEventListener("click",crop);
     });

function crop() {
	chrome.runtime.sendMessage({msg:"crop"});
}