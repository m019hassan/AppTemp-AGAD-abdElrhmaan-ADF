jQuery(function () {

    var openBtn = jQuery('.searchBtn');
    var searchPanel = jQuery('.searchPanel');

    openBtn.click(function (event) {
        event.preventDefault()
        searchPanel.slideToggle();

    })

});