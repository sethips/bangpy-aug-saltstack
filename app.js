$(document).ready(function() {
    $('#pagepiling').pagepiling();
    $('#pp-nav').hide()
    $("body").on('click', '#prevToPreSection', function(){
      $("#code").css('style', 'display:block') 
    })
});
