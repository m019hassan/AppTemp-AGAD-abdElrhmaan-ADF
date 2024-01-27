jQuery(function () {
   
    jQuery.fn.uiSlider = function (options) {
        var defaults = {
            createBullets: true,
            createArrows: false,
            autoPlay: false,
            slideHasItems: true,
            time: 5000,
            sliderWrapperClass: "_sliderWrap",
            prevClass: "_prev",
            nextClass: "_next",

            itemsInSlide: 5,
            bulletsWrapperClass: "_bulletsWrapper",
            bulletClass: "_bullet",
            slideClass: "_slide",
            counterVarName: "counter1",
            goToLeftVarNameVarName: "goToLeftVarName",
            mouseHoverVarName: "mouseHoverVarName",
            tempHolderVarName: "tempHolderVarName",
            numberOfSlidesVarName: "numberOfSlidesVarName",
            sliderEntireWidthVarName: "sliderEntireWidthVarName",
            indentationVarName: "indentationVarName",
            slideWidthVarName: "slideWidthVarName"
        };
        options = jQuery.extend({}, defaults, options);
        return this.each(function () {




            options.counterVarName = 0;
            options.goToLeftVarName = true; // go to the left
            options.mouseHoverVarName = false;
            options.tempHolderVarName = '';
            options.numberOfSlidesVarName = 0;
            options.sliderEntireWidthVarName = 0;
            options.indentationVarName = 0;
            /* slide width */
            //if this display == none so the width will be 0 ,first check if 'this' is dispaly or none
            if (jQuery(this).is(':visible')) {
                 
                options.slideWidthVarName = jQuery(this).width();
                 
            }
            else {
                 
                 
                options.slideWidthVarName = jQuery(this).width();
                 
                 
                //if 'this' has width  == 0 ,get the parent width 
                if (options.slideWidthVarName == 0) {
                   
                    jQuery(this).parent().addClass('_showElmntTemporarily');
                    options.slideWidthVarName = jQuery(this).parent().width();                     
                    jQuery(this).parent().removeClass('_showElmntTemporarily');
                }

                 

            }







            // Create Wrapper //"." + parant + ''
            jQuery(this).append(' <div class="' + options.sliderWrapperClass + '" />');

            //createArrows
            //
            //
            if (options.createArrows) {
                // Create Left Arrow
                jQuery('.' + options.sliderWrapperClass + '').before(' <div style="display:none" class="' + options.prevClass + '"> <span  /> </div>');
                // Create Right Arrow
                jQuery('.' + options.sliderWrapperClass + '').before(' <div class="' + options.nextClass + '"> <span  /></div>');
            }

            // Create slides UL Wrapper
            jQuery(this).find('.' + options.sliderWrapperClass + '').append(' <ul  />');


            // Create  bullets  Wrapper   
            jQuery(this).find('.' + options.sliderWrapperClass + '').append(' <div class="' + options.bulletsWrapperClass + '"  />');

            //Create slides and bullets 
            //
            //
            if (options.slideHasItems) {


                while (jQuery(this).find('._hidden li').size()) {
                    jQuery(this).find('._hidden li').slice(options.itemsInSlide * -1).each(function () {
                        options.tempHolderVarName += jQuery(this).html();
                        jQuery(this).remove();

                    });

                    jQuery('.' + options.sliderWrapperClass + ' ul  ').append('<li  class="' + options.slideClass + '" style="width:' + options.slideWidthVarName + 'px"  > <div>' + options.tempHolderVarName + '</div> </li>');
                    /* append bullet     */
                    if (options.createBullets) {
                        jQuery('.' + options.sliderWrapperClass + ' ' + '.' + options.bulletsWrapperClass + '').append('<div  class="' + options.bulletClass + '" />');
                    }
                    options.tempHolderVarName = "";

                }



            }
            else {

                jQuery(this).find('._hidden li').each(function () {

                    /* append bullet     */
                    if (options.createBullets) {
                        jQuery('.' + options.sliderWrapperClass + ' ' + '.' + options.bulletsWrapperClass + '').append('<div  class="' + options.bulletClass + '" />');
                    }

                    /* append slide with it's content    */




                    jQuery('.' + options.sliderWrapperClass + ' ul  ').append('<li  class="' + options.slideClass + '" style="width:' + options.slideWidthVarName + 'px"  > <div>' + jQuery(this).html() + '</div> </li>');


                });

            }




            if (options.slideHasItems) {
                // Find out the number of slides
                options.numberOfSlidesVarName = jQuery(this).find('.' + options.slideClass + '').size();

                /* calculate the whole width of items wrapper */
                options.sliderEntireWidthVarName = options.slideWidthVarName * options.numberOfSlidesVarName;
            }
            else {
                // Find out the number of slides
                options.numberOfSlidesVarName = jQuery(this).find('.' + options.slideClass + '').size();
                /* calculate the whole width of items wrapper */
                options.sliderEntireWidthVarName = options.slideWidthVarName * options.numberOfSlidesVarName;
            }










            /* apply the whole width to the wrapper*/
            jQuery(this).find('.' + options.sliderWrapperClass + ' > ul:first-child').css({ 'width': options.sliderEntireWidthVarName + "px" });





            ////intial
            jQuery(this).find('.' + options.bulletClass + '').eq(0).addClass('selected');
            //



            // go to left by clicking on nextBtn
            //
            //
            jQuery(this).find('.' + options.nextClass + ' ').click(function (event) {


                if (!jQuery('.' + options.sliderWrapperClass + '').find('ul').is(':animated')) {
                    //hide prev btn at the end of slides
                    jQuery(this).parent().find('.' + options.prevClass + ' ').fadeIn();
                    options.goToLeftVarName = true;
                    if ((options.numberOfSlidesVarName * -1) < (options.numberOfSlidesVarName - 1)) {
                        options.counterVarName -= 1;

                        jQuery(this).parent().find('.' + options.bulletsWrapperClass + ' div').removeClass('selected');
                        jQuery(this).parent().find('.' + options.bulletsWrapperClass + ' div').eq(options.counterVarName * -1).addClass('selected');



                        options.indentationVarName = (options.slideWidthVarName * options.counterVarName) + 'px';
                        jQuery(this).parent().find('ul').animate({ 'left': options.indentationVarName }, 1000, 'easeInOutBack');

                    }
                    if (options.counterVarName == (options.numberOfSlidesVarName - 1) * -1) {
                        jQuery(this).parent().find('.' + options.nextClass + ' ').fadeOut();
                    }

                }

                // slide = false;
            });




            // go to right by clicking on prevBtn
            //
            //

            jQuery(this).find('.' + options.prevClass + ' ').click(function (event) {
                if (!jQuery('.' + options.sliderWrapperClass + '').find('ul').is(':animated')) {
                    //hide prev btn at the end of slides
                    jQuery(this).parent().find('.' + options.nextClass + ' ').fadeIn();
                    if (options.counterVarName == -1) {
                        jQuery(this).parent().find('.' + options.prevClass + ' ').fadeOut();
                    }
                    //slide = true;
                    options.goToLeftVarName = false;
                    if (options.counterVarName != 0) {
                        options.counterVarName += 1;
                        jQuery(this).parent().find('.' + options.bulletsWrapperClass + ' div').removeClass('selected');

                        jQuery(this).parent().find('.' + options.bulletsWrapperClass + ' div').eq(options.counterVarName * -1).addClass('selected');
                        options.indentationVarName = (options.slideWidthVarName * options.counterVarName) + 'px';
                        jQuery(this).parent().find('ul').animate({ 'left': options.indentationVarName }, 1000, 'easeInOutBack');
                    }
                    //slide = false;
                }
            });








            // slide by bullets
            //
            //
            //
            jQuery(this).find('.' + options.bulletClass + '').click(function () {

                //event.preventDefault()
                //slide = true;
                jQuery(this).parent().parent().find('.' + options.bulletClass + '').removeClass('selected');
                jQuery(this).addClass('selected');

                options.counterVarName = jQuery(this).index() * -1;
                if (options.counterVarName == 0) {
                    jQuery(this).parent().parent().find('.' + options.prevClass + ' ').fadeOut();
                    jQuery(this).parent().parent().find('.' + options.nextClass + ' ').fadeIn();
                }
                else if (options.counterVarName == (options.numberOfSlidesVarName - 1) * -1) {
                    jQuery(this).parent().parent().find('.' + options.nextClass + ' ').fadeOut();
                    jQuery(this).parent().parent().find('.' + options.prevClass + ' ').fadeIn();
                }
                else {
                    jQuery(this).parent().parent().find('.' + options.prevClass + ' ').fadeIn();
                    jQuery(this).parent().parent().find('.' + options.prevClass + ' ').fadeIn();
                }
                options.indentationVarName = (options.slideWidthVarName * options.counterVarName) + 'px';
                jQuery(this).parent().parent().find('ul').animate({ 'left': options.indentationVarName }, 1000, 'easeInOutBack');
                //slide = false;
            });











            // autoPlay
            //
            //
            //



            setInterval(function () {

                if (options.autoPlay) {

                    // if the mouse hover the items ,stop the animation
                    if (options.mouseHoverVarName == true) {
                        // stop animation
                    }
                    else {
                        // go to left
                        if (options.goToLeftVarName == true) {
                            options.counterVarName -= 1;
                            //value = x * -1;
                            //show prev Btn
                            if (options.counterVarName == -1) {
                                jQuery('.' + options.sliderWrapperClass + '').find('.' + options.prevClass + ' ').fadeIn();
                            }
                            //hide next Btn at the end of slides
                            if (options.counterVarName == (options.numberOfSlidesVarName - 1) * -1) {
                                jQuery('.' + options.sliderWrapperClass + '').find('.' + options.nextClass + ' ').fadeOut();
                            }
                            // Amount of options.indentationVarName
                            options.indentationVarName = (options.slideWidthVarName * options.counterVarName) + 'px';
                            // check if x is last item
                            if ((options.counterVarName * -1) < options.numberOfSlidesVarName) {
                                jQuery('.' + options.sliderWrapperClass + '').find('.' + options.bulletClass + '').removeClass('selected');
                                jQuery('.' + options.sliderWrapperClass + '').find('.' + options.bulletClass + '').eq(options.counterVarName * -1).addClass('selected');
                                //animate the wrapper


                                jQuery('.' + options.sliderWrapperClass + ' ul').animate({ 'left': options.indentationVarName }, 1000, 'easeInOutBack');
                            }
                                // slider cant move to left
                            else { options.goToLeftVarName = false; }
                        }
                        // go to right
                        if (options.goToLeftVarName == false) {
                            //show next Btn
                            if (options.counterVarName == (options.numberOfSlidesVarName - 1) * -1) {
                                jQuery('.' + options.sliderWrapperClass + '').find('.' + options.nextClass + ' ').fadeIn();
                            }
                            //hide prev btn at the end of slides
                            if (options.counterVarName == -1) {
                                jQuery('.' + options.sliderWrapperClass + '').find('.' + options.prevClass + ' ').fadeOut();
                            }
                            // check if x is first item
                            if (options.counterVarName != 0) {
                                options.counterVarName += 1;
                                jQuery('.' + options.sliderWrapperClass + '').find('.' + options.bulletClass + '').removeClass('selected');
                                jQuery('.' + options.sliderWrapperClass + '').find('.' + options.bulletClass + '').eq(options.counterVarName * -1).addClass('selected');
                                // Amount of options.indentationVarName
                                options.indentationVarName = (options.slideWidthVarName * options.counterVarName) + 'px';
                                jQuery('.' + options.sliderWrapperClass + ' ul').animate({ 'left': options.indentationVarName }, 1000, 'easeInOutBack');
                            }
                                // slider cant move to right
                            else { options.goToLeftVarName = true; }
                        }
                        //}
                    }
                }

            }, options.time);












            // when x hover
            jQuery(this).hover(
            // mouse In
            function () {
                options.mouseHoverVarName = true;
            },
            // mouse Out
            function () {
                options.mouseHoverVarName = false;
            }
            );

        });
    };
});



