/*  ---------------------------------------------------
    Author: Alliance International Exim
    Author URI: https://www.allianceinternationalexim.com/
    Version: 1.0
    Created: Starlord
---------------------------------------------------------  */

'use strict';

(function ($) {

    $(document).ready(function() {

        //initializes the plugin with "light" -theme
        $('body').overlayScrollbars({ className : "os-theme-thin-dark" });

        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");

        });
        // Check for click events on the navbar burger icon
        $(".has-dropdown").click(function() {
            $(".has-dropdown").toggleClass("ishidden");
    // $(".tab").addClass("active"); // instead of this do the below
            // $(this).removeClass("active");
        });

        $('#Hero').waypoint(function() {
            $('.title').addClass('animate__fadeInDown');
            $('.subtitle').addClass('animate__backInUp');
        }, { offset: '100' });

        $('#AboutUs').waypoint(function() {
            $('.about-title').addClass('animate__fadeInDown');
            $('.subtitle').addClass('animate__bounce');
        }, { offset: '100' });
        $('#Mango').waypoint(function() {
            $('.image').css({
                animation: flipInX,
            });
        }, { offset: '100' });

    });

    $(document).on("click", function(event){
        var $trigger = $(".navbar");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            // $(".navbar-menu").slideUp("fast");
            $(".navbar-burger").removeClass("is-active");
            $(".navbar-menu").removeClass('is-active');
        }
    });


  })(jQuery);