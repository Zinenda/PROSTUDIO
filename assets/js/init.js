(function($){
    $(function(){

      M.updateTextFields();
  
      var $container = $('#masonry-grid');
      // initialize
      $container.masonry({
        columnWidth: '.col',
        itemSelector: '.col',
      });
  
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space