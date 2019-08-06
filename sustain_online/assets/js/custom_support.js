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

$document.ready(function()
{
  var drop = $("input");
          drop.on('dragenter', function (e) {
            $(".drop").css({
              "border": "4px dashed #09f",
              "background": "#f4f4f4"
            });
            $(".cont").css({
              "color": "#09f"
            });
          }).on('dragleave dragend mouseout drop', function (e) {
            $(".drop").css({
              "border": "3px dashed #DADFE3",
              "background": "transparent"
            });
            $(".cont").css({
              "color": "#8E99A5"
            });
          });



          function handleFileSelect(evt) {
            var files = evt.target.files; // FileList object

            // Loop through the FileList and render image files as thumbnails.
            for (var i = 0, f; f = files[i]; i++) {

              // Only process image files.
              if (!f.type.match('image.*')) {
                continue;
              }

              var reader = new FileReader();

              // Closure to capture the file information.
              reader.onload = (function(theFile) {
                return function(e) {
                  // Render thumbnail.
                  var span = document.createElement('span');
                  span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                    '" title="', escape(theFile.name), '"/>'].join('');
                  document.getElementById('list').insertBefore(span, null);
                };
              })(f);

              // Read in the image file as a data URL.
              reader.readAsDataURL(f);
            }
          }

          $('#files').change(handleFileSelect);
})
