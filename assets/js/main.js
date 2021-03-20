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
      });


  })(jQuery);