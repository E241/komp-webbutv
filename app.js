$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  resizeView();
});

function resizeView() {
	$('#view').css({'top':$('header').innerHeight()-12.5});
}

$('.selopt').click(function(e){
    if (e.currentTarget.dataset.href != "" && !e.currentTarget.dataset.href.isEmptyObject && e.currentTarget.dataset.href != null) {
        location.href = e.currentTarget.dataset.href;
    }
});