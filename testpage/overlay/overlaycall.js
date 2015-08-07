
    $(document).ready(function() {
      $('.fancybox').fancybox();
      var url = $(".fancybox").find('a').attr('href');
      $(this).fancybox({
        //hrefに変数urlを入れる
        'href'        : url,
      });
    });

    $(window).load(function(){
      $.fancybox.open($('.fancybox'));
    });




