(function($)
{
    $(document).ready(function()
    {   
        $("div.page").css("height",$(window).height());
		parallax();
		marginPage('loading');
		marginPage('intro');

    });

    $( window ).load(function() {
	  setTimeout(function()
		{
			$('html').removeClass('disable-scroll');
			$('body').removeClass('disable-scroll');
			$('div.loading-page').addClass('hide');
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

	$content.css('margin-top', margin+'px');
}

function arrowDown()
{
	$('div.arrow-down a.arrow-down-button').on('click',function(e)
	{
		e.preventDefault();
	});
}

function parallax()
{
	var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: 'div.intro-page'
    })
    .addTo(controller);
        
}