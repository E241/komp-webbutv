//Check if file or webserver
if (location.host == null || location.host == "") {
    alert('Use a webserver, do not open files directly!');
}

$('#viewFrame').load(function() {
    checkButtons();
});

$('#prev').click(function(e) {
    goToURL($('#content', $('#viewFrame').contents()).data('prev'), true);
});

$('#next').click(function(e) {
    goToURL($('#content', $('#viewFrame').contents()).data('next'), true);
});

$('#home').click(function(e) {
    goToURL($('#content', $('#viewFrame').contents()).data('home'), true);
});

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