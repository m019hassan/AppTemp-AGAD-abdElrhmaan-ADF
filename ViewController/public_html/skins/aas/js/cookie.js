jQuery(function () {
 
   //chnnge themes
   var bodySelector = jQuery('body');
    var ThemeBtn = jQuery('.theme-btns span');
      var cookie = $.cookie("the_cookie");
    
      
     
     
     
     
    jQuery(ThemeBtn).click(function () {   
    
    
    
        cookieValue = jQuery(this).attr("date-theme-color");              
        jQuery.cookie('the_cookie',cookieValue , { expires: 365 } ); 
          
         
          
         bodySelector.attr({ 'class': cookieValue });
         
            
               
    });
      
bodySelector.attr({ 'class': cookie });
 
 
 
 
 
     
    

});
 