
(function ($) {

Drupal.behaviors.RacesBehavior = {
attach: function (context, settings) {

   /* Remove broken images entirely */
   /* $('.view-display-id-coverview img').error(function() {
    $(this).parents('.views-row').addClass('removeelem');
    $(this).parents('.views-row').remove();
   });


   var divs = $('.view-display-id-coverview .view-content .views-row');
   for(var i = 0; i < divs.length; i+=2) {
      divs.slice(i, i+2).wrapAll("<div class='view-table-row'></div>");
    } */

    /*$('.view-display-id-coverview .views-row img').each(function() {

      imgwidth = $(this).width() + 10;
      imgheight = $(this).height() + 10;
      $(this).parents('.views-row').width(imgwidth);
      $(this).parents('.views-row').height(imgheight);
      //$(this).parents('.views-row').css('width', imgwidth + ' px');
      //$(this).parents('.views-row').css('height', imgheight + ' px');

    });   */
    $('.view-display-id-coverview .view-content').bricks({ maxRowHeight: 450, minRowHeight: 250, itemSelector: '.views-row' });

    var divs = $(".view-display-id-coverview .view-content .views-row");
    for(var i=0; i<divs.length;) {
             i += divs.eq(i).nextUntil(':not(.views-row)').andSelf().wrapAll('<div style="display: table"><div style="display: table-row" />').length;
    }
    $('.view-display-id-coverview .view-content .views-row').wrap('<div style="display: table-cell">');  
    $('.view-display-id-coverview .view-content br').remove(); 

    jQuery('a[href*="#"]').live('click', function() {
       if(jQuery(this).attr('class') != 'fancybox') {
         fragment = jQuery(this).attr('href').split('#')[1];
         jQuery('html,body').animate({scrollTop: jQuery('#' + fragment).offset().top - 50},'3500');
        } 
     });

     jQuery(".quote-citation").live("click", function() {
    
      id = jQuery(this).attr('id').substr(5);
      jQuery("#source-" + id).slideDown(400);
   });
   
   jQuery(".node-type-book .field-name-body").bind('copy', function() {
     jQuery('#copy-notice').slideDown(600);
   }); 
   jQuery("#copy-notice-close").click(function() {
     jQuery('#copy-notice').slideUp(600);
   });
   
   jQuery(".block-facetapi h2.block-title").click(function() {
     jQuery('.block-facetapi .item-list').slideDown(600);
     jQuery('p.helptext').show(1000);
   });

  jQuery(".search-tips-link").click(function() {
     jQuery('.search-tips').slideDown(600);
   });
   
   /*jQuery(".fancybox").fancybox({
    maxWidth  : 500,
    fitToView : false,
    width   : '92%',
    height    : '92%',
    autoSize  : true,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  }); */

  // Open the original English source in new window
  // TODO: uncomment AJAX population in book-nav preprocess in template.php
  // and also write the ajax php file to get source data
  jQuery("#original-source-link").click(function() {  
        html = jQuery("#original-source").html();
        //jQuery(this).parent().parent().siblings(".audio-wrapper").show('slow');
        var w = window.open('', '', 'width=600,height=250,location=0,status=0,menubar=0,titlebar=0,resizeable,scrollbars,screenY=900,top=900,screenX=400,left=400');
        w.document.write(html);
        w.document.close(); // needed for chrome and safari  
  }); 


   /* var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
   
   if(iOS == false) {
    
     jQuery('li#permalink a').removeAttr('href').removeClass('fancybox'); 
    
     jQuery('li#permalink').zclip({
        path:'sites/all/themes/library/js/ZeroClipboard.swf',
        copy:jQuery('#permalink-copy').text(),
        afterCopy:function(){
            alert('here');
            jQuery('li#permalink a').attr('href', '#permalink-source').addClass('fancybox');
            jQuery("li#permalink a").trigger('click');
        }
     });
   } else {
       
    
   }  */


  }}; 
  




})(jQuery);






   

