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

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If IE < 11 return true
            return true;
        else                 // If another browser, return false
            return false;
}

function getPageWanted() {
    if (location.hash != '' && location.hash && !location.hash.isEmptyObject && window.location.pathname != location.hash.replace('#','')) {
        document.getElementById('viewFrame').setAttribute('src', location.hash.replace('#',''));
    } else {
        
    }
}

function goToURL(url, isNav) {
    if (isNav) {
        window.location.hash = url;
        $('#viewFrame').attr('src', url);
    } else {
        parent.window.location.hash = url;
        location.href = url;
    }
}

function goTo(url) {
    goToURL(url, false);
}

$(document).ready(function() {
    initBaseURI();
    getPageWanted();
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    if (baseURI.indexOf('main.html') > -1) {
        setNavbarColor('#003D99');
        $('#view', parent.document).fadeIn(500);
    }
    if (baseURI.indexOf('html/') > -1) {
        setNavbarColor('#00e57b');
        $('#view', parent.document).fadeIn(500);
    }
    if (baseURI.indexOf('css/') > -1) {
        setNavbarColor('#009fe5');
        $('#view', parent.document).fadeIn(500);
    }
    if (baseURI.indexOf('js/') > -1) {
        setNavbarColor('#eeff00');
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

$('a').click(function(e){
    var href = e.currentTarget.getAttribute('href'); 
    if (href && href != null && !href.isEmptyObject && href != '') {
        e.preventDefault();
        goTo(href);
    }
});

$('.selopt').click(function(e){
    if (!isIE()) {
        if (e.currentTarget.dataset.href != "" && !e.currentTarget.dataset.href.isEmptyObject && e.currentTarget.dataset.href != null) {
            goTo(e.currentTarget.dataset.href);
        }
    } else {
        var href = e.currentTarget.getAttribute('data-href');
        if (href != "" && !href.isEmptyObject && href != null) {
            goTo(href);
        }
    }
});