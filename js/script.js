(function($)
{
    $(document).ready(function()
    {   
        $("div.intro-page").css("height",$(window).height());
        $("div.chapter-one-page").css("height",$(window).height());
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
	$('ul.clouds').parallax();
	
	var scrollMagicController = new ScrollMagic.Controller();

    var intro = new ScrollMagic.Scene({
        triggerElement: 'div.intro-page'
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

    var chapterOne = new ScrollMagic.Scene({
        triggerElement: 'div.chapter-one-page'
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
	$('div.menu-bar ul.menu a').on('click',function(e)
	{
		e.preventDefault();
		var target = $(this).data('target');
		scrollTo(target);
	});
}