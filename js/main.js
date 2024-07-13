var menu = ['Home' , 'About' , ]


  $(window).on("load", function () {

    "use strict";

    //Clear URL On Page Refresh
    var loc = window.location.href,
        index = loc.indexOf('#');

    if (index > 0) {
        window.location = loc.substring(0, index);
    }

    /* ===================================
        Page Piling
    ====================================== */
    if($(window).width() < 1280) {
        $('.pagedata').removeAttr('id');
        $('html, body').css('overflow-y', 'scroll');

    }
    else{
        $('#pagepiling').pagepiling({
            direction: 'vertical',
            sectionsColor: ['#171717', '#171717', '#171717', '#171717', '#171717'],
            anchors: ['home', 'about', 'timeline', 'portfolio' ,'contact'],
            scrollingSpeed: 500,
            easing: 'linear',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'bulletsColor': '#535353',
                'position': 'right',
                'tooltips': ['Home', 'About', 'Carrer Timeline', 'Portfolio', 'Contact'],
            },
            //events
            onLeave: function (index, nextIndex, direction) {
                //reaching our First section? The one with our normal site?

                $('.navbar-top-default').fadeOut();
                $('.slider-footer').fadeOut();
                $('.slider-copyright').fadeOut();

                if (nextIndex == 1) {
                    $('#pp-nav').fadeOut();
                }
                //leaving our last section? The one with our normal site?
                if (index == 1) {
                    $('#pp-nav').fadeIn();
                }

                if(nextIndex == 1 || nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex == 5 || nextIndex == 6 || nextIndex == 7 || nextIndex == 8 || nextIndex == 9 || nextIndex == 10){
                    setTimeout(function(){
                        $('.navbar-top-default').fadeIn();
                        $('.slider-footer').fadeIn();
                        $('.slider-copyright').fadeIn();
                    }, 600);

                }
            },
            afterLoad: function (anchorLink, index) {
            },
            afterRender: function () {
                $('#pp-nav').hide();
            },
        });
    }

    /* ===================================
               Loading Timeout
        ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader-bg').fadeToggle();

    }, 1500);

    // $('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
    $('.navbar-collapse .navbar-nav .nav-link:nth-child(2)').removeClass('active');
});

jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });

    $(".slider-btn").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });

    /* ===================================
        Side Menu
    ====================================== */

    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    /*===================================
        Animated Progress Bar
    ====================================== */

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 2000)
        });
    });

    /*===================================
        Owl Carousel
    ====================================== */

    /* Portfolio Classic */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        nav:false,
        autoplay: false,
        smartSpeed:500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
 
    // Custom Portfolio OWL
    $('.ini-customNextBtn').click(function () {
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.ini-customPrevBtn').click(function () {
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });


    $('.dateNow').text(new Date().getFullYear())

});















const btn = document.getElementById('sendMail');

document.getElementById('formMail')
.addEventListener('submit', function(event) {
    event.preventDefault();
    let from_name  = document.querySelector("#from_name");
    let message  = document.querySelector("#message");
    let email_from  = document.querySelector("#email_from");
    if (from_name.value != '' && message.value != '' && email_from.value != '' ) {
        btn.value = 'Sending...';
            emailjs.send("hamdey77","template_2i6altw",{
            from_name:document.querySelector('#from_name').value,
            to_name: "Muhammed Hamdi",
            message: `${document.querySelector('#email_from').value}
                ${document.querySelector('#message').value}`,
            from_email: document.querySelector('#email_from').value,
            to_email: document.querySelector('#email_to').value,
        }).then(res=>{
            if (res.status == 200 && res.text == "OK") {
                btn.value = 'Send Email';
                toastr.success('Message is Sent Thank You','Success')
            }
        },
        (error)=>{
            toastr.error('Error', error)
        }
        )
    }else{
        toastr.error('Please Type All Field','Error',{
            "timeOut": "5000",
        })
    }
});