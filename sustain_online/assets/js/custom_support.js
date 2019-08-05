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

      })
