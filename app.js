$(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    if (document.baseURI.indexOf('main.html') > -1) {
        setNavbarColor('#003D99');
    }
    resizeView();
});

function resizeView() {
	$('#view').css({'top':$('navBg').height()});
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
            $("#home img",parent.document).removeClass('invert');
        }
        location.href = e.currentTarget.dataset.href;
    }
});