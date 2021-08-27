<template>

<!--=================================================>
<==================| START PRELOADER |===============>
<==================================================-->
  <!-- <div id="preloader">
    <div class="loader"></div>
  </div> -->
  <!-- /#preloader -->
  <!--=================================================>
<===================| END PRELOADER |================>
<==================================================-->

  <!--===================================================>
<================| START FULL-CONTAINER |==============>
<====================================================-->
  <div class="full-container">
    <!--=============[ start header ]=============-->
    <Header />
    <!--=============[ end header ]=============-->

    <!--=============[ start banner-structure section ]=============-->
    <Banner />
    <!--=============[ end banner-structure section ]=============-->

    <!--=============[ start features section ]=============-->
    <Features />
    <!--=============[ end features section ]=============-->

    <!--=============[ start about-us section ]=============-->
    <History />
    <!--=============[ end about-us section ]=============-->

    <!--=============[ start services section ]=============-->
    <Services />
    <!--=============[ end services section ]=============-->

    <!--=============[ start video section ]=============-->
    <Video />
    <!--=============[ start video section ]=============-->

    <!--=============[ start our-menu section ]=============-->
    <Menu />
    <!--=============[ end our-menu section ]=============-->

    <!--=============[ start counter-up section ]=============-->
    <Counter />
    <!--=============[ end counter-up section ]=============-->

    <!--=============[ start reservation section ]=============-->
    <Reservation />
    <!--=============[ end reservation section ]=============-->

    <!--=============[ start our-team section ]=============-->
    <Team />
    <!--=============[ end our-team section ]=============-->

    <!--=============[ start gallery section ]=============-->
    <Gallery />
    <!--=============[ end gallery section ]=============-->

    <!--=============[ Start blog section ]=============-->
    <Blog />
    <!--=============[ end blog section ]=============-->

    <!--=============[ start section-shop ]=============-->
    <div class="section section-shop">
      <div class="container">
        <div class="section-wrapper">
          <div class="left bg-color">
            <i class="fa fa-shopping-bag"></i>
          </div>
          <div class="inner">
            <h3>We also deliver to your office</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus.
            </p>
          </div>
          <div class="right">
            <a class="button">Call Us : 1342 453 432</a>
          </div>
        </div>
        <!-- /.section-wrapper -->
      </div>
      <!-- /.container -->
    </div>

    <!--=============[ start subscribe section ]=============-->
    <Subscribe />
    <!--=============[ end subscribe section ]=============-->

    <!--=============[ start testmonials section ]=============-->
    <Testimonial />
    <!--=============[ end testmonials section ]=============-->

    <!--=============[ start contact-section ]=============-->
    <Contact />
    <!--=============[ end contact-section ]=============-->

    <!--=============[ start footer ]=============-->
    <Footer />
    <!--=============[ end footer ]=============-->
  </div>
  <!--=================================================>
<================| END FULL-CONTAINER |==============>
<==================================================-->
</template>

<script>
import Header from './Header.vue'
import Banner from './Banner.vue'
import Features from './Features.vue'
import History from './History.vue'
import Services from './Services.vue'
import Video from './Video.vue'
import Menu from './Menu.vue'
import Counter from './Counter.vue'
import Reservation from './Reservation.vue'
import Team from './Team.vue'
import Gallery from './Gallery.vue'
import Blog from './Blog.vue'
import Subscribe from './Subscribe.vue'
import Testimonial from './Testimonial.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Header,
    Banner,
    Features,
    History,
    Services,
    Video,
    Menu,
    Counter,
    Reservation,
    Team,
    Gallery,
    Blog,
    Subscribe,
    Testimonial,
    Contact,
    Footer
  }
};
</script>

