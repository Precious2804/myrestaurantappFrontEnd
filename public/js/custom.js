/**
 *  =================================================================================================
 *
 *  Author:      EvenThemes
 *  Template:    Restora - A Responsive Multipurpose Restaurant Or Cafe Theme
 *  Version:     1.2
 *
 *  =================================================================================================
 *
 *  
 *   TABLE OF CONTENTS:
 *  ===================
 *
 *     |-->  [ 1 ] - Functions
 *     |     |-->  [ 1.1 ] - Scroll to
 *     |     |-->  [ 1.2 ] - Back to Top
 *     |     |-->  [ 1.3 ] - Add Class "small" in Small Devices
 *     |     |-->  [ 1.4 ] - Center Element Vertically
 *     |     |-->  [ 1.5 ] - Adjust Banner Structure's Height
 *     |     |-->  [ 1.6 ] - Stars Rate
 *     |     |-->  [ 1.7 ] - Custmize Email Link
 *     |     |-->  [ 1.8 ] - Custmize Phone Link
 *     |     |-->  [ 1.9 ] - Data Attributes Background
 *     |     |-->  [ 1.10 ] - Validate Email
 *     |     |-->  [ 1.11 ] - Check if a Value is a Number
 *     |     |-->  [ 1.12 ] - Notification Banner
 *     |     |-->  [ 1.13 ] - Mouse icon animation
 *     |
 *     |-->  [ 2 ] - General Codes
 *     |     |-->  [ 2.1 ] - On Document Ready
 *     |     |-->  [ 2.2] - On Window Resize
 *     |     |-->  [ 2.3] - Preloader
 *     |     |-->  [ 2.4] - Google Map
 *     |
 *     |-->  [ 3 ] - Forms
 *     |     |-->  [ 3.1 ] - Reservation Form
 *     |     |-->  [ 3.2 ] - Mailchimp Subscribe Form
 *     |
 *     |-->  [ 4 ] - Colors Sitcher
 *
**/



/**
 *  -------------------------------------------------------------------------------
 *  [ 1 ] - Functions
 *  -------------------------------------------------------------------------------
 *
 *  This part contains all js functions.
 *  
 *  ------
 *  
 *  General Codes is divided to the following sections:
 *
 *     |
 *     |-->  [ 1.1 ] - Scroll to
 *     |-->  [ 1.2 ] - Back to Top
 *     |-->  [ 1.3 ] - Add Class "small" in Small Devices
 *     |-->  [ 1.4 ] - Center Element Vertically
 *     |-->  [ 1.5 ] - Adjust Banner Structure's Height
 *     |-->  [ 1.6 ] - Stars Rate
 *     |-->  [ 1.7 ] - Custmize Email Link
 *     |-->  [ 1.8 ] - Custmize Phone Link
 *     |-->  [ 1.9 ] - Data Attributes Background
 *     |-->  [ 1.10 ] - Validate Email
 *     |-->  [ 1.11 ] - Check if a Value is a Number
 *     |-->  [ 1.12 ] - Notification Banner
 *     |-->  [ 1.13 ] - Mouse icon animation
 *
 */




/* 1.1 - Scroll to
---------------------------------------------------------------------- */
function scrollToPoint() {
//jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.scroll-to').on('click', function(e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        e.preventDefault();
    });   
}



/* 1.2 - Back to Top
---------------------------------------------------------------------- */
function backToTop(selector) {
    $(selector).click(function(e){
        e.preventDefault();
        $('html body').stop().animate({
            scrollTop: 0
        }, 3000, 'easeInOutExpo');
    });
}


/* 1.3 - Add Class "small" in Small Devices
---------------------------------------------------------------------- */
function smaller(selector, width, classname) {
    var testmonialWidth = $(selector).outerWidth();
    if (testmonialWidth < width) {
        $(selector).addClass(classname);
    }
    else {
        $(selector).removeClass(classname);
    }
}


/* 1.4 - Center Element Vertically
---------------------------------------------------------------------- */
function windowCenter(selector) {
    $(selector).css({
        top: ($(window).height() - $(selector).height())/2,
        opacity: 1
    });
}


/* 1.5 - Adjust Banner Structure's Height
---------------------------------------------------------------------- */
function adjust_banner_structure() {
    var banner_structure = $('.banner-structure'),
        header = $(".header"),
        bannerContainer = $(".banner-structure .container");

    if ((bannerContainer.outerHeight() + header.outerHeight() + 160) < $(window).height()) {
        banner_structure.css({
            height: $(window).height() - header.outerHeight() + 'px'
        });

        banner_structure.css({
            paddingTop: ($(window).height() - header.outerHeight() - bannerContainer.outerHeight())/2 + 'px',
            paddingBottom: ($(window).height() - header.outerHeight() - bannerContainer.outerHeight())/2 + 'px'
        });
    }
    else {
        banner_structure.css({
            height: 'auto',
            paddingTop: '50px',
            paddingBottom: '110px'
        });
    }
}

/* 1.6 - Stars Rate
---------------------------------------------------------------------- */
function rate() {
    $('.rate').each(function(){
        var yellowStar = Math.round($(this).data('rate'));
        for (var i = 0; i < yellowStar && i < 5; i++) {
            $(this).append('<span class="fa fa-star star-yellow"></span>');
        }
        if ( yellowStar < 5 ) {
            var grayStar = Math.floor(5 - yellowStar);
            for (var i = 0; i < grayStar; i++) {
                $(this).append('<span class="fa fa-star star-gray"></span>');
            }
        }
    });
}

/* 1.7 - Custmize Email Link
---------------------------------------------------------------------- */
function email_link() {
    $('.email-link').each(function(){
        var email = $(this).text();
        $(this).attr('href', 'mailto:'+email);
    });
}

/* 1.8 - Custmize Phone Link
---------------------------------------------------------------------- */
function phone_link() {
    $('.phone-link').each(function(){
        var phone = $(this).text();
        $(this).attr('href', 'tel:'+phone);
    });
}


/* 1.9 - Data Attributes Background
---------------------------------------------------------------------- */
function backgroundImage() {
    $("[data-background-image]").each(function() {
        var attr = $(this).attr('data-background-image');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url('+attr+')');
        }
    });
}

/* 1.10 - Validate Email
---------------------------------------------------------------------- */
function validateEmail(email) {
    var patt = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return patt.test(email);
}


/* 1.11 - Check if a Value is a Number
---------------------------------------------------------------------- */
function isDigit(arg) {
    var patt = /^[^A-Za-z]+$/;
    return patt.test(arg);
}

/* 1.12 - Notification Banner
---------------------------------------------------------------------- */
function notification(valid, msg){
    var msgClasses, message;
    if(valid){
        msgClasses = "valid";
                                
    } else {
        msgClasses = "error";
    }
    $("#notification").find(".notif-inner").html(msg);
    $("#notification").fadeIn(1000).removeClass().addClass(msgClasses);
    setTimeout(function(){
        $("#notification").fadeOut("slow");
    }, 10000);
}

/* 1.13 - Mouse icon animation
---------------------------------------------------------------------- */
function mouse_animate() {
    $('.scroll').animate({
        bottom: '-100px',
        opacity: 0
    }, 1000, function(){
        $(this).animate({
            bottom: '0',
            opacity: 1
        }, 1000, function(){
            $(this).delay(3000);
            mouse_animate();
        });
    });
}

/**
 *  -------------------------------------------------------------------------------
 *  [ 2 ] - General Codes
 *  -------------------------------------------------------------------------------
 *
 *  This part contains all js codes that applied generally.
 *  
 *  ------
 *  
 *  General Codes is divided to the following sections:
 *
 *     |
 *     |-->  [ 2.1 ] - On Document Ready
 *     |-->  [ 2.2 ] - On Window Resize
 *     |-->  [ 2.3 ] - Preloader 
 *     |-->  [ 2.4] - Google Map 
 *
 */




/* 2.1 - On Document Ready
---------------------------------------------------------------------- */
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    backgroundImage();
    scrollToPoint();
    adjust_banner_structure();
    backToTop('.scroll-up', 0);
    windowCenter("#theme_builder");
    smaller('.testmonials .single-testmonial', 440, 'small-testmonial');
    rate();
    bookTable();
    email_link();
    phone_link();

    $('#date').datepicker({
        format: 'mm-dd-yyyy'
    });

    /** mouse animate */
    mouse_animate();

    /* Slider for blog section */
    var owl = $("#blog-slider").owlCarousel({
        autoPlay: 10000,
        items : 3,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        itemsTablet : [768,1]
    });
    $(".arrow-box .next").click(function(event){
        event.preventDefault();
        owl.trigger('owl.next');
    });
    $(".arrow-box .prev").click(function(event){
        event.preventDefault();
        owl.trigger('owl.prev');
    });

    /* Use mixItUp Plugin */
    $('.gallery .gallery-wrapper').mixItUp();
    
    $('.gallery .gallery-filter .filter').click(function(e){
        e.preventDefault();
    });

    /* Use counterUp Plugin */
    $('.counter-up h3 > .counter').counterUp({
        delay: 5,
        time: 1500
    });

    $('.popup-gallery').each(function(){
        var href = $(this).parents('.gallery-single').find('img').attr('src');
        $(this).attr('href', href);
    });

    /* MagnificPopup for Images*/
    $('.popup-gallery').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      mainClass: 'mfp-fade',
      removalDelay: 300
    });

    /* MagnificPopup for Videos*/
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });

    /* Placeholder all forms*/
    $('input, textarea').placeholder();

    /* Hide notification banner when click it */
    $('#notification').on("click", function() {
        $(this).fadeOut(500);
    });

    $('[data-social-link]').attr('target', '_blank');

});

/* 2.2 - On Window Resize
---------------------------------------------------------------------- */
$(window).on('resize', function(){
    smaller('.testmonials .single-testmonial', 440, 'small-testmonial');
    windowCenter("#theme_builder");
    adjust_banner_structure();
});


/* 2.3 - Preloader 
-------------------------------------------------------------------*/
$(window).load(function () { 
    $("#loader").fadeOut();
    $("#preloader").delay(350).fadeOut("slow").remove();
});


/* 2.4 - Google Map
-------------------------------------------------------------------*/
function initMap() {
    var latlng = {
        lat: 59.325,
        lng: 18.070
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        draggable: true,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // marker click title
    var contentString = '<div class="map-location">'+
        '<div class="location-img"></div>'+
        '<div class="location-welcome">'+
        '<h4 class="color">Our Restaurant Place</h4>'+
        '<p>Welcome To Our Restaurant</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    // marker image
    var image = {
        url: 'images/marker.png',
        scaledSize: new google.maps.Size(48, 48), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0),
        position: {lat: 59.327, lng: 18.067}
    };

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: image,
        title: 'Our Restaurant'
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    // marker open title
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


/**
 *  -------------------------------------------------------------------------------
 *  [ 3 ] - Forms
 *  -------------------------------------------------------------------------------
 *
 *  This part contains the codes of forms used like Reservation Form and Mailchimp
 *  Subscribe Form
 *
 *  ------
 *
 *  It has the following code:
 *
 *     |
 *     |-->  [ 3.1 ] - Reservation Form
 *     |-->  [ 3.2 ] - Mailchimp Subscribe Form
 *
 */


/* 3.1 - Reservation Form
-------------------------------------------------------------------*/
function bookTable() {

    $("#reservationForm").on("submit", function(event) {
        var validate = true, validateMsg,
            name = $('#name'),
            email = $('#email'),
            phone = $('#phone'),
            guests = $('#guests'),
            date = $('#date'),
            hour = $('#hour'),
            min = $('#min'),
            am_pm = $('#am_pm'),
            message = $('#message');
        if (name.val() == '') {
            validate = false;
            name.focus();
            validateMsg = "Full name is required.";
        }
        else if (name.val().length < 2) {
            validate = false;
            name.focus();
            validateMsg = "Please enter a valid name.";
        }
        else if (email.val() == '') {
            validate = false;
            email.focus();
            validateMsg = "Email address is required.";
        }
        else if (validateEmail(email.val()) == false) {
            validate = false;
            email.focus();
            validateMsg = "A valid email address must be provided.";
        }
        else if (phone.val() == '') {
            validate = false;
            phone.focus();
            validateMsg = "Number phone is required";
        }
        else if (isDigit(phone.val()) == false) {
            validate = false;
            phone.focus();
            validateMsg = "Please enter a valid number phone.";
        }
        else if (guests.val() == '') {
            validate = false;
            guests.focus();
            validateMsg = "Numbers Guests is required.";
        }
        else if (date.val() == '') {
            validate = false;
            date.focus();
            validateMsg = "Date of reservation is required.";
        }
        else if (hour.val() == '') {
            validate = false;
            hour.focus();
            validateMsg = "Time of reservation is required.";
        }
        else if (min.val() == '') {
            validate = false;
            min.focus();
            validateMsg = "Time of reservation is required.";
        }
        else if (am_pm.val() == '') {
            validate = false;
            am_pm.focus();
            validateMsg = "Time of reservation is required.";
        }
        if (validate) {
            submitForm();
        }
        else {
            var notificationMsg = '<h5>Something Went Wrong!</h5>' + '<p>'+validateMsg+'</p>';
            notification(false, notificationMsg);
        }
        event.preventDefault();
    });
}

function submitForm(){
    var msgSuccess = '<h5>Congratulations!</h5>' +
                '<p>Your reservation order has been successfully sent.</p>';
    var msgError = '<h5>Something went wrong</h5>' +
                '<p>Could not connect to server. Please try again later.</p>';
    $.ajax({
        type: "POST",
        url: "php/reservation.php",
        data: $("#reservationForm").serialize(),
        success : function(result){
            console.log(result);
            if (result == "success"){
                $("#reservationForm")[0].reset();
                notification(true, msgSuccess);
            } else {
                notification(false, msgError);
            }
        },
        error: function(){
            notification(false, msgError);
        }
    });
}


function subscribe(formID){
    var validate = true,
        subscribe_email =  $(formID + " .subscribe-email");
    if (subscribe_email.val() == '') {
        validate = false;
        subscribe_email.focus();
        validateMsg = "Email address is required.";
    }
    else if (validateEmail(subscribe_email.val()) == false) {
        validate = false;
        subscribe_email.focus();
        validateMsg = "A valid email address must be provided.";
    }
    if (validate) {
        $.ajax({
            type: "POST",
            url: "php/subscribe.php",
            data: $(formID).serialize(),
            success : function(data){
                if (data === 'success') {
                    var msgSuccess = '<h5>Thank you for subscribing.</h5>'+
                    '<p>Thank you for subscribing to our newsletter. You will receive an email asking you to confirm the subscription.</p>';
                    notification(true, msgSuccess);
                }
                else {
                    var msgError = '<h5>Something went wrong</h5>'+'<p>'+data+'</p>';
                    notification(false, msgError);
                }
            },
            error: function(){
                notification(false, msgError);
            }
        });
        $(formID)[0].reset();
    }
    else {
        var notificationMsg = '<h5>Something went wrong</h5>' + '<p>'+validateMsg+'</p>';
        notification(false, notificationMsg);
    }
}

$("#subscribe-form").on("submit", function(event) {
    subscribe("#subscribe-form");
    event.preventDefault();
});
$("#footer-subscribe-form").on("submit", function(event) {
    subscribe("#footer-subscribe-form");
    event.preventDefault();
});



/**
 *  -------------------------------------------------------------------------------
 *  [ 4 ] - Colors Switcher
 *  -------------------------------------------------------------------------------
 */

/* Change Main Color */
$("#theme_builder .color-options button").click(function(){
    $("link[href*='skin']").attr("href", "css/color/" + $(this).data('color') + ".css");
});

/* Show/hide Switcher Colors */
$('#theme_builder #show-btn').click(function(){
    $('#theme_builder').toggleClass('show');
});

$('#theme_builder .layout input[type="checkbox"]').change(function(){
    if ($(this).is(":checked")) {
        $('body').addClass('boxed');
    }
    else {
        $('body').removeClass('boxed');
    }
});