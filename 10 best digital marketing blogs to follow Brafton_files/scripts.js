/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function


/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

  /*
   * Let's fire off the gravatar function
   * You can remove this if you don't need it
  */
  loadGravatars();

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.fixed').addClass('shrink');
    } else {
      $('.fixed').removeClass('shrink');
    }
  });

    // Scrolly nav for support page

    $(".jumper").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 500);

    });

    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // Toggle Contact form
    function closePopUp(){
      $('.contact-popup').toggle('fast');
      $('.contact-popup .close').unbind();
    }
    $("li.toggla a").click(function() {
        // var iframe = $('<iframe src="https://go.pardot.com/l/305241/2017-01-23/kg" width="100%" height="520" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>');
        // $('.contact-popup').append(iframe).toggle('fast');
        $('.contact-popup').toggle('fast');

        $('.contact-popup .close').on('click', function(){
          closePopUp();
        });
    });

    // Main Navigation toggler for mobile

    $(".toggle").click(function() {
        $('nav').toggle('fast');
        var clicks = $(this).data('clicks');
        if (clicks) {
          $('.fixed').removeClass('mobile-nav-bg');
        } else {
          $('.fixed').addClass('mobile-nav-bg');
        }
        $(this).data("clicks", !clicks);
        // Submenu toggler for mobile
        $("<span class='submenu-toggler'><i class='fa fa-chevron-down' aria-hidden='true'></i>").insertBefore("li.toggle-submenu ul.sub-menu");
        $(".submenu-toggler").click(function() {
          $(this).toggleClass('clicked');
          $(this).parent().toggleClass('clicked');
          //$('ul.sub-menu').toggle('fast');
        });
        // Hide Contact Us popup form on mobile and link to static page
        $('.fixed .contact-popup').remove();
        $('li.toggla a').attr('href', '/contact');
    });

    // Blog tagbar search functionality

    $(".search-icon").click(function() {
        $('#search-10').toggle('fast');
    });
    // Add Search for... to search bar
    $("#search-10 form input[type='search']").attr("placeholder", "Search for...");

    // Toggle tagbar menu on mobile
    $(".tagbar-toggle").click(function() {
        $('#nav_menu-9').toggle('fast');
        $('#nav_menu-10').toggle('fast');
    });

    // Scroll slowly for elements with the 'scroll' class
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    // Autoplay video when play button is clicked
    $('.play i').click(function() {
      $('#inline').fadeIn();
      $('#header-video')[0].play();
    });

    // Close video
    $('.play #inline .video-container .inner .close').click(function() {
      $('#inline').fadeOut();
      $('#header-video')[0].pause(); 
    });

    // Display Ask A Marketer popup form if window is > 1030px
    if (viewport.width >= 1030) {
      $('a.popup-form').click(function() {
        $('.ask-a-marketer-form').show('fast');
      });
      $('.ask-a-marketer-form .close').click(function() {
        $('.ask-a-marketer-form').hide('fast');
      });
    } else {
      // Direct to /contact on mobile
      $('.ask-a-marketer-form').hide();
      $('a.popup-form').attr('href', '/contact');
    }

    /* Track event on contact form submissions */
    (function(window) {
      addContactEvent(window, 'message', function(message) {
        if (message.data === 'contactSubmit' && message.origin === 'https://go.pardot.com') {
          try{
          __adroll.record_user({"adroll_segments": "2e6c6010"})
          } catch(err) {}
          ga('send', 'event', 'Contact Us', 'submit', 'Submission');
          $('.contact-popup').delay(2000).fadeOut('slow');
        }
      });
      function addContactEvent(el, evt, fn) {
        if (el.addEventListener) {
          el.addEventListener(evt, fn);
        } else if (el.attachEvent) {
          el.attachEvent('on' + evt, function(evt) {
            fn.call(el, evt);
          });
        } else if (typeof el['on' + evt] === 'undefined' || el['on' + evt] === null) {
          el['on' + evt] = function(evt) {
            fn.call(el, evt);
          };
        }
      }
    })(window);

});

/* end of as page load scripts */