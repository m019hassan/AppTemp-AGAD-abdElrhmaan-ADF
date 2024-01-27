function myOnkeyPress(componentEvent)
{    var idCom=componentEvent.getSource();
     var idTxt = idCom +" ";
// var idValue=idCom.newValue();
  //   alter(idValue);
    var evt = componentEvent.getNativeEvent();
    var keyCode = AdfAgent.AGENT.getKeyCode(evt);  
    
    if (AdfAgent.AGENT.getKeyCode(evt) == 13) // 13 is ENTER
    {
        if(idTxt.indexOf('AdfRichInputListOfValues')!= -1){
         componentEvent.cancel();
         AdfFocusUtils.focusNextTabStop(componentEvent.getNativeEventTarget());
         return;
        }
        AdfFocusUtils.focusNextTabStop(componentEvent.getNativeEventTarget());
    }

}


function onLoadImage(){
//$("#pt1\\:i1").hide();
 $("#pt1\\:i1").removeClass("animated hinge");
setTimeout(function(){
$("#pt1\\:i1").addClass("animated hinge");
},2000  );
}

//animated zoomIn
function onLoadImage1(){
//$("#pt1\\:i1").hide();
$("#pt1\\:i21").removeClass();
setTimeout(function(){
$("#pt1\\:i21").addClass("animated jackInTheBox");
},2000  );

function onLoadImage2(){
$("#pt1\\:i2").hide();
}
}