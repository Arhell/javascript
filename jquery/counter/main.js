function counter(value) {

  var initialValue = value;

  function updateCounterValue (value) {
    $('.js-counter-value').text(value);
  }

  var stateValue = initialValue;

  $('.counter-plus').on('click', function () {
    stateValue++;
    updateCounterValue (stateValue);
  });

  $('.counter-minus').on('click', function () {
    if (stateValue > initialValue) {
      stateValue--;
      updateCounterValue (stateValue);
    }
  });

  $('.counter-reset').on('click', function () {
    if (stateValue >= initialValue) {
      updateCounterValue (initialValue);
      stateValue = initialValue;
    }
  });

  updateCounterValue (value);
};

counter(10);


