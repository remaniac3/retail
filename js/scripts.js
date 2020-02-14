$(document).ready(function(){

	// Scroll down to make navbar background appear.
    $(window).scroll(function(){

	    if($(window).scrollTop()>300)
	    $(".navbarAppear").css({"background-color" : "rgba(247, 251, 252, 1)"});

	    else
	    $(".navbarAppear").css({"background-color" : "rgba(247, 251, 252, 0)"});

	    });

    // Fade out white div covering hero.
    $(".whiteBG").fadeOut(1500);

});



