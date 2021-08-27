<template>
    
    <header class="header">
      <!--=============[ start top-bar ]=============-->
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-sm-7 contact">
              <span class="phone">
                <i class="fa fa-phone"></i>
                <span>Call Us : </span>
                <a href="#" data-link-href="phone" class="main-color">
                  123-123-1234
                </a>
              </span>
              <span class="email">
                <i class="fa fa-envelope"></i>
                <span>Email : </span>
                <a href="#" data-link-href="email" class="main-color">
                  email@example.com
                </a>
              </span>
            </div>
            <!-- end contact -->
            <div class="col-sm-5 social-icons">
              <span>Follow Us : </span>
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
            <!-- end social-icons -->
          </div>
          <!-- row -->
        </div>
      </div>
      <!--=============[ end top-bar ]=============-->

      <!--=============[ start navbar ]=============-->
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container clearfix">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Navigation Menu</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand logo" href="#">
              <!-- start brand logo -->
              <img src="images/logo_dark.png" alt="Logo" title="Restora" />
              <!-- end brand logo -->
            </a>
          </div>
          <!-- /.navbar header -->
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><a class="scroll-up" href="#">Home</a></li>
              <li><a class="scroll-to" href="#services">Our Services</a></li>
              <li><a class="scroll-to" href="#our-menu">Menu</a></li>
              <li><a class="scroll-to" href="#reservation">Reservation</a></li>
              <li><a class="scroll-to" href="#chefs">Our Chefs</a></li>
              <li><a class="scroll-to" href="#blog">Blog</a></li>
              <li><a class="scroll-to" href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
      </nav>
      <!--=============[ end navbar ]=============-->
    </header>

</template>

<script>
export default {
    name: "Header"
};
</script>