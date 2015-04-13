$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  resizeView();
});

function resizeView() {
	$('#view').css({'top':$('header').innerHeight()-12.5});
}