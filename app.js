$(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    resizeView();
});

function resizeView() {
	$('#view').css({'top':$('header').innerHeight()-12.5});
}

function setNavbarColor(color) {
    $("#navBg",parent.document).css({backgroundColor:color});
}

$('.selopt').click(function(e){
    if (e.currentTarget.dataset.href != "" && !e.currentTarget.dataset.href.isEmptyObject && e.currentTarget.dataset.href != null) {
        if ($(this).attr('id') == 'htmlopt') {
            setNavbarColor('#00e57b');
        } else if ($(this).attr('id') == 'cssopt') {
            setNavbarColor('#009fe5');
        } else if ($(this).attr('id') == 'jsopt') {
            setNavbarColor('#eeff00');
        }
        location.href = e.currentTarget.dataset.href;
    }
});