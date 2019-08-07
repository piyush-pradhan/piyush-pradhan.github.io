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
                      items: 3,
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
                'transition': 'all 0.9s ease'
            });
            $('#sidebar > ul').css({
                'width': '210px',
                'transition': 'all 0.9s ease'
            });
            $("#sidebar").removeClass("half-nav");
            $('ul.sidebar-menu > li > a:hover').css({
                'border-radius': '0'
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
        } else {
            $('#main-content').css({
                'margin-left': '60px',
                'transition': 'all 0.9s ease'
            });
            $('#sidebar').css({
                'margin-left': '0px',
                'transition': 'all 0.9s ease'
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
                'border-radius': '0%'
            });
            $('ul.sidebar-menu > li > a.active').css({
                'padding': '3px 0 3px 7px',
                'border-radius': '50%'
            });
            $('ul.sidebar-menu > li > a:hover').css({
                'padding': '3px 0 3px 7px',
                'border-radius': '0%'
            });
            $('ul.sidebar-menu > li > a span').css({
                'display': 'none',
                'transition': 'all 0.9s ease'
            });
            $('ul.sidebar-menu > li > a > i').css({
                'font-size': '20px',
                'transition': 'all 0.9s ease',
                'padding': '6px 0px'
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
        }
    });

      })

