jQuery(function () {

    var openBtn = jQuery('.searchBtn');
    var searchPanel = jQuery('.searchPanel');

    openBtn.click(function (e) {
    
        
        searchPanel.slideToggle();

    })

});