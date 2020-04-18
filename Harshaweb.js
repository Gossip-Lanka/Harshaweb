<script type='application/ld+json'>
{
  &quot;@context&quot; : &quot;http://schema.org&quot;,
  &quot;@type&quot; : &quot;News Media Website&quot;,
  &quot;name&quot; : &quot;Gossip-Lanka News&quot;,
  &quot;alternateName&quot; : &quot;Gossip-Lanka&quot;,
  &quot;url&quot; : &quot;https://www.gossip-lankanews.com&quot;,
 &quot;sameAs&quot; : [
   &quot;https://twitter.com/gossip_lknews&quot;,
   &quot;https://www.facebook.com/gossiplankanewswebsite&quot;,
   &quot;https://www.linkedin.com/in/gossiplankanewswebsite&quot;,
   &quot;https://www.instagram.com/gossiplankanewswebsite&quot;
   ],
  &quot;address&quot;: {
    &quot;@type&quot;: &quot;PostalAddress&quot;,
    &quot;streetAddress&quot;: &quot;Galle Road, Colombo 03&quot;,
    &quot;addressRegion&quot;: &quot;Colombo&quot;,
    &quot;postalCode&quot;: &quot;00300&quot;,
    &quot;addressCountry&quot;: &quot;LK&quot;
  }
}
</script>


<!-- Facebook Conversion Code for Gossip-Lanka -->
<script>(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement(&#39;script&#39;);
    fbds.async = true;
    fbds.src = &#39;//connect.facebook.net/en_US/fbds.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
})();
window._fbq = window._fbq || [];
window._fbq.push([&#39;track&#39;, &#39;6020394115342&#39;, {&#39;value&#39;:&#39;0.01&#39;,&#39;currency&#39;:&#39;USD&#39;}]);
</script>
<noscript><img alt='' height='1' src='https://www.facebook.com/tr?ev=6020394115342&amp;cd[value]=0.01&amp;cd[currency]=USD&amp;noscript=1' style='display:none' width='1'/></noscript>

<script async='async' src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'/>
<script>
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: &quot;9efc0d61-925c-417b-95a6-4bc6be1f10f4&quot;,
    });
  });
</script>

<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5e928ad868865d0012fff352&amp;product=inline-reaction-buttons&amp;cms=website' async='async'></script>

<script type="text/javascript" src="https://assets.revcontent.com/master/delivery.js" defer="defer"></script>

<script type='text/javascript'>
//<![CDATA[
$(document).ready(function () {
  var url_blog = 'https://www.gossip-lankanews.com',
    numpostx  = 10; 
$.ajax({
    url: '' + url_blog + '/feeds/posts/default/-/trending?alt=json-in-script&max-results=' + numpostx + '',
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
        var posturl, posttitle, skeleton = '',
            entry = data.feed.entry;
        if (entry !== undefined) {
            skeleton = "<ul>";
        for (var i = 0; i < entry.length; i++) {
                for (var j=0; j < entry[i].link.length; j++)
                {
                     if (entry[i].link[j].rel == "alternate")
                        {
                            posturl = entry[i].link[j].href;
                            break;
                         }
                }                posttitle = entry[i].title.$t;
            skeleton += '<li><a href="' + posturl + '" target="_blank">' + posttitle + '</a></li>';
        }
            skeleton += '</ul>';
            $('#recentpostbreaking').html(skeleton);
            function tick(){
            $('#recentpostbreaking li:first').slideUp( function () { $(this).appendTo($('#recentpostbreaking ul')).slideDown(); });
            }
        setInterval(function(){ tick () }, 5000);
        } else {
            $('#recentpostbreaking').html('<span>No result!</span>');
        }
    },
    error: function() {
            $('#recentpostbreaking').html('<strong>Error Loading Feed!</strong>');
       }
});
});
//]]>
</script>
