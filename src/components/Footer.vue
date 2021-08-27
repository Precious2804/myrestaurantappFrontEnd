<template>
  <footer>
    <div class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <div class="col-wrapper">
              <a class="logo-footer" href="#">
                <img src="images/logo_light.png" alt="image_alt" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor. Cras elementum ultrices diam.
              </p>
            </div>
          </div>
          <!-- /.col-md-4 -->
          <div class="col-sm-6 col-md-4">
            <div class="col-wrapper">
              <div>
                <h3>Contact Us</h3>
              </div>
              <div class="contact-info">
                <p>
                  <i class="fa fa-phone"></i>
                  <a href="#" data-link-href="phone">123-123-1234</a>
                </p>
                <p>
                  <i class="fa fa-envelope"></i>
                  <a href="#" data-link-href="email"> email@example.com</a>
                </p>
                <p>
                  <i class="fa fa-map-marker"></i>
                  <a href="#" target="_blank">423 Fake Street United Kingdom</a>
                </p>
              </div>
            </div>
          </div>
          <!-- /.col-md-4 -->
          <div class="col-sm-6 col-md-4">
            <div class="col-wrapper">
              <div class="footer-subscribe">
                <div>
                  <h3>Subscribe Now</h3>
                </div>
                <form
                  id="footer-subscribe-form"
                  name="footer-subscribe-form"
                  action="https://restora-db82c.firebaseapp.com/Restora/php/subscribe.php"
                  class="clearfix"
                  method="post"
                >
                  <input
                    type="text"
                    name="newsletter_email"
                    class="subscribe-footer-email"
                    placeholder="Address Email"
                  />
                  <button class="fa fa-send" type="submit"></button>
                </form>
              </div>
              <!-- /.footer-subscribe -->
            </div>
            <!-- /.col-wrapper -->
            <div class="col-wrapper">
              <div class="social-icons text-center">
                <a data-social-link="facbook" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a data-social-link="twitter" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a data-social-link="google-plus" href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
                <a data-social-link="linkedin" href="#">
                  <i class="fa fa-linkedin-square"></i>
                </a>
                <a data-social-link="pinterest" href="#">
                  <i class="fa fa-pinterest-p"></i>
                </a>
                <a data-social-link="youtube" href="#">
                  <i class="fa fa-youtube-play"></i>
                </a>
              </div>
              <!-- /.social-icons -->
            </div>
            <!-- /.col-wrapper -->
          </div>
          <!-- /.col-md-4 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <div class="sub-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-push-6">
            <ul class="footer-links text-right">
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Site map</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-md-pull-6">
            Copyright &copy; 2016 Restora. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>