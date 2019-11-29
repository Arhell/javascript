$(".accordion__item").on("click", ".accordion-title", function() {
  $(this).parent().hasClass("active") ?

    ($(this).parent().removeClass("active"),$(this).next().slideUp()) :

    ($(".accordion__item.active .accordion-description").slideUp(),
      $(".accordion__item").removeClass("active"),
      $(this).parent().addClass("active"),
      $(this).next().slideDown(300, function() {
        $("html, body").animate({
          scrollTop: $(this).parent().offset().top
        }, 300)
    }))

  console.log($(this))
  console.log($(this).parent())
});
