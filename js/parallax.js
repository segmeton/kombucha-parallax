var scrollMagicController = new ScrollMagic.Controller();

(function($)
{
    $(document).ready(function()
    {   
        cloudParallax();
        menubarParallax();
        chapterOneParallax();
        chapterTwoParallax();
        chapterThreeParallax();
        chapterFourParallax();
        chapterFiveParallax();
        chapterSixParallax();
        footerParallax();
		parallax();
    });
})(jQuery);

function cloudParallax()
{
    $('ul.clouds').parallax();
}

function menubarParallax()
{
    var menu = new ScrollMagic.Scene({
        offset: 15,
    })
    .setTween("div.menu-bar", 1, {opacity: 1})
    .addTo(scrollMagicController );
}

function introPageParralax()
{
    var intro = new ScrollMagic.Scene({
        triggerElement: 'div.intro-page',
        duration: "100%"
    })
    .on("enter", function (event) {
        emptyTitle();
    })
    .addTo(scrollMagicController);
}

function chapterOneParallax()
{
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

    var curve = {
        curviness: 1.25,
        values: [{x: -600, y: 250}]
    };

    var kombuchaImageTween = TweenMax.to("div.kombucha-img img.photo", 1,{css:{bezier:curve}, ease: Circ.easeInOut});

    var kombuchaImage = new ScrollMagic.Scene({
        triggerElement: "div.intro-page div.intro-text p",
        duration: "30%",
        triggerHook: 0
    })
    .setTween(kombuchaImageTween)
    .addTo(scrollMagicController);

    var arrowKombucha = new ScrollMagic.Scene({
        triggerElement: "div.intro-page div.intro-text h3",
        duration: "30%",
        triggerHook: 0
    })
    .setTween("div.chapter-one-page-content div.kombucha-img img.arrow", 1, {opacity: 1})
    .addTo(scrollMagicController);

    var mapRRC = new ScrollMagic.Scene({
        triggerElement: "div.chapter-one-page-content div.description p:last-child",
        duration: "30%",
        triggerHook: 0.5
    })
    .setTween("div.rrc-photo img#rrc-map", 1, {left: 0})
    .addTo(scrollMagicController);

    var descriptionRRC = new ScrollMagic.Scene({
        triggerElement: "div.chapter-one-page-content div.description p:last-child",
        duration: "30%",
        triggerHook: 0.5
    })
    .setTween("div.rrc div.photo-description", 1, {left: 0})
    .addTo(scrollMagicController);

    var arrowRRC = new ScrollMagic.Scene({
        triggerElement: "div.chapter-one-page-content div.description p:last-child",
        duration: "30%",
        triggerHook: 0.5,
        offset: 150
    })
    .setTween("div.assumption img#rrc-arrow", 1, {opacity: 1})
    .addTo(scrollMagicController);

    var assumption = new ScrollMagic.Scene({
        triggerElement: "div.chapter-one-page-content div.description p:last-child",
        duration: "30%",
        triggerHook: 0.5,
        offset: 150
    })
    .setTween("div.assumption h3", 1, {opacity: 1})
    .addTo(scrollMagicController);
}

function chapterTwoParallax()
{
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
}

function chapterThreeParallax()
{
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
}

function chapterFourParallax()
{
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
}

function chapterFiveParallax()
{
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
}

function chapterSixParallax()
{
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

    var sport = new ScrollMagic.Scene({
        triggerElement: "div.chapter-six-page",
        duration: "30%",
        triggerHook: 0.5
    })
    .setTween("div.healthy-way-img img#sport-img", 1, {top: 0, opacity: 1})
    .addTo(scrollMagicController);

    var rest = new ScrollMagic.Scene({
        triggerElement: "div.chapter-six-page",
        duration: "30%",
        triggerHook: 0.5
    })
    .setTween("div.healthy-way-img img#rest-img", 1, {left: 200, opacity: 1})
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
    .setTween("div.yellow-capsule-img img", 1, {top: -158, opacity: 1})
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
}

function footerParallax()
{
    var footer = new ScrollMagic.Scene({
        triggerElement: 'footer',
        duration: "50%"
    })
    .on("enter", function (event) {
        emptyTitle();
    })
    .addTo(scrollMagicController);
}