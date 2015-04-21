$('#viewFrame').load(function() {
    checkButtons();
});

$('#prev').click(function(e) {
    $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('prev'));
});

$('#next').click(function(e) {
    $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('next'));
});

$('#home').click(function(e) {
    $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('home'));
});

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
    //alert('Keypress! ' + key);
   if (key == 39) { //right
       $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('next'));
   }else if (key == 37) { //left
       $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('prev'));
   } else if (key == 40) { //down - home
       $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('home'));
   }
}

function checkButtons() {
    if ($('#content', $('#viewFrame').contents()).data('prev') == "" || $('#content', $('#viewFrame').contents()).data('prev') == null) {
        $('#prev').hide();
    } else {
        $('#prev').show();
    }
    if ($('#content', $('#viewFrame').contents()).data('next') == "" || $('#content', $('#viewFrame').contents()).data('next') == null) {
        $('#next').hide();
    } else {
        $('#next').show();
    }
    if ($('#content', $('#viewFrame').contents()).data('home') == "" || $('#content', $('#viewFrame').contents()).data('home') == null) {
        $('#home').hide();
    } else {
        $('#home').show();
    }
}

/*function setNavbarColor(colorA, colorB) {
    $('#navBg').css({'background':('-webkit-linear-gradient('+colorA+', '+colorB+')'), 'background':('linear-gradient('+colorA+', '+colorB+')')})
}*/