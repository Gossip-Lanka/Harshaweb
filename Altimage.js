//<![CDATA[
$(document).ready(function() {   
$('img').each(function(){     
	var $img = $(this);     
	var filename = $img.attr('src')     
  	$img.attr('class', 'lazy');     
	$img.attr('alt', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));   	
		}); 
}); 
//]]> 
