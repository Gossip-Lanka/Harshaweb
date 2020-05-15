//<![CDATA[
var bLazy = new Blazy({
  success: function(){
    updateCounter();
  }
});

var imageLoaded = 0;
var eleCountLoadedImages = document.getElementById('loaded-images');

function updateCounter() {
  imageLoaded++;
  eleCountLoadedImages.innerHTML = imageLoaded;
}
//]]>
