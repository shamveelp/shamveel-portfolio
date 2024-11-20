 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);



// Form  Code 

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent traditional form submission

    // Add a loading state
    const submitButton = this.querySelector('input[type="submit"]');
    const originalButtonText = submitButton.value;
    submitButton.value = "Sending...";
    submitButton.disabled = true;

    // Create a message container if not already present
    let messageContainer = this.querySelector(".form-status-message");
    if (!messageContainer) {
        messageContainer = document.createElement("div");
        messageContainer.className = "form-status-message";
        messageContainer.style.marginTop = "10px";
        messageContainer.style.fontWeight = "bold";
        this.appendChild(messageContainer);
    }

    // Collect user input values
    const nameInput = this.querySelector('input[placeholder="Your Name"]');
    const emailInput = this.querySelector('input[placeholder="Your Email"]');
    const subjectInput = this.querySelector('input[placeholder="Subject"]');
    const messageInput = this.querySelector('textarea[placeholder="Message"]');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Validation logic
    // Check if name is empty or starts with space
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/; // Only alphabetic characters with single spaces between words
    if (!name || name.startsWith(' ') || !nameRegex.test(name)) {
        messageContainer.textContent = "Please enter a valid name (no leading spaces, only alphabetic characters, and single spaces between names).";
        messageContainer.style.color = "red";
        submitButton.value = originalButtonText;
        submitButton.disabled = false;
        return;
    }

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        messageContainer.textContent = "Please enter a valid email address.";
        messageContainer.style.color = "red";
        submitButton.value = originalButtonText;
        submitButton.disabled = false;
        return;
    }

    // Subject validation
    if (!subject || /^\s+$/.test(subject)) {
        messageContainer.textContent = "Subject cannot be empty or spaces only.";
        messageContainer.style.color = "red";
        submitButton.value = originalButtonText;
        submitButton.disabled = false;
        return;
    }

    // Message validation
    if (!message || /^\s+$/.test(message)) {
        messageContainer.textContent = "Message cannot be empty or spaces only.";
        messageContainer.style.color = "red";
        submitButton.value = originalButtonText;
        submitButton.disabled = false;
        return;
    }

    // Gather form data
    const formData = new FormData();
    formData.append("access_key", "587b49ca-f0f4-4cf8-9128-530fcb628868");
    formData.append("email", "bscphysicsdegree@gmail.com");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    // Send data using Fetch API
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { Accept: "application/json" },
    })
        .then((response) => {
            if (response.ok) {
                messageContainer.textContent = "Your message has been sent successfully!";
                messageContainer.style.color = "green";
                this.reset(); // Clear the form fields
            } else {
                messageContainer.textContent = "There was an error sending your message. Please try again.";
                messageContainer.style.color = "red";
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            messageContainer.textContent = "An unexpected error occurred. Please try again later.";
            messageContainer.style.color = "red";
        })
        .finally(() => {
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
        });
});





