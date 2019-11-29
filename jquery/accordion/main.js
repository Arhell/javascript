function accordion(mode) {

  var titleSelector = $('.accordion-title');

  mode = mode || 'single';

  if (mode === 'multiply') {
    titleSelector.on('click', function () {

      var itemDescription = $(this).next();

      if(itemDescription.is(':visible')) {
        itemDescription.hide();
      }

      else {
        $('.accordion-description:visible').hide();
        itemDescription.show();
      }
    });
  }

  else if(mode === 'single'){
    titleSelector.on('click', function () {
      $(this).next().toggle();
    });
  }
};

accordion('multiply');
