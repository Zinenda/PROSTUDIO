$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
	$('.materialboxed').materialbox();
	
	// init Lazy Image Load
    $('.lazy').lazy();
    
    var $container = $('#masonry-grid');
    
    $container.masonry({
        columnWidth: '.col',
        itemSelector: '.col',
    });
});
