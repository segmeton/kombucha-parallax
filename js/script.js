(function($)
{
    $(document).ready(function()
    {   
    	var windowHeight = $(window).height();
        $("div.intro-page").css("height", windowHeight);
        $("div.page").css("min-height",windowHeight);
        var padding = $('div.menu-bar').height();
        $('div.page').css('padding-top', padding);
        $('div.footer').css('padding-top', padding+15);
		parallax();
		marginPage('loading');
		marginPage('intro');
		arrowDown();
		menuRedirect();
		owlCarousel();
    });

    $( window ).load(function() {
	  setTimeout(function()
		{
			$('html').removeClass('disable-scroll');
			$('body').removeClass('disable-scroll');
			var height = $(window).height();
			$('div.loading-page').css('top', -height+'px');
			// $('div.loading-page').addClass('hide');
		},5000);
	});

})(jQuery);

function marginPage(page)
{
	$page = $('div.'+page+'-page');
	$content = $('div.'+page+'-page div.'+page+'-page-content');
	var height = $page.height();
	var contentHeight = $content.height();

	var margin = ( height - contentHeight ) / 2;

	$page.css('padding-top', margin+'px');
	$page.css('padding-bottom', margin+'px');
}

function arrowDown()
{
	$('div.arrow-down a.arrow-down-button').on('click',function(e)
	{
		e.preventDefault();
		var target = $(this).data('target');
		scrollTo(target);
	});
}

function parallax()
{
    // parallax.js
	$('ul.clouds').parallax();
	
    // controller
	var scrollMagicController = new ScrollMagic.Controller();

    // menubar 
	var menu = new ScrollMagic.Scene({
        offset: 15,
    })
    .setTween("div.menu-bar", 1, {opacity: 1})
    .addTo(scrollMagicController);

    // intro page
    var intro = new ScrollMagic.Scene({
        triggerElement: 'div.intro-page',
        duration: "100%"
    })
    .on("enter", function (event) {
    	emptyTitle();
	})
    .addTo(scrollMagicController);

    // chapter one
    var chapterOneHeight = $('div.chapter-one-page').height();

    var chapterOne = new ScrollMagic.Scene({
        triggerElement: 'div.chapter-one-page',
        duration: chapterOneHeight,
    })
    .on("enter", function (event) {
        var title = $('div.chapter-one-page').data('title');
        changeSectionTitle(title);
    })
    .addTo(scrollMagicController);

    // chapter two
    var chapterTwoHeight = $('div.chapter-two-page').height();

    var chapterTwo = new ScrollMagic.Scene({
        triggerElement: 'div.chapter-two-page',
        duration: chapterTwoHeight,
    })
    .on("enter", function (event) {
        var title = $('div.chapter-two-page').data('title');
        changeSectionTitle(title);
    })
    .addTo(scrollMagicController);

    // chapter three
    var chapterThreeHeight = $('div.chapter-three-page').height();

    var chapterThree = new ScrollMagic.Scene({
        triggerElement: 'div.chapter-three-page',
        duration: chapterThreeHeight,
    })
    .on("enter", function (event) {
        var title = $('div.chapter-three-page').data('title');
        changeSectionTitle(title);
    })
    .addTo(scrollMagicController);

    // chapter four
    var chapterFourHeight = $('div.chapter-four-page').height();

    var chapterFour = new ScrollMagic.Scene({
        triggerElement: 'div.chapter-four-page',
        duration: chapterFourHeight,
    })
    .on("enter", function (event) {
        var title = $('div.chapter-four-page').data('title');
        changeSectionTitle(title);
    })
    .addTo(scrollMagicController);

    // chapter five
    var chapterFiveHeight = $('div.chapter-five-page').height();

    var chapterFive = new ScrollMagic.Scene({
        triggerElement: 'div.chapter-five-page',
        duration: chapterFiveHeight,
    })
    .on("enter", function (event) {
        var title = $('div.chapter-five-page').data('title');
        changeSectionTitle(title);
    })
    .addTo(scrollMagicController);

    // chapter six
    var chapterSixHeight = $('div.chapter-six-page').height();

	var chapterSix = new ScrollMagic.Scene({
        triggerElement: 'div.chapter-six-page',
        duration: chapterSixHeight,
    })
    .on("enter", function (event) {
    	var title = $('div.chapter-six-page').data('title');
    	changeSectionTitle(title);
	})
    .addTo(scrollMagicController);

    var eatDrink = new ScrollMagic.Scene({
    	triggerElement: "div#sport.healthy-way",
    	duration: "10%",
    	triggerHook: 0
    })
    .setTween("div.healthy-way-img img#diet-img", 1, {left: 30, opacity: 1})
    .addTo(scrollMagicController);

        var drink = new ScrollMagic.Scene({
        triggerElement: "div#diet.healthy-way",
        duration: "30%",
        triggerHook: 0
    })
    .setTween("div.yellow-capsule-img img", 1, {top: -155, opacity: 1})
    .addTo(scrollMagicController);

    var yellowCapsule = new ScrollMagic.Scene({
        triggerElement: "div#diet.healthy-way",
        duration: "30%",
        triggerHook: 0
    })
    .setTween("div.yellow-capsule-content", 1, {opacity: 1})
    .addTo(scrollMagicController);

    var arrowDown = new ScrollMagic.Scene({
        triggerElement: "div#diet.healthy-way",
        duration: "30%",
        triggerHook: 0
    })
    .setTween("div.be-healthy img", 0.8, {opacity: 1})
    .addTo(scrollMagicController);

    var beHealthy = new ScrollMagic.Scene({
        triggerElement: "div#diet.healthy-way",
        duration: "30%",
        triggerHook: 0
    })
    .setTween("div.be-healthy h1", 0.6, {opacity: 1})
    .addTo(scrollMagicController);
    
    // footer
    var footer = new ScrollMagic.Scene({
        triggerElement: 'footer',
        duration: "50%"
    })
    .on("enter", function (event) {
    	emptyTitle();
	})
    .addTo(scrollMagicController);


	// add indicator     .addIndicators()

	// fix trigger
	
	
    
    var sport = new ScrollMagic.Scene({
    	triggerElement: "div.chapter-five-page",
    	duration: "30%",
    	triggerHook: 0
    })
    .setTween("div.healthy-way-img img#sport-img", 1, {top: 0, opacity: 1})
    .addIndicators("sport-img")
    .addTo(scrollMagicController);

    var rest = new ScrollMagic.Scene({
    	triggerElement: "div.chapter-six-page",
    	duration: "30%",
    	triggerHook: 0
    })
    .setTween("div.healthy-way-img img#rest-img", 1, {left: 200, opacity: 1})
    // .addIndicators("rest-img")
    .addTo(scrollMagicController);




    // fix animation

    // var menu = new ScrollMagic.Scene({
    //     triggerElement: 'div.menu-bar',
    //     triggerHook: 0,
    //     pushFollowers: false,
    //     reverse: true
    // })
    // .setPin("div.menu-bar")
    // .setVelocity("div.menu-bar", {opacity: 1}, {duration: 400})
    // .addTo(scrollMagicController);
    
			
	var curve = {
		curviness: 1.25,
		values: [{x: -600, y: 250}]
	};
	var curveArrow = {
		curviness: 1.25,
		values: [{x: 0, y: 0}]
	};

	var kombuchaImage = TweenMax
	.to("div.kombucha-img img.photo", 1,{css:{bezier:curve}, ease: Circ.easeInOut});
	// .to("div.kombucha-img img.arrow", 1,{css:{bezier:curveArrow}, ease: Circ.easeInOut});

	

	// var arrowImage = TweenMax.to
	// (
	// 	"div.kombucha-img img.arrow", 
	// 	1,
	// 	{
	// 		css:{bezier:curveArrow},
	// 		ease: Circ.easeInOut
	// 	}
	// );


    var chapterOne = new ScrollMagic.Scene({
        triggerElement: 'div.chapter-one-page',
        reverse: true,
        duration: "50%",
        triggerHook: 0
    })
    .on("enter", function (event) {
    	var title = $('div.chapter-one-page').data('title');
    	changeSectionTitle(title);
	})
	.on("leave", function (event) {
    	var title = $('div.chapter-one-page').data('title');
    	changeSectionTitle(title);
	})
	.setTween(kombuchaImage)
    .addTo(scrollMagicController);

    
    
}

function scrollTo(target)
{
	var position = $('div.'+target).offset().top;
	TweenMax.to($('body'), 2, 
	{
		scrollTo: 
		{
            y: position, 
            autoKill: true
        }, 
        ease:Power2.easeOut
    });
}

function menuRedirect()
{
	$('div.menu-bar ul.menu ul.dropdown-menu a').on('click',function(e)
	{
		e.preventDefault();
		var target = $(this).data('target');
		$('div.menu-bar ul.menu li').removeClass('active');
		$(this).parent().addClass('active');
		scrollTo(target);
	});
}

function changeSectionTitle(trigger)
{
	$('div.menu-bar div.section-title span').html(trigger);
}

function emptyTitle()
{
	$('div.menu-bar div.section-title span').html('');
}

function owlCarousel()
{
	$owl = $("div.kombucha-procedur div.slides");

	$owl.owlCarousel({
		singleItem:true,
		pagination: false
  	});

  	var owlData = $owl.data('owlCarousel');

  	$("div.navigation a#left.navigation-arrow").on("click", function(e)
  	{
  		e.preventDefault();
  		owlData.prev();
  	});

  	$("div.navigation a#right.navigation-arrow").on("click", function(e)
  	{
  		e.preventDefault();
  		owlData.next();
  	});
}