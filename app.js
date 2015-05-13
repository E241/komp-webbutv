var baseURI;

// DO NOT TOUCH!
// Hack around the fox
init();

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
        if (url.indexOf('http://') < 0 && url.indexOf('javascript:') < 0) {
            parent.window.location.hash = url;
            location.href = url;
        } else {
            parent.window.location.href = url;
        }
    }
}

function goTo(url) {
    goToURL(url, false);
}

function showIENotice() {
    $('#ieNotice').css({'top':window.innerHeight - $('#ieNotice').innerHeight(), 'left':window.innerWidth - $('#ieNotice').innerWidth()});
    $('#ieNotice').slideDown();
}

$('#ieNotice div a').click(function(){
    $('#ieNotice').slideUp();
});

$(window).resize(function() {
    resizeView();
});

function init() {
    initBaseURI();
    getPageWanted();
    if (isIE()) showIENotice();
    //showIENotice();
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
    window.setTimeout(resizeView(), 1000);
}

function resizeView() {
	//alert(window.innerWidth);
    if (window.innerWidth > 900 && (baseURI.indexOf('viewport.html') > -1)) {
        $('#navBg').css({'top':0, 'bottom':$('#navBg').innerHeight()});
        $('#view').css({'top':$('#navBg').innerHeight(), 'bottom':0});
        console.log('Large ' + window.innerHeight);
    } else if (window.innerWidth <= 900 && (baseURI.indexOf('viewport.html') > -1)) {
        $('#navBg').css({'top':window.innerHeight-$('#navBg').innerHeight(), 'bottom':0});
        $('#view').css({'top':0, 'bottom':$('#navBg').innerHeight()});
        console.log('Small ' + window.innerHeight);
    }
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

$(document).keyup(function(e) {
    if (baseURI.indexOf('viewport.html') > -1) {
        if (e.which == 39) {
            goToURL($('#content', $('#viewFrame').contents()).data('next'), true);
        }
        if (e.which == 37) {
            goToURL($('#content', $('#viewFrame').contents()).data('prev'), true);
        }
        if (e.which == 72) {
            goToURL($('#content', $('#viewFrame').contents()).data('home'), true);
        }
    } else {
        if (e.which == 39) {
            goTo($('#content').data('next'));
        }
        if (e.which == 37) {
            goTo($('#content').data('prev'));
        }
        if (e.which == 72) {
            goTo($('#content').data('home'));
        }
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