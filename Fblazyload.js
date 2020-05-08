<script type='text/javascript'>
//<![CDATA[
$(document).ready(function() {
    $('#fbHolder').append('<div id="fb-root"></div>');
    $('#fbHolder').append('<div class='fb-page' data-adapt-container-width='true' data-height='' data-hide-cover='false' data-href='https://www.facebook.com/gossiplankanewswebsite/' data-show-facepile='true' data-small-header='false' data-tabs='' data-width=''><blockquote cite='https://www.facebook.com/gossiplankanewswebsite/' class='fb-xfbml-parse-ignore'><a href='https://www.facebook.com/gossiplankanewswebsite/'>Gossip-Lanka FB Page</a></blockquote></div></div>');
    jQuery.getScript('https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v6.0&amp;appId=2031543210430999&amp;autoLogAppEvents=1', function() {
        FB.init({status: true, cookie: true, xfbml: true});
    });
});
//]]>
</script>
