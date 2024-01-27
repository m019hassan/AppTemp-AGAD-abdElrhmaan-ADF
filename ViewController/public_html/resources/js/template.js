function generate(type,value) {
        var n = noty({
            text        : value,
            type        : type,
            dismissQueue: true,
            timeout     : 3000,
            closeWith   : ['click'],
            layout      : 'center',
            theme       : 'defaultTheme',
            maxVisible  : 10
        });
        //console.log('html: ' + n.options.id);
}
    function displayMessage(msg,type) {
        generate(type,msg);    
    }
    
    function displayMessageWithCss(msg,sender,req,type,flag) {
    var html="";
    if(flag===1)
    html="<span class=\"hstyle\"> -  \u0631\u062F \u0639\u0644\u0649 \u0631\u0633\u0627\u0644\u0629</span>";
    
     html=html+"<div>  <span class=\"hstyle\"> -  \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628\:</span> <span class=\"cstyle\">"+req+"</span> </div>"+
    "<div> <span class=\"hstyle\"> -  \u0627\u0644\u0645\u0631\u0633\u0644\:</span> <span class=\"cstyle\">"+sender+"</span>  </div>"+
    "<hr/>"+
    "<div> <span class=\"cstyle\"><p>"+msg+" </p> </span></div>";
        generateWithCss(type,  html);    
    }
    
    function generateWithCss(type, text) {

            var n = noty({
                text        : text,
                type        : type,
                dismissQueue: true,
                layout      : 'centerLeft',
                closeWith   : ['click'],
                theme       : 'relax',
                maxVisible  : 10,
                animation   : {
                    open  : 'animated bounceInLeft',
                    close : 'animated bounceOutLeft',
                    easing: 'swing',
                    speed : 500
                }
            });
            console.log('html: ' + n.options.id);
        }
        
        
        