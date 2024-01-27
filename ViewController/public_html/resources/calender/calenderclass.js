function DatePick() {
    /*$("input[name=it1]").calendarsPicker($.extend(
            { calendar: $.calendars.instance('ummalqura', 'ar') },
                $.calendarsPicker.regionalOptions['en']));*/

//         $("#myDivId").calendarsPicker($.extend(
//                { calendar: $.calendars.instance('ummalqura', 'ar') },
//                    $.calendarsPicker.regionalOptions['en']));  
    $("input[name$='date']").calendarsPicker($.extend( {
        calendar : $.calendars.instance('ummalqura', 'ar')
    },
    $.calendarsPicker.regionalOptions['en']));

    
    
}


 


