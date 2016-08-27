
var selectedImgs = [];
var select = 0.4;
var deselect = 1;

document.addEventListener('DOMContentLoaded', function() {
      document.getElementById("btnSelect").addEventListener("click",sendImgs);
     });

function sendImgs() {
  alert(selectedImgs.length);
  }


function sendImageList(e) {
  alert(selectedImgs.length);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.imageList) {
      var urls = request.imageList;
   //   console.log(urls);
    //  console.log("Urls Size = "+urls.length);
  
      displayImages(urls);
        }
    });


function displayImages(urlList) {
	var count = 0;
  var imgCount = urlList.length;
	var rows = Math.ceil(imgCount/3);
	console.log("Rows = "+rows);
	var container = document.getElementById("ImageContainer");
	var table = document.createElement('table');
  table.addEventListener("click",selectImage,false);
    for (var i = 0; i < rows; i++) {
         var tr = document.createElement('tr');
         for(var j = 0;j<3;j++) {
         	var td = document.createElement('td');
         	var img = document.createElement('img');
          if(count==imgCount) {
            break;
          }
         	img.setAttribute('src',urlList[count]);

         console.log("img src:"+count+" = "+urlList[count]);
         	count++;
         	img.setAttribute('height','140px');
         	img.setAttribute('width','200px');
         	td.appendChild(img);
         	tr.appendChild(td);
         }
          table.appendChild(tr);
    	}
    	container.appendChild(table);
    }

    function selectImage(e) {
      if (e.target !== e.currentTarget) {
          var selectedImg = e.target;
          var status = selectedImg.style.opacity;
          if(status == select) {
            selectedImg.style.opacity = deselect;
            selectedImgs.pop(selectedImg);
          }
          else {
            selectedImg.style.opacity = select;
            selectedImgs.push(selectedImg);
          }

      }
      console.log("Selected Imgs = "+selectedImgs);
      e.stopPropagation();
    }
