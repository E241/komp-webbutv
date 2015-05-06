var baseURI;

function initBaseURI() {
    baseURI = document.baseURI;
    if (!baseURI) {
        baseTags = document.getElementsByTagName("base");
        baseURI = baseTags.length ? baseTags[0].href : document.URL;
    }
}

function isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
            return true;
        else                 // If another browser, return 0
            return false;
}

$(document).ready(function() {
    initBaseURI();
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    if (baseURI.indexOf('main.html') > -1) {
        setNavbarColor('#003D99');
        $('#view', parent.document).fadeIn(500);
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
    if (!isIE()) {
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
    } else {
        var href = e.currentTarget.getAttribute('data-href');
        if (href != "" && !href.isEmptyObject && href != null) {
            if ($(this).attr('id') == 'htmlopt') {
                setNavbarColor('#00e57b');
            } else if ($(this).attr('id') == 'cssopt') {
                setNavbarColor('#009fe5');
            } else if ($(this).attr('id') == 'jsopt') {
                setNavbarColor('#eeff00');
            }
            location.href = href;
        }
    }
});