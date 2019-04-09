/* global language, ajaxurl */
 
(function($) {
 
	var App = Object.create(AppAurelie);
	App.init({ 
		wW : $(window).width(),
		wH : $(window).height(),
		is_mobile : false,		
		is_landscape : false,
		small_screen : false,
		big_screen : false,
		widthMin_desktop : 768 - 13,
		callbacks : new Array(),
		option_viewport : false,
		namespace : 'default',
	});

	window.App = App;

	$(document).ready(function(){
		App.ready(); // don't touch : ready app.js
		CURRENT_SITE.ready();	
	}); 

	$(window).load(function(){
	//$(window).on('load', function(){
		App.load(); // don't touch : load app.js
		CURRENT_SITE.load();		
	});
	
	Wwidth = $(window).width();

	$(window).resize(function () {
 
		if ($(this).width() != Wwidth && !App.is_mobile) {
			//console.log("change really the largeur window" + $(this).width());
			App.resize(); // don't touch : resize app.js
			CURRENT_SITE.resize();		
			if (App.small_screen) {				
			}
		}
	});

	$(document ).on('scroll', function() {
		CURRENT_SITE.scroll();
	});

	$(window).on( "orientationchange", function () {		
		CURRENT_SITE.changeOrientation();
	});

	

	App.on_become_small_screen
	(
		function(){
			CURRENT_SITE.becomeSmall();
		}
	);
		
	App.on_become_big_screen
	(
		function(){
			CURRENT_SITE.becomeBig();
		}
	);

	/// Partie modifiable ///
	//var query = Modernizr.mq('(min-width: 992px)');
    var heightHeader;
    var mainContent = $(".mainContent");
    var $burger = $('.BtnMenuMobile');
    var $menuMobile = $('.menu-mobile .menu-main-container');
    var valueScroll = 200;
    var scrolled = false;
    var prevScrollpos = window.pageYOffset;


	var CURRENT_SITE = window.CURRENT_SITE = {
		ready: function () { 			
			console.log("ready --- smallscreen: " + App.small_screen + " // bigscreen: "+ App.big_screen);									
		},

		load: function () { 
			console.log("page loaded");							
		
			if($(window).scrollTop() > valueScroll && scrolled == false){
		    	scrolled = true;
		    } else if($(window).scrollTop() == 0) {
		     	scrolled = false;
		    }		    				

			if(App.small_screen) {		
				fct_smallScreen(heightHeader);	
			}
						
			if (App.big_screen) {
				fct_bigScreen();
			}
		},

		resize : function () {
			console.log("resize");
			windowWidth = window.screen.availWidth;
		  	windowHeight = window.screen.availHeight;
		  	maxi = Math.max(windowWidth, windowHeight);
					
			if (App.small_screen || maxi < 768) {
				var widthWindow = $(window).width();
			}
		},

		scroll : function () {
			
			console.log("scroll");			
			if($(window).scrollTop() > valueScroll && scrolled == false){		    
		    	scrolled = true;
		    } else if($(window).scrollTop() == 0) {		    	
		     	scrolled = false;
		    }		    

		},
		
		changeOrientation : function () {
			Wwidth = $(window).width();
			windowWidth = window.screen.availWidth;
		 	windowHeight = window.screen.availHeight;
		  	maxi = Math.max(windowWidth, windowHeight);

		  //console.log(windowWidth, windowHeight, maxi);
		  if ( maxi < 768) {	
				if ($('body').hasClass('is_landscape')) {
					
					CURRENT_SITE.becomeSmall();
					
					$('html').removeClass('changeOrientation');					
				}
				
				else {										
					$('html').addClass('changeOrientation');
				}
			}
			
		},

		becomeSmall: function () {
			console.log("on become small screen");
			fct_smallScreen();
			
		},

		becomeBig: function () {
			console.log("on become big screen");	
			fct_bigScreen();
		}

	}

	/******** functions *********/
	
	var fct_smallScreen = function() {
		console.log("small screen");
	};

	var fct_bigScreen = function() {
		console.log("big screen");		
	};

	/*************************************/
	// $(document).ready(function(){
	// //$(document).on('ready', function(){ 
	// 	init();
	// });
		
})(jQuery);