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
        values: [{x: -700, y: 250}]
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

    var left = $('div.rrc div.photo-description').parent().width() * 0.3;

    var descriptionRRC = new ScrollMagic.Scene({
        triggerElement: "div.chapter-one-page-content div.description p:last-child",
        duration: "30%",
        triggerHook: 0.5
    })
    .setTween("div.rrc div.photo-description", 1, {left: left})
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

    var scobyTea = new ScrollMagic.Scene({
        triggerElement: "div.wood-background",
        duration: "30%",
        triggerHook: 0.4
    })
    .setTween("div.wood-background img#scoby-jar", 1, {left: 0})
    .addTo(scrollMagicController);

    var tea = new ScrollMagic.Scene({
        triggerElement: "div.wood-background p.description",
        duration: "30%",
        triggerHook: 0.3
    })
    .setTween("div.wood-background img#tea-jar", 1, {left: -250})
    .addTo(scrollMagicController);

    var ArrowTitle = new ScrollMagic.Scene({
        triggerElement: "div.wood-background",
        duration: "25%",
        triggerHook: 0.4,
        offset: 100
    })
    .setTween("div.scoby-tea-img img#arrow-title", 1, {opacity: 1})
    .addTo(scrollMagicController);

    var ArrowSubtitle = new ScrollMagic.Scene({
        triggerElement: "div.wood-background",
        duration: "25%",
        triggerHook: 0.4,
        offset: 150
    })
    .setTween("div.scoby-tea-img img#arrow-subtitle", 1, {opacity: 1})
    .addTo(scrollMagicController);

    var subtitle = new ScrollMagic.Scene({
        triggerElement: "div.wood-background",
        duration: "25%",
        triggerHook: 0.4,
        offset: 150
    })
    .setTween("div.wood-background h2", 1, {opacity: 1})
    .addTo(scrollMagicController);

    var scobyIndonesia = new ScrollMagic.Scene({
        triggerElement: "div.wood-background h2",
        duration: "30%",
        triggerHook: 0.5,
        offset: 150
    })
    .setTween("div.wood-background img#scoby-indonesia", 1, {left: -150})
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

    var b15 = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#b15", 1, {top: 0})
    .addTo(scrollMagicController);

    var b1 = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#b1", 1, {top: 0})
    .addTo(scrollMagicController);

    var b3 = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#b3", 1, {top: 0})
    .addTo(scrollMagicController);

    var b6 = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#b6", 1, {top: 0})
    .addTo(scrollMagicController);

    var b2 = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#b2", 1, {top: -80})
    .addTo(scrollMagicController);

    var probiotik = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#probiotik", 1, {top: 0})
    .addTo(scrollMagicController);

    var c = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#c", 1, {top: 0})
    .addTo(scrollMagicController);

    var enzim = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#enzim", 1, {top: 0})
    .addTo(scrollMagicController);

    var b12 = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 350
    })
    .setTween("div.kombucha-element img#b12", 1, {top: 0})
    .addTo(scrollMagicController);

    var moveWidth = $('div.content-benefit').width() * 0.7;

    var benefit = new ScrollMagic.Scene({
        triggerElement: "div.indonesia-map img",
        duration: "30%",
        triggerHook: 0,
        offset: 400
    })
    .setTween("div.content-benefit img", 1, {left: -moveWidth})
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
    .setTween("div.yellow-capsule-img img", 1, {top: -148, opacity: 1})
    .addTo(scrollMagicController);

    var yellowCapsule = new ScrollMagic.Scene({
        triggerElement: "div#diet.healthy-way",
        duration: "30%",
        triggerHook: 0
    })
    .setTween("div.chapter-six-page div.yellow-capsule", 1, {opacity: 1})
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