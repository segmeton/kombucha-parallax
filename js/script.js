(function($)
{
    $(document).ready(function()
    {   
    	var windowHeight = $(window).height();
        $("div.intro-page").css("height", windowHeight);
        $("div.chapter-one-page").css("min-height",windowHeight);
        var padding = $('div.menu-bar').height();
        $('div.page').css('padding-top', padding);
        $('div.footer').css('padding-top', padding+15);
		parallax();
		marginPage('loading');
		marginPage('intro');
		arrowDown();
		menuRedirect();
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
	$('ul.clouds').parallax
	({
		// scalarX: 20,
  // 		scalarY: 60
	});
	
	var scrollMagicController = new ScrollMagic.Controller();

    var intro = new ScrollMagic.Scene({
        triggerElement: 'div.intro-page',
        reverse: true
    })
    .on("enter", function (event) {
    	emptyTitle();
	})
	.on("leave", function (event) {
    	emptyTitle();
	})
    .addTo(scrollMagicController);
    

    var menu = new ScrollMagic.Scene({
        triggerElement: 'div.menu-bar',
        triggerHook: 0,
        pushFollowers: false,
        reverse: true
    })
    .setPin("div.menu-bar")
    .addTo(scrollMagicController);
			
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
    

    var footer = new ScrollMagic.Scene({
        triggerElement: 'footer',
        reverse: true
    })
    .on("enter", function (event) {
    	emptyTitle();
	})
	.on("leave", function (event) {
    	emptyTitle();
	})
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
		changeSectionTitle($(this).html());
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