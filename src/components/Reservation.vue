<template>
  <div id="reservation" class="section reservation">
    <div class="container">
      <div class="section-header">
        <h2 class="h2">Make a Reservation</h2>
        <p>
          Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut
          orci vel massa suscipit pulvinar.
        </p>
      </div>
      <!-- /.section-header -->
      <form
        id="reservationForm"
        name="reservationForm"
        action="#"
        method="post"
      >
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="row">
              <div class="col-sm-12 form-element">
                <label for="name" class="sr-only">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                />
              </div>
              <div class="col-sm-6 form-element">
                <label for="email" class="sr-only">Address Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Address Email"
                />
              </div>
              <div class="col-sm-6 form-element">
                <label for="phone" class="sr-only">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div class="col-sm-6 form-element">
                <label for="guests" class="sr-only">Numbers Guests</label>
                <input
                  type="text"
                  name="guests"
                  id="guests"
                  placeholder="Numbers Guests"
                />
              </div>
              <div class="col-sm-6 form-element">
                <label for="date" class="sr-only">Date Of Reservation</label>
                <input type="text" name="date" id="date" placeholder="Date" />
              </div>
            </div>
            <!-- /.row -->
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="row">
              <div class="col-sm-4 form-element">
                <label for="hour" class="sr-only">Hour</label>
                <select id="hour" name="hour">
                  <option value="" selected="selected">Hour</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div class="col-sm-4 form-element">
                <label for="min" class="sr-only">Min</label>
                <input type="text" name="min" id="min" placeholder="Min" />
              </div>
              <div class="col-sm-4 form-element">
                <label for="am_pm" class="sr-only">AM/PM</label>
                <select id="am_pm" name="am_pm">
                  <option value="AM" selected>AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
              <div class="col-xs-12 form-element">
                <label for="message" class="sr-only">Special Requirement</label>
                <textarea
                  rows="3"
                  id="message"
                  name="message"
                  placeholder="Special Requirement"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="col-xs-12 text-center">
            <button name="send" class="button button-upper" type="submit">
              Book A Table
            </button>
          </div>
        </div>
        <!-- /.row -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "Reservation"
}
</script>