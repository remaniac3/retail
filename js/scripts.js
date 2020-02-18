let viewportWidth = $(window).width();

// Upon page load.
$(document).ready(function(){

	// Scroll down to make navbar background appear.
    $(window).scroll(function(){

    	function navbarTransparent() { $(".navbarAppear").css({"background-color" : "rgba(247, 251, 252, 0)"}); }
    	function navbarSolid() { $(".navbarAppear").css({"background-color" : "rgba(247, 251, 252, 1)"}); }
    	
    	// Desktop viewport.
    	if (viewportWidth > 768) {

		    if($(window).scrollTop()>300)
		    navbarSolid();

		    else
		    navbarTransparent();

		// Mobile viewport.
		} else {

			// if($(window).scrollTop()>600)
		 //    navbarSolid();

		 //    else
		    navbarSolid();
		}

	    });

    // Fade out white div covering hero.
    $(".whiteBG").fadeOut(1500);

});



