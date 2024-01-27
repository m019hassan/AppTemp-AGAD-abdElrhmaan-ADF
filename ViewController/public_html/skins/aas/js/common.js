jQuery(function () {
 
    
 
 
 
 
 
    //open and close menu
     var menuBTn = jQuery('.hail-menu-bar');
    jQuery(menuBTn).click(function () {
     //   alert('');
       jQuery(this).toggleClass('selected').parent().toggleClass('open');    
    });   
    
    

});
jQuery(window).load(function () {


});