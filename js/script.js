(function($)
{
    $(document).ready(function()
    {   
    	var windowHeight = $(window).height();
        $("div.loading-page").css("height", windowHeight);
        $("div.intro-page").css("height", windowHeight);
        $("div.page").css("min-height",windowHeight);
        var padding = $('div.menu-bar').height();
        $('div.page').css('padding-top', padding);
        $('div.footer').css('padding-top', padding+15);
        marginPage('loading');
        marginPage('intro');
        arrowDown();
        rrcPhotoDescriptionMargin();
        menuRedirect();
        owlCarousel();
        kombuchaBenefit();
        qa();
    });

    $( window ).load(function() 
    {
        setTimeout(function()
		{
			$('html').removeClass('disable-scroll');
			$('body').removeClass('disable-scroll');
			var height = $(window).height();
			$('div.loading-page').css('top', -height+'px');
		},5000);
	});

})(jQuery);

function marginPage(page)
{
	$page = $('div.'+page+'-page');
	$content = $('div.'+page+'-page div.'+page+'-page-content');
	var height = $page.height();
	var contentHeight = $content.height();

	var padding = ( height - contentHeight ) / 2;

	$page.css('padding-top', padding+'px');
	$page.css('padding-bottom', padding+'px');
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

function rrcPhotoDescriptionMargin()
{
    $rrcPhoto = $("div.rrc-photo img#rrc-map");
    $photoDescription = $("div.rrc div.photo-description");

    var photoHeight = $rrcPhoto.height();
    var descriptionHeight = $photoDescription.height() + 40;

    var margin = ( photoHeight - descriptionHeight ) / 2;

    $photoDescription.css('margin-top', margin+'px');
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

    $('div.menu-bar ul.menu a#modal-toggle').on('click',function(e)
    {
            e.preventDefault();
    });

    showModal();
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
    $owl = $("div.kombucha-procedure div.slides");

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

function kombuchaBenefit()
{
    $('span.benefit a').on("click", function(e)
    {
        e.preventDefault();
        var id = $(this).data("id");
        $("span.benefit img").css("opacity", 0);
        $("span#"+id+".benefit img").css("opacity", 1);
    });
}

function showModal()
{
    $('#about-us').on('shown.bs.modal', function () 
    {
        $('html').addClass("in-modal");
    })
    $('#about-us').on('hidden.bs.modal', function () 
    {
        $('html').removeClass("in-modal");
    })
}

function qa()
{
    $('div.options a').on('click', function(e)
    {
        e.preventDefault();
        var answer = $(this).data('answer');
        var question = $('div.questions img.active').data('question');
        $('h1.choosen-answer i').addClass('hide');
        if(answer == 'right')
        {
            $('h1.choosen-answer i.fa-circle-o').removeClass('hide');
        }
        else if(answer == 'wrong')
        {
            $('h1.choosen-answer i.fa-times').removeClass('hide');
        }
        $('div.explanations div.explanation-'+question).removeClass('hide').addClass('active');
        $('div.navigation a').addClass('hide');
        if(question != 1)
        {
            $('div.navigation a#prev').removeClass('hide');
        }
        if(question != 4)
        {
            $('div.navigation a#next').removeClass('hide');
        }
    });


    $('div.navigation a#next').on('click', function(e)
    {
        e.preventDefault();
        $('h1.choosen-answer i').addClass('hide');
        var question = $('div.questions img.active').data('question');
        var next = question + 1;
        $('div.questions img').addClass('hide').removeClass('active');
        $('div.explanations div').addClass('hide').removeClass('active');
        $('div.navigation a').addClass('hide');
        $('div.questions img.question-'+next).removeClass('hide').addClass('active');
    });

    $('div.navigation a#prev').on('click', function(e)
    {
        e.preventDefault();
        $('h1.choosen-answer i').addClass('hide');
        var question = $('div.questions img.active').data('question');
        var prev = question - 1;
        $('div.questions img').addClass('hide').removeClass('active');
        $('div.explanations div').addClass('hide').removeClass('active');
        $('div.navigation a').addClass('hide');
        $('div.questions img.question-'+prev).removeClass('hide').addClass('active');
    });
}