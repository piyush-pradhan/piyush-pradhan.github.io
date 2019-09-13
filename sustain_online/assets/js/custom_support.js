$(document).ready(function() {
          $('.owl-carousel').owlCarousel({
              loop: true,
              margin: 10,
              responsiveClass: true,
              responsive: {
                  0: {
                      items: 1,
                      nav: false,
                      autoplay: true,
                      autoplayTimeout: 3500,
                  },
                  600: {
                      items: 3,
                      nav: false
                  },
                  1000: {
                      items: 4,
                      nav: true,
                      loop: false,
                      margin: 20
                  }
              }
          })

          $('.owl-carousel-2').owlCarousel({
              loop: true,
              margin: 10,
              responsiveClass: true,
              responsive: {
                  0: {
                      items: 1,
                      nav: false,
                      autoplay: true,
                      autoplayTimeout: 3500,
                  },
                  600: {
                      items: 2,
                      nav: false
                  },
                  1000: {
                      items: 3,
                      nav: true,
                      loop: false,
                      margin: 20
                  }
              }
          })


          $('.owl-carousel-3').owlCarousel({
              loop: true,
              margin: 10,
              responsiveClass: true,
              autoWidth:true,
              responsive: {
                  0: {
                      items: 1,
                      nav: false,
                      autoplay: true,
                      autoplayTimeout: 3500,
                      margin:35
                  },
                  600: {
                      items: 1,
                      nav: true,
                      margin:20
                  },
                  1000: {
                      items: 3,
                      nav: true,
                      loop: false,
                      margin: 36,

                  }
              }
          })



           $('[data-toggle="popover"]').popover();

           $("#resp-sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#resp-sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#resp-sidebarCollapse').on('click', function () {
                $('#resp-sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                //$('#main-content').css('margin-left' : '0');
            });



            $('.fa-bars').click(function() {
        if ($('#sidebar').hasClass("half-nav")) {
            $('#main-content').css({
                'margin-left': '210px',
                'transition': 'all 0.9s ease'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0',
                'transition': 'all 0.9s ease'
            });
            $('#sidebar').css({
                'width': '210px',
                'transition': 'all 0.9s ease',
                'overflow-x' : 'hidden',
                'overflow-y' : 'auto'
            });
            $('#sidebar > ul').css({
                'width': '210px',
                'transition': 'all 0.9s ease'
            });
             $("#sidebar").removeClass("half-nav");
            $('ul.sidebar-menu > li > a').css({
                'border-radius': '0%',
            });
            $("#sidebar").removeClass("half-nav");
            $('ul.sidebar-menu > li > a:hover').css({
                'border-radius': '0%',
            });
            $('ul.sidebar-menu > li > a > span').css({
                'display': 'inline-block'
            });
            $('ul.sidebar-menu > li > a > i').css({
                'font-size': '15px',
                'transition': 'all 0.9s ease'
            });
            $('a.active').css({
                'border-radius': '0%'
            });
            $('ul.sidebar-menu > li > a > i').css({
                'font-size': '15px',
                'transition': 'all 0.9s ease'
            });
            $('#sidebar > ul > li').css({
                'padding': '0px'
            });
            $('ul.sidebar-menu.second > li > p').css({
                'display': 'block',
                'transition': 'all 0.9s ease'
            });
            $('ul.sidebar-menu.second hr').css({
                'display': 'block',
                'transition': 'all 0.9s ease'
            });
            $('ul.sidebar-menu.third ').css({
                'display': 'block',
                'transition': 'all 0.9s ease'
            });
            $('ul.sidebar-menu.second').css({'display' : 'block'});
            $('.toggle-content').css({'display' : 'none'});
        } else {
            $('#main-content').css({
                'margin-left': '60px',
                'transition': 'all 0.9s ease'
            });
            $('#sidebar').css({
                'margin-left': '0px',
                'transition': 'all 0.9s ease',
                'overflow' : 'hidden',
                'overflow-y' : 'auto'
            });
            $('#sidebar > ul').show();
            $('#sidebar > ul').css({
                'width': '55px',
                'transition': 'all 0.9s ease'
            });
            $('#sidebar').css({
                'width': '55px',
                'transition': 'all 0.9s ease'
            });
            $('#sidebar').addClass("half-nav");
            $('ul.sidebar-menu > li > a').css({
                'padding': '3px 0 3px 10px',
                'border-radius': '50%'
            });
            $('ul.sidebar-menu > li > a.active').css({
                'padding': '3px 11px',
                'border-radius': '50%'
            });
            $('ul.sidebar-menu > li > a:hover').css({
                'padding': '3px 0 3px 7px',
                'border-radius': '50%'
            });
            $('ul.sidebar-menu > li > a span').css({
                'display': 'none',
                'transition': 'all 0.9s ease'
            });
            $('ul.sidebar-menu > li > a > i').css({
                'font-size': '20px',
                'transition': 'all 0.9s ease',
                'padding': '6px 5px 6px 0px'
            });
            $('#sidebar > ul > li').css({
                'padding': '0 6px'
            });
            $('a.active').css({
                'border-radius': '50%'
            });
            $('ul.sidebar-menu.second > li > p').css({
                'display': 'none',
                'transition': 'all 0.9s ease'
            });
            $('ul.sidebar-menu.second hr').css({
                'display': 'none',
                'transition': 'all 0.9s ease'
            });
            $('ul.sidebar-menu.third ').css({
                'display': 'none',
                'transition': 'all 0.9s ease'
            });
            $('ul.sidebar-menu.second').css({'display' : 'none'});
            $('.toggle-content').css({'display' : 'block'});
            $('#um-dd3 > a:hover').css({'color': '#09b47d','background-color' : '#dcf1ea', 'border-radius' : '50%'})

        }
      });
      $("#manager").click(function () {
              if ($(this).is(":checked")) {
                  $(".manager-content").removeClass('hidden');
              } else {
                  $(".manager-content").addClass('hidden');
              }
          });
          $("#administrator").click(function () {
              if ($(this).is(":checked")) {
                  $(".admin-content").removeClass('hidden');
              } else {
                  $(".admin-content").addClass('hidden');
              }
          });

           $(document).ready(function(e){
    $( document ).on( 'click', '.bs-dropdown-to-select-group .dropdown-menu li', function( event ) {
      var $target = $( event.currentTarget );
    $target.closest('.bs-dropdown-to-select-group')
      .find('[data-bind="bs-drp-sel-value"]').val($target.attr('data-value'))
      .end()
      .children('.dropdown-toggle').dropdown('toggle');
    $target.closest('.bs-dropdown-to-select-group')
        .find('[data-bind="bs-drp-sel-label"]').text($target.context.textContent);
    return false;
  });
});


      });

