$('#prev').click(function(e) {
    $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('prev'));
});

$('#next').click(function(e) {
    $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('next'));
});

$('#home').click(function(e) {
    $('#viewFrame').attr('src', $('#content', $('#viewFrame').contents()).data('prev'));
});