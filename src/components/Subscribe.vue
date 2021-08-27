<template>
  <div
    class="section overlay-5 subscribe text-center"
    data-background-image="images/banner-01.jpg"
  >
    <div class="container">
      <div class="section-header">
        <h2 class="h1">Subscribe for Newsletter</h2>
        <p>
          Enter your email address into our subscribe form to keep your self
          updating with our newslatter.
        </p>
      </div>
      <!-- /.section-header -->
      <div class="subscribe-form">
        <form
          id="subscribe-form"
          name="subscribe-form"
          action="https://restora-db82c.firebaseapp.com/Restora/php/subscribe.php"
          class="clearfix"
          method="post"
        >
          <div class="col-xs-8">
            <input
              type="text"
              name="newsletter_email"
              class="subscribe-email"
              placeholder="Address Email"
            />
          </div>
          <div class="col-xs-4">
            <button class="button button-upper" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <!-- /.subscribe-form -->
      <p><i class="fa fa-info-circle"></i>We Respect Your Privacy</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Subscribe"
}
</script>