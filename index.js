//* location.href='viewport.html *//
$('#button').click(function() {click();});

function click(){
    $('#button').addClass('topbar');
    //click2();
    setTimeout(click2, 250)
}
function click2(){
    $('#button').addClass('topbar2');
    $('body').addClass("white");
    $('h2').addClass('invis');
    $('#back').addClass('invis');
    $('h1').addClass('invis');
    
    setTimeout(href, 500)
}
function href(){
    location.href='viewport.html';
}