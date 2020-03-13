  <!-- footer -->
  <footer class="footer-emp-w3ls py-5">
    <div class="container pt-lg-3">
      <div class="row footer-top">
        <div class="col-lg-6 col-sm-6 footer-grid-wthree">
          <div class="footer-logo">
            <img src="images/so_logo_white.png" class="img-fluid" alt="">
          </div>
          <div class="contact-info mt-3">
            <p class="mt-2 col-white">SustainOnline is the first sustainability platform offering both
              education and reporting for millions of SMEs, corporates and cities to an affordable price.
            </p>
            <p class="col-white">	We educate your whole organization and get your ESG
              proposition right.
            </p>
          </div>
          <div class="social mt-4">
            <h5 class="col-white">STAY IN TOUCH</h5>
            <div class="d-flex social-links mt-3">
              <a class="" href="javascript:void(0)"><img src="images/facebook.png" class="img-fluid" alt=""></a>
              <a class="ml-4" href="javascript:void(0)"><img src="images/instagram.png" class="img-fluid" alt=""></a>
              <a class="ml-4" href="javascript:void(0)"><img src="images/linkedin.png" class="img-fluid" alt=""></a>
              <a class="ml-4" href="javascript:void(0)"><img src="images/youtube.png" class="img-fluid" alt=""></a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-lg-6 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4">
              <h3 class="footer-title text-uppercase mb-4">COMPANY</h3>
              <ul class="links list-unstyled">
                <li>
                  <a class="" href="#home">About</a>
                </li>
                <li>
                  <a class="" href="#about">Contact</a>
                </li>
                <li>
                  <a class="" href="#services">FAQ</a>
                </li>
                <li>
                  <a class="" href="#process">News</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4">
              <h3 class="footer-title invisible text-uppercase mb-4">Quick Links</h3>
              <ul class="links list-unstyled">
                <li>
                  <a class="" href="#home">Payment account login</a>
                </li>
                <li>
                  <a class="" href="#about">Privacy & Cookie policy</a>
                </li>
                <li>
                  <a class="" href="#services">Purchase agreement</a>
                </li>
                <li>
                  <a class="" href="#process">Terms & Conditions </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-3 col-sm-6 footer-grid-wthree mt-lg-0 mt-sm-5 mt-4 d-none">
          <h3 class="footer-title text-uppercase mb-4">Contact Us</h3>
          <div class="contact-info">
            <div class="footer-style-w3ls">
              <h4 class="mb-2"> <span class="fa mr-1 fa-map-marker"></span> Location</h4>
              <p>Marketing Agency, 5th cross, 4th building, New York City.</p>
            </div>
            <div class="footer-style-w3ls my-3">
              <h4 class="mb-2"><span class="fa mr-1 fa-phone"></span> Phone</h4>
              <p>+121 098 8907 9987</p>
            </div>
            <div class="footer-style-w3ls">
              <h4 class="mb-2"><span class="fa mr-1 fa-envelope-open"></span> Email</h4>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>
          </div> -->
      </div>
    </div>
  </footer>
  <!-- //footer -->
  <!-- copyright -->
  <div class="copy-right-top">
    <p class="copy-right text-center py-2">&copy; 2020 Digital. All Rights Reserved | Design by
      <a href="https://yagnitech.com/"> YagniTech Solutions </a>
    </p>
  </div>
  <!-- //copyright -->
  <!-- move top -->
  <div class="move-top text-right">
    <a href="#home" class="move-top">
    <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span>
    </a>
  </div>
  <!-- move top -->
  <!-- popup -->
  <div id="popup1" class="popup-effect">
    <div class="popup">
      <img src="images/banner.png" alt="Popup Image" class="img-fluid" />
      <p class="mt-4 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo quasi architecto beatae vitae dicta
        sunt explicabo.
      </p>
      <a class="close" href="#">&times;</a>
    </div>
  </div>
  <!-- //popup -->
  <!-- popup -->
  <div id="popup2" class="popup-effect">
    <div class="popup">
      <p class="mt-4 ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo quasi architecto beatae vitae dicta
        sunt explicabo.
      </p>
      <a class="close" href="#">&times;</a>
    </div>
  </div>
  <!-- //popup -->
  <!-- // Scripts -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/pushmenu.js"></script>
  <script>
    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 3,
            nav: true,
            loop: true,
            margin: 20
          }
        }
      })
    })
  </script>
  <script type="text/javascript">
    (function($){
        $('#pm_menu').pushmenu({ button : "#open" });
    })(jQuery);
  </script>
</body>
</html>